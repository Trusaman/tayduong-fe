"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Link } from "@/i18n/routing";
import { Product } from "@/api/products";
import { useTranslations } from "next-intl";

export default function ProductList({
    initialProducts,
}: {
    initialProducts: Product[];
}) {
    const t = useTranslations("ProductsPage");

    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const groupedProducts = initialProducts.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {} as Record<string, Product[]>);

    const categories = ["All Categories", ...Object.keys(groupedProducts)];

    const filteredProducts =
        selectedCategory === "All Categories"
            ? initialProducts
            : groupedProducts[selectedCategory] || [];

    return (
        <>
            <div className="mb-6 flex items-center">
                <span className="mr-2 text-gray-700 font-medium">
                    {t("FilterBy")}:
                </span>
                <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue>{selectedCategory}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                                {category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className="product-card bg-white hover:border hover:border-blue-800 shadow-lg rounded-lg overflow-hidden"
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
        </>
    );
}
