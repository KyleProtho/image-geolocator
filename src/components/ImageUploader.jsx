"use client";

import { useCallback, useState } from "react";
import { Upload, Crosshair, MapPin, Scan } from "lucide-react";
import clsx from "clsx";

export function ImageUploader({ onImageSelected, selectedImage, isAnalyzing }) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
        (e) => {
            e.preventDefault();
            setIsDragging(false);
            const file = e.dataTransfer.files[0];
            if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
                onImageSelected(file);
            }
        },
        [onImageSelected]
    );

    const handleFileInput = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            onImageSelected(file);
        }
    };

    return (
        <div className="relative h-full w-full flex flex-col bg-stone-950 border-r border-stone-800">
            {/* Top Bar Overlay */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-between px-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-500">
                    <Scan className="w-4 h-4" />
                    <span>SYS.VISUAL_INTEL.V1</span>
                </div>
                <div className="text-[10px] text-stone-500 font-mono">
                    {selectedImage ? "TARGET_LOCKED" : "AWAITING_INPUT"}
                </div>
            </div>

            <div
                className={clsx(
                    "flex-1 flex flex-col items-center justify-center transition-colors relative",
                    !selectedImage && isDragging ? "bg-stone-900" : "bg-black",
                    !selectedImage && "cursor-pointer"
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => !selectedImage && document.getElementById("file-input").click()}
            >
                <input
                    type="file"
                    id="file-input"
                    className="hidden"
                    accept="image/png, image/jpeg"
                    onChange={handleFileInput}
                />

                {selectedImage ? (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        {/* Image Preview */}
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Target"
                            className="max-w-full max-h-full object-contain"
                        />

                        {/* Viewfinder Overlay Layers */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Crosshair Center */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50">
                                <Crosshair className="w-24 h-24 text-white stroke-1" />
                            </div>

                            {/* Corners */}
                            <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-emerald-500/50" />
                            <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-emerald-500/50" />
                            <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-emerald-500/50" />
                            <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-emerald-500/50" />

                            {/* Grid Lines (Subtle) */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                            {/* Scanning Animation line if analyzing */}
                            {isAnalyzing && (
                                <div className="absolute inset-x-0 h-0.5 bg-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-[scan_2s_ease-in-out_infinite]" />
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="text-center p-8 border-2 border-dashed border-stone-800 rounded-lg hover:border-emerald-500/50 transition-colors group">
                        <Upload className="w-12 h-12 text-stone-600 mx-auto mb-4 group-hover:text-emerald-500 transition-colors" />
                        <p className="font-mono text-sm text-stone-400 group-hover:text-emerald-400">
                            DRAG_DROP_IMAGE_ASSET
                        </p>
                        <p className="text-xs text-stone-600 mt-2">JPG / PNG ACCEPTED</p>
                    </div>
                )}
            </div>

            {/* Footer Info */}
            <div className="h-8 bg-stone-900 border-t border-stone-800 flex items-center px-4 justify-between text-[10px] font-mono text-stone-500">
                <span>LAT: --.---</span>
                <span>LNG: --.---</span>
                <span>ZOOM: 1.0x</span>
            </div>
        </div>
    );
}
