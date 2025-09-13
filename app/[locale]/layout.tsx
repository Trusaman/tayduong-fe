import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Roboto } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import "../globals.css";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin", "vietnamese"],
    display: "swap",
    variable: "--font-roboto",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
    title: "CTCP Y dược Tây Dương - Tay Duong Pharma JSC",
    description:
        "Đối tác tin cậy trong lĩnh vực y tế và dược phẩm - Your trusted partner in healthcare and pharmaceuticals",
    keywords:
        "y dược, dược phẩm, thiết bị y tế, chẩn đoán, pharmaceutical, medical devices, healthcare, Vietnam",
    icons: {
        icon: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729671940/tayduong-logo.jpg",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        title: "CTCP Y dược Tây Dương",
        description: "Đối tác tin cậy trong lĩnh vực y tế và dược phẩm",
        type: "website",
        locale: "vi_VN",
        alternateLocale: "en_US",
        siteName: "Tay Duong Pharma",
        images: [
            {
                url: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729671940/tayduong-logo.jpg",
                width: 1200,
                height: 630,
                alt: "Tay Duong Pharma",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
    },
    alternates: {
        languages: {
            en: "/en",
            vi: "/vi",
        },
    },
};

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Ensure that the incoming `locale` is valid
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html
            lang={locale}
            className={`${roboto.variable} ${roboto.className}`}
        >
            <body className="font-roboto">
                <Script
                    id="org-jsonld"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "CTCP Y dược Tây Dương",
                            url: siteUrl,
                            logo: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729671940/tayduong-logo.jpg",
                            sameAs: [
                                "https://www.facebook.com/people/TAY-DUONG-Pharma/100089650221576/",
                            ],
                            contactPoint: [
                                {
                                    "@type": "ContactPoint",
                                    contactType: "customer service",
                                    email: "tayduong.yduoc@gmail.com",
                                },
                            ],
                        }),
                    }}
                />
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
