import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getProducts } from "@/api/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const site = (
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ).replace(/\/$/, "");
    const locales = Array.from(routing.locales);

    const staticPaths = [
        "",
        "/about",
        "/products",
        "/customers",
        "/news",
        "/contact",
    ];
    const urls: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        for (const p of staticPaths) {
            urls.push({
                url: `${site}/${locale}${p}`,
                changeFrequency: p === "" ? "weekly" : "monthly",
                priority: p === "" ? 1 : 0.7,
                lastModified: new Date(),
            });
        }
    }

    const products = await getProducts();
    for (const locale of locales) {
        for (const prod of products) {
            urls.push({
                url: `${site}/${locale}/products/${prod.id}`,
                changeFrequency: "weekly",
                priority: 0.6,
                lastModified: new Date(),
            });
        }
    }

    return urls;
}
