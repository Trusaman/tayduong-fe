import { Link } from "@/i18n/routing";
import { TwitterIcon, Facebook, PhoneIcon, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-teal-600 text-white py-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            {t("Company")}
                        </h2>
                        <div className="space-y-2">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                                <address className="not-italic">
                                    <p>{t("Address")}</p>
                                </address>
                            </div>
                            <div className="flex items-center">
                                <PhoneIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                                <p>
                                    {t("City")}: {t("Telephone")}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                                <p>tayduong.yduoc@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            {t("QuickLinks")}
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-gray-200"
                                >
                                    {t("AboutUs")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="hover:text-gray-200"
                                >
                                    {t("OurProducts")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-gray-200"
                                >
                                    {t("ContactUs")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            {t("MAP")}
                        </h3>
                        <div className="relative w-full h-48 bg-gray-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.8262493288269!2d105.74137657932731!3d21.029422908829666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455001208ede3%3A0xb81c678d9df17d9f!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gWSBkxrDhu6NjIFTDonkgRMawxqFuZw!5e1!3m2!1sen!2sus!4v1751267926845!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <Link
                                href="https://goo.gl/maps/XYZ123"
                                className="absolute bottom-2 left-2 bg-white text-black text-xs px-2 py-1 rounded hover:bg-gray-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("ViewBiggerMap")}
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            {t("Certifications")}
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
                <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2024 {t("Copyright")}</p>
                    <div className="flex mt-4 md:mt-0">
                        <Link href="#" className="mr-4 hover:text-gray-200">
                            <TwitterIcon className="w-6 h-6" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="hover:text-gray-200">
                            <Facebook className="w-6 h-6" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 text-sm">
                    <Link href="#" className="hover:text-gray-200">
                        {t("PrivacyPolicy")}
                    </Link>
                    {" | "}
                    <Link href="#" className="hover:text-gray-200">
                        {t("TermsOfService")}
                    </Link>
                </div>
                <p className="mt-4 text-sm">{t("TOS")}</p>
            </div>
        </footer>
    );
}
