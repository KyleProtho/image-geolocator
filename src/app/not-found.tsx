import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
            <div className="text-center space-y-6 max-w-md px-6">
                {/* Glitch effect title */}
                <div className="relative">
                    <h1 className="text-8xl font-mono font-bold text-red-500 animate-pulse">
                        404
                    </h1>
                    <div className="absolute inset-0 text-8xl font-mono font-bold text-red-500/20 blur-sm">
                        404
                    </div>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-mono font-semibold tracking-tight">
                        LOCATION_NOT_FOUND
                    </h2>
                    <p className="text-stone-400 font-mono text-sm">
                        The requested coordinates do not exist in our database.
                    </p>
                </div>

                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-mono text-sm rounded transition-colors duration-200 border border-red-500"
                    >
                        RETURN_TO_BASE →
                    </Link>
                </div>

                {/* Grid background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none -z-10" />
            </div>
        </div>
    );
}
