"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
          @keyframes zoomInBackground {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
    
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
    
          .product-card {
            transition: all 0.3s ease;
          }
    
          .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
    
          .product-image {
            transition: transform 0.3s ease;
          }
    
          .product-card:hover .product-image {
            transform: scale(1.1);
          }
    
          .product-description {
            transition: max-height 0.3s ease, opacity 0.3s ease;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
          }
    
          .product-card:hover .product-description {
            max-height: 200px;
            opacity: 1;
          }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const products = [
        {
            name: "Biological Safety Cabinet",
            brand: "Esco",
            image: "/placeholder.svg?height=300&width=300",
            description:
                "A Biological Safety Cabinet (BSC), also known as a Biosafety Cabinet is mainly used for handling pathogenic biological samples or for applications that require a sterile work environment.",
        },
        {
            name: "Culture Media for Microbiology",
            brand: "Merck Millipore",
            image: "/placeholder.svg?height=300&width=300",
            description:
                "Granular media - GranuCult®, and powdered media - NutriSelect® with multiple quality control levels that comply with various standards such as EP, USP, JP, ISO, or FDA.",
        },
        {
            name: "EZ-Fit™ Filtration Unit",
            brand: "Merck Millipore",
            image: "/placeholder.svg?height=300&width=300",
            description:
                "The EZ-Fit™ Filtration Unit is a disposable filtration device for bioburden testing of liquid samples including water, in-process samples, and final product.",
        },
        {
            name: "EZ-Fit™ Manifold",
            brand: "Merck Millipore",
            image: "/placeholder.svg?height=300&width=300",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-[72px] sm:pt-[64px]">
                <section className="py-12 px-4 sm:px-6 lg:px-8">
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
