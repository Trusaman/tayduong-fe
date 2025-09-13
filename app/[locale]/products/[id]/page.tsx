import { getProductById } from "@/api/products";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductCard from "@/components/product-card";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
    params: { id, locale },
}: {
    params: { id: string; locale: string };
}): Promise<Metadata> {
    const product = await getProductById(+id);
    if (!product) return {};
    const site = (
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ).replace(/\/$/, "");
    const url = `${site}/${locale}/products/${id}`;
    const title = `${product.name} | Tay Duong Pharma`;

    const rawDesc = product.description || "";
    const description =
        rawDesc.length > 155 ? `${rawDesc.slice(0, 152)}...` : rawDesc;
    return {
        title,
        description,
        keywords: `${product.name}, ${product.category}, ${product.brand}, pharmaceutical, medical`,
        robots: { index: true, follow: true },
        alternates: {
            canonical: url,
            languages: { en: `/en/products/${id}`, vi: `/vi/products/${id}` },
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "Tay Duong Pharma",
            images: [
                {
                    url: product.image,
                    width: 1200,
                    height: 630,
                    alt: product.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [product.image],
        },
    };
}

export default async function ProductPage({
    params: { id, locale },
}: {
    params: { id: string; locale: string };
}) {
    const product = await getProductById(+id);

    if (!product) {
        notFound();
    }

    const site = (
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ).replace(/\/$/, "");
    const canonical = `${site}/${locale}/products/${id}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: [product.image],
        category: product.category,
        brand: { "@type": "Brand", name: product.brand },
        sku: String(product.id),
        url: canonical,
    };

    return (
        <div className="min-h-screen flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <ProductCard product={product} />
            <Footer />
        </div>
    );
}
