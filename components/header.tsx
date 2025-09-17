"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LocaleSwitcher from "./locale-switcher";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Component() {
    const t = useTranslations("Header");
    const [open, setOpen] = useState(false);

    const navItems = [
        "Home",
        "Products",
        "Customers",
        "About",
        "News",
        "Contact",
    ];

    return (
        <header className="bg-white sticky top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-4">
                <div className="flex items-center justify-between text-cyan-900">
                    {/* Brand */}
                    <div className="flex items-center">
                        <Image
                            src="https://res.cloudinary.com/dzyeanw6v/image/upload/v1729671940/tayduong-logo.jpg"
                            alt="Tay Duong Pharma Logo"
                            width={40}
                            height={40}
                            className="mr-2 sm:mr-3"
                        />
                        <Link href="/">
                            <span className="text-xl font-semibold hover:underline">
                                {t("Company")}
                            </span>
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden sm:flex items-center gap-4">
                        <ul className="flex items-center space-x-2 lg:space-x-6">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="px-3 py-2 rounded-md text-base hover:text-primary hover:underline transition-all duration-200"
                                    >
                                        {t(item)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <LocaleSwitcher />
                    </nav>

                    {/* Mobile menu button */}
                    <div className="sm:hidden">
                        <Button
                            variant="outline"
                            size="icon"
                            aria-label={open ? t("CloseMenu") : t("OpenMenu")}
                            aria-controls="mobile-menu"
                            aria-expanded={open}
                            onClick={() => setOpen((v) => !v)}
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-200" />

            {/* Mobile menu panel */}
            {open && (
                <div
                    id="mobile-menu"
                    className="sm:hidden bg-white border-b border-gray-200"
                >
                    <div className="max-w-7xl mx-auto px-4 py-2 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="block px-3 py-3 rounded-lg text-base hover:bg-gray-50"
                                onClick={() => setOpen(false)}
                            >
                                {t(item)}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <LocaleSwitcher />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
