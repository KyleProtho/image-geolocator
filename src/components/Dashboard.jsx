import { MapPin, Info, AlertTriangle, Layers, Wind, Globe } from "lucide-react";

export function Dashboard({ data, isLoading }) {
    if (isLoading) {
        return (
            <div className="h-full w-full flex items-center justify-center bg-[#09090b] text-emerald-500 font-mono">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-t-2 border-emerald-500 rounded-full animate-spin" />
                    <div className="animate-pulse">PROCESSING_SATELLITE_DATA...</div>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="h-full w-full bg-[#09090b] flex items-center justify-center text-stone-600 font-mono text-sm p-8">
                <div className="flex flex-col items-center gap-2">
                    <Globe className="w-12 h-12 opacity-20" />
                    <p className="text-center">AWAITING_TELEMETRY</p>
                    <p className="text-xs opacity-50">Upload an image to begin geospatial tactical analysis.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full w-full overflow-y-auto bg-[#09090b] p-6 pt-20 font-mono text-sm">
            <div className="max-w-3xl mx-auto space-y-6">

                {/* Header Card */}
                <div className="border border-stone-800 bg-stone-900/50 p-4 rounded-sm flex items-start gap-4">
                    <div className="p-2 bg-emerald-500/10 rounded-sm">
                        <MapPin className="text-emerald-500 w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-emerald-500 font-bold text-lg mb-1">
                            {data.geolocation_hypothesis?.estimated_location || data.geolocation_hypothesis?.['Estimated Location'] || "UNKNOWN LOCATION"}
                        </h2>
                        <div className="flex gap-4 text-xs text-stone-400">
                            <span className="flex items-center gap-1">
                                CONFIDENCE: <span className="text-white">{data.geolocation_hypothesis?.confidence_score || data.geolocation_hypothesis?.['Confidence Score'] || "N/A"}</span>
                            </span>
                            <span className="text-emerald-500/50">|</span>
                            <span className="uppercase text-stone-500">HYPOTHESIS_LOCKED</span>
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="text-stone-300 italic border-l-2 border-stone-700 pl-4 py-1">
                    "{data.summary_description || data['Summary Description']}"
                </div>

                {/* Breakdown Grid */}
                <div className="grid grid-cols-1 gap-6">

                    {/* Composition */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-stone-500 border-b border-stone-800 pb-2 mb-2 uppercase text-xs tracking-wider">
                            <Layers className="w-4 h-4" /> Compositional Analysis
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InfoCard label="FOREGROUND" content={data.compositional_breakdown?.foreground || data.compositional_breakdown?.Foreground} />
                            <InfoCard label="MIDDLEGROUND" content={data.compositional_breakdown?.middleground || data.compositional_breakdown?.Middleground} />
                            <InfoCard label="BACKGROUND" content={data.compositional_breakdown?.background || data.compositional_breakdown?.Background} />
                        </div>
                    </div>

                    {/* Environmental Clues */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-stone-500 border-b border-stone-800 pb-2 mb-2 uppercase text-xs tracking-wider">
                            <Wind className="w-4 h-4" /> Environmental Indicators
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InfoCard label="ARCHITECTURE" content={data.environmental_clues?.architecture_infrastructure || data.environmental_clues?.['Architecture & Infrastructure']} />
                            <InfoCard label="FLORA & CLIMATE" content={data.environmental_clues?.flora_climate || data.environmental_clues?.['Flora & Climate']} />
                            <InfoCard label="SIGNAGE & TEXT" content={data.environmental_clues?.signage_language || data.environmental_clues?.['Signage & Language']} span={2} />
                        </div>
                    </div>

                    {/* Reasoning Engine output */}
                    <div className="border border-stone-800 bg-stone-900/30 p-4 rounded-sm">
                        <h3 className="text-amber-500 text-xs font-bold mb-3 uppercase flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" /> Deductive Reasoning Chain
                        </h3>
                        <p className="text-stone-300 leading-relaxed text-xs">
                            {data.geolocation_hypothesis?.reasoning || data.geolocation_hypothesis?.Reasoning}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

function InfoCard({ label, content, span = 1 }) {
    if (!content) return null;
    return (
        <div className={`col-span-1 md:col-span-${span} bg-stone-900/20 p-3 border border-stone-800/50 rounded-sm hover:border-stone-700 transition-colors`}>
            <h4 className="text-[10px] text-emerald-500/80 mb-1 uppercase tracking-wider">{label}</h4>
            <p className="text-stone-300 text-xs leading-5">{content}</p>
        </div>
    );
}
