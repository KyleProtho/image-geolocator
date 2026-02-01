"use client";

import { useState } from "react";
import Link from "next/link";
import { ImageUploader } from "@/components/ImageUploader";
import { Dashboard } from "@/components/Dashboard";
import { analyzeImageAction } from "@/app/actions";
import { compressImage } from "@/utils/image-compression";

export default function Home() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [analysisData, setAnalysisData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);



    const handleImageSelected = async (file) => {
        setSelectedImage(file);
        setIsLoading(true);
        setAnalysisData(null);
        setError(null);

        try {
            let imageProc = file;
            if (file.size > 1024 * 1024) {
                console.log("Image too large, compressing...");
                imageProc = await compressImage(file);
                console.log(`Compressed: ${(imageProc.size / 1024 / 1024).toFixed(2)}MB`);
            }

            const formData = new FormData();
            formData.append("image", imageProc);

            const result = await analyzeImageAction(formData);

            if (result.success) {
                setAnalysisData(result.data);
            } else {
                setError(result.error || "Analysis failed.");
                setAnalysisData(null);
            }
        } catch (err) {
            setError("System connection error.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 z-50 border-b border-stone-800/50 bg-black/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-lg font-bold tracking-tight">SYS.VISUAL_INTEL</div>
                    <Link
                        href="/how-it-works"
                        className="text-sm text-stone-400 hover:text-emerald-400 transition-colors"
                    >
                        How It Works
                    </Link>
                </div>
            </header>

            <main className="flex h-screen w-screen overflow-hidden bg-black text-white">
                {/* Left Panel - Image Source */}
                <div className="w-1/2 h-full border-r border-stone-800 relative z-10">
                    <ImageUploader
                        onImageSelected={handleImageSelected}
                        selectedImage={selectedImage}
                        isAnalyzing={isLoading}
                    />
                </div>

                {/* Right Panel - Intelligence Dashboard */}
                <div className="w-1/2 h-full bg-[#09090b] relative z-0">
                    {/* Background Grid Texture */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />

                    <Dashboard data={analysisData} isLoading={isLoading} />

                    {error && (
                        <div className="absolute bottom-4 right-4 bg-red-900/90 text-white p-4 rounded border border-red-500 text-sm font-mono shadow-lg animate-in fade-in slide-in-from-bottom-2">
                            <p className="font-bold mb-1">SYSTEM_ERROR</p>
                            {error}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
