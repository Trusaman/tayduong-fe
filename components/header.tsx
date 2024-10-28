import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Header() {
    const t = useTranslations("Header");

    return (
        <header className="bg-white sticky  top-0 left-0 right-0 z-50 ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-4">
                <div className="flex flex-col sm:flex-row justify-between items-center text-cyan-900">
                    <div className="flex items-center mb-2 sm:mb-0">
                        <Image
                            src="https://res.cloudinary.com/dzyeanw6v/image/upload/v1729671940/tayduong-logo.jpg"
                            alt="Tay Duong Pharma Logo"
                            width={40}
                            height={40}
                            className="mr-2 sm:mr-3"
                        />
                        <Link href="/">
                            <span className="text-xl font-semibold  hover:underline">
                                {/* Tay Duong Pharma */}
                                {t("Company")}
                            </span>
                        </Link>
                    </div>
                    <nav className="w-full sm:w-auto">
                        <ul className="flex flex-wrap justify-center sm:space-x-6">
                            {["Home", "Products", "About", "Contact"].map(
                                (item) => (
                                    <li
                                        key={item}
                                        className="mx-2 sm:mx-0 my-1 sm:my-0 "
                                    >
                                        <Link
                                            href={`/${item.toLowerCase()}`}
                                            className="text-base sm:text-lg hover:text-primary hover:underline transition-all duration-200"
                                        >
                                            {/* {item} */}
                                            {t(item)}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="border-b border-gray-200" />
        </header>
    );
}
