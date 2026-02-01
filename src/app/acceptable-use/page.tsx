import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Shield, XCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Acceptable Use Policy",
    description: "Acceptable Use Policy for SYS.VISUAL_INTEL. Learn about prohibited content and proper usage guidelines.",
};

export default function AcceptableUsePage() {
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
                <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-10 h-10 text-emerald-500" />
                    <h1 className="text-4xl font-bold">Acceptable Use Policy</h1>
                </div>
                <p className="text-stone-400 mb-8">Last Updated: January 31, 2026</p>

                <div className="space-y-8 text-stone-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
                        <p>
                            This Acceptable Use Policy ("AUP") governs your use of SYS.VISUAL_INTEL. This policy exists to ensure
                            the Service is used legally, ethically, and safely. Violations of this policy will result in immediate
                            termination of access and may be reported to law enforcement.
                        </p>
                    </section>

                    {/* PROHIBITED CONTENT - Prominent Section */}
                    <section className="bg-red-950/40 border-2 border-red-800 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="w-8 h-8 text-red-400" />
                            <h2 className="text-3xl font-bold text-red-400">Strictly Prohibited Content</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-red-900/30 border border-red-700 rounded p-4">
                                <h3 className="text-xl font-bold text-red-300 mb-3 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    1. Sexually Explicit Material - ZERO TOLERANCE
                                </h3>
                                <p className="mb-3 font-semibold text-red-200">
                                    The upload of ANY sexually explicit, pornographic, or nude content is ABSOLUTELY FORBIDDEN.
                                </p>
                                <p className="mb-3">This includes but is not limited to:</p>
                                <ul className="space-y-2 list-disc list-inside ml-4">
                                    <li>Pornographic images or videos</li>
                                    <li>Nude or partially nude individuals in sexual contexts</li>
                                    <li>Sexually suggestive or explicit content</li>
                                    <li>Adult content of any kind</li>
                                    <li>Intimate images shared without consent</li>
                                </ul>
                                <div className="mt-4 p-3 bg-red-800/50 rounded border border-red-600">
                                    <p className="font-bold text-red-100">
                                        ⚠️ CONSEQUENCE: Immediate permanent ban and potential legal action
                                    </p>
                                </div>
                            </div>

                            <div className="bg-red-900/30 border border-red-700 rounded p-4">
                                <h3 className="text-xl font-bold text-red-300 mb-3 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    2. Child Exploitation Material - ZERO TOLERANCE
                                </h3>
                                <p className="mb-3 font-semibold text-red-200">
                                    Any content involving minors in inappropriate, exploitative, or harmful contexts is strictly prohibited.
                                </p>
                                <div className="mt-3 p-3 bg-red-800/50 rounded border border-red-600">
                                    <p className="font-bold text-red-100">
                                        ⚠️ CONSEQUENCE: Immediate reporting to National Center for Missing & Exploited Children (NCMEC)
                                        and law enforcement authorities
                                    </p>
                                </div>
                            </div>

                            <div className="bg-red-900/30 border border-red-700 rounded p-4">
                                <h3 className="text-xl font-bold text-red-300 mb-3">3. Violent and Harmful Content</h3>
                                <p className="mb-2">Prohibited content includes:</p>
                                <ul className="space-y-1 list-disc list-inside ml-4">
                                    <li>Graphic violence, gore, or mutilation</li>
                                    <li>Content depicting torture or abuse</li>
                                    <li>Terrorist propaganda or recruitment materials</li>
                                    <li>Content promoting self-harm or suicide</li>
                                </ul>
                            </div>

                            <div className="bg-red-900/30 border border-red-700 rounded p-4">
                                <h3 className="text-xl font-bold text-red-300 mb-3">4. Illegal Surveillance and Stalking</h3>
                                <p className="mb-2">You may NOT use this Service to:</p>
                                <ul className="space-y-1 list-disc list-inside ml-4">
                                    <li>Track, stalk, or harass individuals</li>
                                    <li>Conduct unauthorized surveillance</li>
                                    <li>Dox or expose private information about individuals</li>
                                    <li>Violate restraining orders or legal protections</li>
                                    <li>Facilitate any form of harassment or intimidation</li>
                                </ul>
                            </div>

                            <div className="bg-red-900/30 border border-red-700 rounded p-4">
                                <h3 className="text-xl font-bold text-red-300 mb-3">5. Privacy Violations</h3>
                                <p className="mb-2">Prohibited activities include:</p>
                                <ul className="space-y-1 list-disc list-inside ml-4">
                                    <li>Analyzing images obtained without proper authorization</li>
                                    <li>Violating reasonable expectations of privacy</li>
                                    <li>Using the Service to circumvent privacy protections</li>
                                    <li>Analyzing images from private spaces without consent</li>
                                </ul>
                            </div>

                            <div className="bg-red-900/30 border border-red-700 rounded p-4">
                                <h3 className="text-xl font-bold text-red-300 mb-3">6. Other Prohibited Content</h3>
                                <ul className="space-y-1 list-disc list-inside ml-4">
                                    <li>Hate speech or content promoting discrimination</li>
                                    <li>Content violating intellectual property rights</li>
                                    <li>Malware, viruses, or malicious code</li>
                                    <li>Spam or automated abuse of the Service</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ACCEPTABLE USES - Positive Section */}
                    <section className="bg-emerald-950/40 border-2 border-emerald-800 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-8 h-8 text-emerald-400" />
                            <h2 className="text-3xl font-bold text-emerald-400">Acceptable Uses</h2>
                        </div>

                        <p className="mb-4">The Service is designed for legitimate purposes including:</p>

                        <div className="space-y-4">
                            <div className="bg-emerald-900/20 border border-emerald-800 rounded p-4">
                                <h3 className="text-lg font-semibold text-emerald-300 mb-2">✓ Research and Education</h3>
                                <p>Academic research, educational projects, and scholarly analysis of geographical features</p>
                            </div>

                            <div className="bg-emerald-900/20 border border-emerald-800 rounded p-4">
                                <h3 className="text-lg font-semibold text-emerald-300 mb-2">✓ OSINT Investigations</h3>
                                <p>Open-source intelligence gathering by authorized personnel, journalists, and researchers</p>
                            </div>

                            <div className="bg-emerald-900/20 border border-emerald-800 rounded p-4">
                                <h3 className="text-lg font-semibold text-emerald-300 mb-2">✓ Personal Use</h3>
                                <p>Identifying locations in your own photographs or images you have permission to analyze</p>
                            </div>

                            <div className="bg-emerald-900/20 border border-emerald-800 rounded p-4">
                                <h3 className="text-lg font-semibold text-emerald-300 mb-2">✓ Journalism and Fact-Checking</h3>
                                <p>Verifying locations in news images, fact-checking claims, and investigative journalism</p>
                            </div>

                            <div className="bg-emerald-900/20 border border-emerald-800 rounded p-4">
                                <h3 className="text-lg font-semibold text-emerald-300 mb-2">✓ Historical Research</h3>
                                <p>Analyzing historical photographs, archival research, and cultural heritage documentation</p>
                            </div>

                            <div className="bg-emerald-900/20 border border-emerald-800 rounded p-4">
                                <h3 className="text-lg font-semibold text-emerald-300 mb-2">✓ Environmental Monitoring</h3>
                                <p>Analyzing landscape changes, environmental research, and geographical studies</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">User Responsibilities</h2>
                        <div className="bg-stone-900/50 border border-stone-700 rounded-lg p-6">
                            <p className="mb-3 font-semibold">By using SYS.VISUAL_INTEL, you agree to:</p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Only upload images you have the legal right to possess and analyze</li>
                                <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                                <li>Respect the privacy and rights of individuals depicted in images</li>
                                <li>Use analysis results responsibly and ethically</li>
                                <li>Not attempt to circumvent content moderation or security measures</li>
                                <li>Report any violations of this policy you encounter</li>
                                <li>Accept full responsibility for your use of the Service</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Enforcement and Consequences</h2>
                        <div className="space-y-4">
                            <p>We take violations of this policy extremely seriously. Consequences may include:</p>

                            <div className="bg-amber-900/20 border border-amber-700 rounded p-4">
                                <h3 className="font-semibold text-amber-300 mb-2">Immediate Actions:</h3>
                                <ul className="space-y-1 list-disc list-inside ml-4">
                                    <li>Immediate termination of access to the Service</li>
                                    <li>Permanent ban from using the Service</li>
                                    <li>Deletion of all associated data</li>
                                </ul>
                            </div>

                            <div className="bg-amber-900/20 border border-amber-700 rounded p-4">
                                <h3 className="font-semibold text-amber-300 mb-2">Legal Actions:</h3>
                                <ul className="space-y-1 list-disc list-inside ml-4">
                                    <li>Reporting to appropriate law enforcement agencies</li>
                                    <li>Cooperation with criminal investigations</li>
                                    <li>Civil legal action for damages</li>
                                    <li>Reporting to NCMEC for child exploitation material</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Content Moderation</h2>
                        <p className="mb-3">
                            We employ both automated and manual content moderation systems to detect and prevent prohibited content:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>AI-powered content analysis scans all uploaded images</li>
                            <li>Images flagged as potentially violating are blocked from processing</li>
                            <li>Severe violations are logged and may be reviewed by human moderators</li>
                            <li>Repeat violations result in escalating consequences</li>
                            <li>We reserve the right to report illegal content to authorities without notice</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Reporting Violations</h2>
                        <p className="mb-3">
                            If you encounter content or behavior that violates this Acceptable Use Policy, please report it
                            immediately through the Service interface. We take all reports seriously and will investigate promptly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
                        <p>
                            We reserve the right to modify this Acceptable Use Policy at any time. Material changes will be
                            communicated through the Service. Continued use after changes constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section className="bg-stone-900/50 border border-stone-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">Additional Resources</h2>
                        <p className="mb-3">For more information, please review:</p>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms" className="text-emerald-400 hover:underline">
                                    Terms of Service
                                </Link>
                                {" "}- Legal terms governing use of the Service
                            </li>
                            <li>
                                <Link href="/privacy" className="text-emerald-400 hover:underline">
                                    Privacy Policy
                                </Link>
                                {" "}- How we handle and protect your data
                            </li>
                        </ul>
                    </section>

                    <div className="pt-8 border-t border-stone-800">
                        <p className="text-sm text-stone-500">
                            By using SYS.VISUAL_INTEL, you acknowledge that you have read, understood, and agree to comply with
                            this Acceptable Use Policy.
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
