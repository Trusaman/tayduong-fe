import { Suspense } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductList from "./product-list";
import { getProducts } from "@/api/products";
import { useTranslations } from "next-intl";
import { Product } from "@/api/types";

export default async function ProductPage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-4">
                <section className="pb-12 pt-4 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <ProductPageContent products={products} />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function ProductPageContent({ products }: { products: Product[] }) {
    const t = useTranslations("ProductsPage");

    return (
        <>
            <h2 className="text-heading-lg text-gray-900 mb-4 font-roboto">
                {t("Title")}
            </h2>
            <Suspense fallback={<div>{t("LoadingProducts")}</div>}>
                <ProductList initialProducts={products} />
            </Suspense>
        </>
    );
}
