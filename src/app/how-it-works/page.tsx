import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Find Location from Picture - How It Works",
    description: "Discover how to find location from picture using AI-powered geolocation. Learn where is this photo taken, identify locations from images, and perform reverse image location searches with advanced OSINT tools.",
    keywords: [
        "find location from picture",
        "where is this",
        "identify location from photo",
        "reverse image location search",
        "photo geolocation finder",
        "where was this picture taken",
        "image location finder",
        "find where photo was taken",
        "geolocation from image",
        "picture location identifier"
    ],
    openGraph: {
        title: "Find Location from Picture - How It Works | SYS.VISUAL_INTEL",
        description: "Discover how to find location from picture using AI-powered geolocation technology.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Find Location from Picture - How It Works",
        description: "Discover how to find location from picture using AI-powered geolocation technology.",
    },
};

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="border-b border-stone-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        SYS.VISUAL_INTEL
                    </Link>
                    <Link
                        href="/"
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded text-sm font-medium transition-colors"
                    >
                        Launch Tool
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        Find Location from Picture
                    </h1>
                    <p className="text-xl text-stone-400 max-w-3xl mx-auto">
                        Wondering "where is this?" Our AI-powered geolocation tool analyzes images to identify locations,
                        landmarks, and geographical features with precision.
                    </p>
                </div>

                {/* How It Works */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-6">
                        <div className="text-emerald-400 text-4xl font-bold mb-4">01</div>
                        <h3 className="text-xl font-semibold mb-3">Upload Your Image</h3>
                        <p className="text-stone-400">
                            Simply drag and drop any photo you want to analyze. Our system accepts all common image formats.
                        </p>
                    </div>

                    <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-6">
                        <div className="text-emerald-400 text-4xl font-bold mb-4">02</div>
                        <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
                        <p className="text-stone-400">
                            Advanced AI examines visual clues: architecture, landscapes, signs, vegetation, and environmental markers.
                        </p>
                    </div>

                    <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-6">
                        <div className="text-emerald-400 text-4xl font-bold mb-4">03</div>
                        <h3 className="text-xl font-semibold mb-3">Get Results</h3>
                        <p className="text-stone-400">
                            Receive detailed geolocation data including estimated coordinates, region, landmarks, and confidence level.
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

                    <div className="space-y-6">
                        <div className="bg-stone-900/30 border border-stone-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                                How do I find the location from a picture?
                            </h3>
                            <p className="text-stone-300">
                                Upload your image to our tool, and our AI will analyze visual elements like landmarks, architecture,
                                vegetation, signage, and geographical features to determine where the photo was taken. The system
                                provides estimated coordinates and location details within seconds.
                            </p>
                        </div>

                        <div className="bg-stone-900/30 border border-stone-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                                Can I find where a photo was taken without GPS data?
                            </h3>
                            <p className="text-stone-300">
                                Yes! Our tool uses visual analysis rather than relying on EXIF metadata or GPS coordinates.
                                Even if location data has been stripped from the image, our AI can identify locations based on
                                visible clues in the photograph itself.
                            </p>
                        </div>

                        <div className="bg-stone-900/30 border border-stone-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                                What types of images work best for location identification?
                            </h3>
                            <p className="text-stone-300">
                                Images with distinctive landmarks, architectural features, street signs, or unique geographical
                                characteristics provide the most accurate results. Clear, well-lit photos with recognizable
                                features yield better geolocation accuracy than generic or heavily cropped images.
                            </p>
                        </div>

                        <div className="bg-stone-900/30 border border-stone-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                                Is this a reverse image location search?
                            </h3>
                            <p className="text-stone-300">
                                Yes, this is an advanced form of reverse image location search. Unlike simple reverse image searches
                                that find similar images online, our tool performs deep visual analysis to determine the actual
                                geographical location where a photo was captured.
                            </p>
                        </div>

                        <div className="bg-stone-900/30 border border-stone-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                                How accurate is the photo geolocation finder?
                            </h3>
                            <p className="text-stone-300">
                                Accuracy varies based on image quality and distinctive features. For images with clear landmarks
                                or unique characteristics, we can often pinpoint locations to within a specific city or region.
                                The tool provides a confidence score with each analysis to help you assess reliability.
                            </p>
                        </div>

                        <div className="bg-stone-900/30 border border-stone-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                                What information will I receive about the location?
                            </h3>
                            <p className="text-stone-300">
                                You'll receive comprehensive geolocation intelligence including: estimated coordinates,
                                country/region identification, nearby landmarks, architectural style analysis, environmental
                                characteristics, and a detailed explanation of the visual clues used to determine the location.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-800/30 rounded-lg p-12">
                    <h2 className="text-3xl font-bold mb-4">Ready to Find Where Your Picture Was Taken?</h2>
                    <p className="text-stone-400 mb-8 text-lg">
                        Start analyzing images now with our advanced AI-powered geolocation tool.
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-lg font-semibold transition-colors"
                    >
                        Launch Geolocation Tool
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-stone-800 mt-16 py-8">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-wrap gap-6 justify-center text-sm text-stone-400 mb-4">
                        <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/acceptable-use" className="hover:text-emerald-400 transition-colors">
                            Acceptable Use
                        </Link>
                    </div>
                    <p className="text-center text-stone-500 text-sm">© 2026 SYS.VISUAL_INTEL. Advanced geospatial intelligence analysis.</p>
                </div>
            </footer>
        </div>
    );
}
