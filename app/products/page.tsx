import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./products.css";
import Link from "next/link";
import { getProducts } from "@/api/products";

export default async function ProductPage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-4">
                <section className="pb-12 pt-4  px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                            Our Products
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className="product-card bg-white shadow-lg rounded-lg overflow-hidden"
                                    style={{
                                        animation: `fadeIn 0.5s ease-out ${
                                            index * 0.1
                                        }s both`,
                                    }}
                                >
                                    <div className="relative overflow-hidden">
                                        <Link href={`/products/${product.id}`}>
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={300}
                                                height={300}
                                                className="w-full h-48 object-cover product-image"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                                <Button
                                                    variant="secondary"
                                                    className="text-white bg-transparent border border-white hover:bg-white hover:text-black transition-colors duration-300"
                                                >
                                                    View Details
                                                </Button>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {product.brand}
                                        </p>
                                        <p className="text-sm text-gray-700 product-description">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
