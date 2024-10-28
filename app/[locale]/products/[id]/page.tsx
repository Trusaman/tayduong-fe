import { getProductById } from "@/api/products";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductCard from "@/components/product-card";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params: { id },
}: {
    params: {
        id: string;
    };
}) {
    const product = await getProductById(+id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <ProductCard product={product} />
            <Footer />
        </div>
    );
}
