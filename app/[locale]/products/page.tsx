import { Suspense } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductList from "./product-list";
import { getProducts } from "@/api/products";

export default async function ProductPage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-4">
                <section className="pb-12 pt-4 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2
                            className="text-3xl font-extrabold text-gray-900 mb-4"
                            style={{
                                fontFamily:
                                    "'__Roboto_90b533', '__Roboto_Fallback_90b533'",
                            }}
                        >
                            Our Products
                        </h2>
                        <Suspense fallback={<div>Loading...</div>}>
                            <ProductList initialProducts={products} />
                        </Suspense>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
