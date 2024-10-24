"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./products.css";

export default function ProductPage() {
    const products = [
        {
            name: "Akoxdo Plus",
            brand: "Akoxdo",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729740998/akoxdo-plus.png",
            description:
                "A Biological Safety Cabinet (BSC), also known as a Biosafety Cabinet is mainly used for handling pathogenic biological samples or for applications that require a sterile work environment.",
        },
        {
            name: "Ambroxol-H",
            brand: "Ambroxol-H",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752439/ambroxol-h.png",
            description:
                "Granular media - GranuCult®, and powdered media - NutriSelect® with multiple quality control levels that comply with various standards such as EP, USP, JP, ISO, or FDA.",
        },
        {
            name: "Antikans",
            brand: "Antikans",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752496/antikans.webp",
            description:
                "The EZ-Fit™ Filtration Unit is a disposable filtration device for bioburden testing of liquid samples including water, in-process samples, and final product.",
        },
        {
            name: "Basmetin",
            brand: "Basmetin",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752573/basmetin.webp",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Butagan",
            brand: "Butagan",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752606/butagan.webp",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Dopharalgic",
            brand: "Dopharalgic",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752642/dopharalgic.webp",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Aspergillus Fumigatus ELISA Kit",
            brand: "Bordier",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752677/elisa-igg-kit-test.jpg",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Fasthan 20",
            brand: "Fasthan",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752736/fasthan.webp",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Ganlotus",
            brand: "Ganlotus",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752748/ganlotus.webp",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Gintecin",
            brand: "Gintecin",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752757/gintecin.webp",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Hepadays",
            brand: "Hepadays",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752767/hepadays.jpg",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Kidvita 7.5",
            brand: "Kidvita 7.5",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752774/kidvita-7.5.webp",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Kidvita 15",
            brand: "Kidvita 15",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752782/kidvita-15.webp",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Nuroact",
            brand: "Namha Pharmaceuticals",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752790/nuroact.jpg",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Polcalmex",
            brand: "Polcalmex",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752798/polcalmex.webp",
            description:
                "EZ-Fit™ Manifold for universal laboratory filtration- Unique design for easy cleaning and decontamination- Different filtration heads for both reusable and disposable filtration units.",
        },
        {
            name: "Zasemer 2g",
            brand: "Amvipharm",
            image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729752807/zasemer.png",
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
