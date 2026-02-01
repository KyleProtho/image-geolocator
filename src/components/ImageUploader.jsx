"use client";

import { useCallback, useState, useRef, useEffect } from "react";
import { Upload, Crosshair, Scan, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import clsx from "clsx";

export function ImageUploader({ onImageSelected, selectedImage, isAnalyzing }) {
    const [isDragging, setIsDragging] = useState(false);
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPanning, setIsPanning] = useState(false);
    const [panStart, setPanStart] = useState({ x: 0, y: 0 });
    const imageContainerRef = useRef(null);

    // Reset zoom and position when a new image is selected
    useEffect(() => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
    }, [selectedImage]);

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

    // Zoom with mouse wheel
    const handleWheel = useCallback((e) => {
        if (!selectedImage) return;
        e.preventDefault();

        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setZoom(prev => Math.min(Math.max(0.5, prev + delta), 5));
    }, [selectedImage]);

    // Pan start
    const handleMouseDown = useCallback((e) => {
        if (!selectedImage || zoom <= 1) return;
        setIsPanning(true);
        setPanStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }, [selectedImage, zoom, position]);

    // Pan move
    const handleMouseMove = useCallback((e) => {
        if (!isPanning) return;
        setPosition({
            x: e.clientX - panStart.x,
            y: e.clientY - panStart.y
        });
    }, [isPanning, panStart]);

    // Pan end
    const handleMouseUp = useCallback(() => {
        setIsPanning(false);
    }, []);

    // Zoom controls
    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 5));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
    const handleZoomReset = () => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
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

            {/* Zoom Controls - Only show when image is selected */}
            {selectedImage && (
                <div className="absolute top-14 right-4 z-20 flex flex-col gap-2">
                    <button
                        onClick={handleZoomIn}
                        className="p-2 bg-black/70 hover:bg-emerald-500/20 border border-stone-700 hover:border-emerald-500/50 rounded transition-colors group"
                        title="Zoom In"
                    >
                        <ZoomIn className="w-4 h-4 text-stone-400 group-hover:text-emerald-500" />
                    </button>
                    <button
                        onClick={handleZoomOut}
                        className="p-2 bg-black/70 hover:bg-emerald-500/20 border border-stone-700 hover:border-emerald-500/50 rounded transition-colors group"
                        title="Zoom Out"
                    >
                        <ZoomOut className="w-4 h-4 text-stone-400 group-hover:text-emerald-500" />
                    </button>
                    <button
                        onClick={handleZoomReset}
                        className="p-2 bg-black/70 hover:bg-emerald-500/20 border border-stone-700 hover:border-emerald-500/50 rounded transition-colors group"
                        title="Reset View"
                    >
                        <Maximize2 className="w-4 h-4 text-stone-400 group-hover:text-emerald-500" />
                    </button>
                </div>
            )}

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
                    <div
                        ref={imageContainerRef}
                        className="relative w-full h-full flex items-center justify-center overflow-hidden"
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        style={{ cursor: zoom > 1 ? (isPanning ? 'grabbing' : 'grab') : 'default' }}
                    >
                        {/* Image Preview with Transform */}
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Target"
                            className="max-w-full max-h-full object-contain transition-transform select-none"
                            style={{
                                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                                transformOrigin: 'center center'
                            }}
                            draggable={false}
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
                )}\n            </div>

            {/* Legal Notice Banner */}
            {!selectedImage && (
                <div className="px-4 py-3 bg-red-950/30 border-t border-red-900/50 text-[10px] font-mono text-red-300">
                    <p className="mb-1">
                        <span className="text-red-400 font-bold">⚠ WARNING:</span> Sexually explicit content is STRICTLY PROHIBITED.
                    </p>
                    <p className="text-stone-500">
                        By uploading, you agree to our{" "}
                        <a href="/acceptable-use" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
                            Acceptable Use Policy
                        </a>
                    </p>
                </div>
            )}

            {/* Footer Info */}
            <div className="h-8 bg-stone-900 border-t border-stone-800 flex items-center px-4 justify-between text-[10px] font-mono text-stone-500">
                <span>LAT: --.---</span>
                <span>LNG: --.---</span>
                <span className={clsx(
                    "transition-colors",
                    zoom !== 1 && "text-emerald-500"
                )}>
                    ZOOM: {zoom.toFixed(1)}x
                </span>
            </div>
        </div>
    );
}
