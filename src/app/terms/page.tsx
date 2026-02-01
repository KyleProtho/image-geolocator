import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of Service for SYS.VISUAL_INTEL geolocation tool. Review acceptable use policies and service guidelines.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="border-b border-stone-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        SYS.VISUAL_INTEL
                    </Link>
                    <Link
                        href="/"
                        className="text-sm text-stone-400 hover:text-emerald-400 transition-colors"
                    >
                        ← Back to Tool
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                <p className="text-stone-400 mb-8">Last Updated: January 31, 2026</p>

                <div className="space-y-8 text-stone-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using SYS.VISUAL_INTEL ("the Service"), you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, you must not use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Service Description</h2>
                        <p>
                            SYS.VISUAL_INTEL is an AI-powered geolocation analysis tool that examines uploaded images to identify
                            potential geographic locations based on visual elements. The Service provides estimated location data
                            and is intended for legitimate research, educational, and analytical purposes only.
                        </p>
                    </section>

                    <section className="bg-red-900/20 border border-red-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-red-400 mb-4">3. Prohibited Content and Activities</h2>
                        <p className="mb-4 font-semibold text-red-300">
                            The following activities are STRICTLY PROHIBITED and will result in immediate termination of access:
                        </p>
                        <ul className="space-y-3 list-disc list-inside">
                            <li className="text-red-200">
                                <strong>Sexually Explicit Material:</strong> Uploading, transmitting, or analyzing any images containing
                                nudity, pornography, or sexually explicit content is absolutely forbidden.
                            </li>
                            <li>
                                <strong>Child Exploitation:</strong> Any content involving minors in inappropriate contexts is strictly
                                prohibited and will be reported to authorities.
                            </li>
                            <li>
                                <strong>Illegal Activities:</strong> Using the Service to facilitate stalking, harassment, doxxing,
                                or any illegal surveillance activities.
                            </li>
                            <li>
                                <strong>Violence and Harm:</strong> Uploading images depicting graphic violence, gore, or content
                                intended to cause harm.
                            </li>
                            <li>
                                <strong>Privacy Violations:</strong> Analyzing images without proper authorization when such analysis
                                would violate privacy laws or individual rights.
                            </li>
                            <li>
                                <strong>Malicious Use:</strong> Attempting to reverse engineer, exploit, or compromise the Service's
                                security or functionality.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Acceptable Use</h2>
                        <p className="mb-3">The Service is intended for legitimate purposes including:</p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Academic research and educational analysis</li>
                            <li>Open-source intelligence (OSINT) investigations by authorized personnel</li>
                            <li>Identifying locations in personal photographs</li>
                            <li>Journalistic research and fact-checking</li>
                            <li>Historical and archival research</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. User Responsibilities</h2>
                        <p className="mb-3">You agree to:</p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Only upload images you have the legal right to analyze</li>
                            <li>Comply with all applicable local, state, national, and international laws</li>
                            <li>Not use the Service to harm, harass, or violate the rights of others</li>
                            <li>Take responsibility for all content you upload to the Service</li>
                            <li>Immediately report any violations of these terms you encounter</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Content Monitoring and Enforcement</h2>
                        <p className="mb-3">
                            We reserve the right to monitor uploaded content for compliance with these terms. We employ automated
                            systems and may conduct manual reviews to detect prohibited content. Violations will result in:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Immediate termination of access to the Service</li>
                            <li>Deletion of all associated data</li>
                            <li>Reporting to appropriate law enforcement authorities when required by law</li>
                            <li>Legal action to the fullest extent permitted by law</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Disclaimer of Warranties</h2>
                        <p>
                            The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind. We do not guarantee
                            the accuracy, completeness, or reliability of geolocation results. Analysis results are estimates and
                            should not be relied upon as definitive proof of location.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, SYS.VISUAL_INTEL and its operators shall not be liable for any
                            indirect, incidental, special, consequential, or punitive damages resulting from your use or inability
                            to use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Data Retention and Privacy</h2>
                        <p>
                            Uploaded images are processed temporarily and are not permanently stored on our servers. For detailed
                            information about data handling, please review our{" "}
                            <Link href="/privacy" className="text-emerald-400 hover:underline">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Modifications to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms of Service at any time. Continued use of the Service after
                            changes constitutes acceptance of the modified terms. Material changes will be communicated through
                            the Service interface.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">11. Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend access to the Service immediately, without prior notice,
                            for any violation of these Terms of Service or for any other reason at our sole discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">12. Governing Law</h2>
                        <p>
                            These Terms of Service shall be governed by and construed in accordance with applicable laws, without
                            regard to conflict of law provisions.
                        </p>
                    </section>

                    <section className="bg-stone-900/50 border border-stone-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Information</h2>
                        <p className="mb-3">
                            For questions about these Terms of Service or to report violations, please contact us through the
                            Service interface or review our{" "}
                            <Link href="/acceptable-use" className="text-emerald-400 hover:underline">
                                Acceptable Use Policy
                            </Link>
                            {" "}for additional guidelines.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-stone-800">
                        <p className="text-sm text-stone-500">
                            By using SYS.VISUAL_INTEL, you acknowledge that you have read, understood, and agree to be bound by
                            these Terms of Service.
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-stone-800 mt-16 py-8">
                <div className="max-w-4xl mx-auto px-6">
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
                    <p className="text-center text-stone-500 text-sm">
                        © 2026 SYS.VISUAL_INTEL. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
