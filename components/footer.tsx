import { TwitterIcon, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            Tay Duong Pharmacy
                        </h2>
                        <address className="not-italic">
                            <p>Head Office</p>
                            <p>123 Pharmacy Street</p>
                            <p>Healthville, HV1 2PH</p>
                            <p>United Kingdom</p>
                        </address>
                    </div>
                    <div className="md:col-span-2 flex flex-col md:flex-row justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary-foreground"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary-foreground"
                                    >
                                        Our Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary-foreground"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Certifications
                            </h3>
                            <div className="flex space-x-4">
                                <span className="border border-white px-2 py-1 rounded">
                                    CE
                                </span>
                                <span className="border border-white px-2 py-1 rounded">
                                    ISO
                                </span>
                                <span className="border border-white px-2 py-1 rounded">
                                    GDP
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2024 Tay Duong Pharmacy. All rights reserved.</p>
                    <div className="flex mt-4 md:mt-0">
                        <Link
                            href="#"
                            className="mr-4 hover:text-primary-foreground"
                        >
                            <TwitterIcon className="w-6 h-6" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-primary-foreground"
                        >
                            <Facebook className="w-6 h-6" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                    <Link href="#" className="hover:text-primary-foreground">
                        Privacy Policy
                    </Link>
                    {" | "}
                    <Link href="#" className="hover:text-primary-foreground">
                        Terms and Conditions
                    </Link>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                    This website and its content are protected by copyright law.
                    Any unauthorised use, reproduction or distribution of this
                    website or its content in any form is strictly prohibited.
                </p>
            </div>
        </footer>
    );
}
