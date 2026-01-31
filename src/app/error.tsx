'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
            <div className="text-center space-y-6 max-w-md px-6">
                {/* Warning icon */}
                <div className="relative">
                    <div className="text-8xl font-mono font-bold text-amber-500 animate-pulse">
                        ⚠
                    </div>
                    <div className="absolute inset-0 text-8xl text-amber-500/20 blur-lg">
                        ⚠
                    </div>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-mono font-semibold tracking-tight text-amber-500">
                        SYSTEM_ERROR
                    </h2>
                    <p className="text-stone-400 font-mono text-sm">
                        An unexpected error occurred during processing.
                    </p>
                    {error.digest && (
                        <p className="text-stone-600 font-mono text-xs">
                            ERROR_ID: {error.digest}
                        </p>
                    )}
                </div>

                <div className="flex gap-3 justify-center pt-4">
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-mono text-sm rounded transition-colors duration-200 border border-amber-500"
                    >
                        RETRY_OPERATION
                    </button>
                    <a
                        href="/"
                        className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white font-mono text-sm rounded transition-colors duration-200 border border-stone-600"
                    >
                        RETURN_HOME
                    </a>
                </div>

                {/* Grid background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none -z-10" />
            </div>
        </div>
    );
}
