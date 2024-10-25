import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook } from "lucide-react";
import { Product } from "@/api/types";

export const dynamic = "force-dynamic";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="max-w-6xl mx-auto p-4 sm:mt-4">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-teal-500 p-4 rounded-lg">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <p className="text-red-500 mb-4">
                        Hãng sản xuất: {product.brand}
                    </p>
                    <p className="mb-4">{product.description}</p>
                    <h2 className="text-xl font-bold text-blue-600 mb-2">
                        Liên hệ
                    </h2>
                    <div className="flex space-x-2 mb-4">
                        <Button variant="outline" size="icon">
                            <Facebook className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button className="bg-blue-500 text-white">
                        Gọi (+84) 0247.107.9966 để được tư vấn miễn phí
                    </Button>
                </div>
            </div>
            <Tabs defaultValue="description" className="mt-8">
                <TabsList>
                    <TabsTrigger value="description">Mô tả</TabsTrigger>
                    <TabsTrigger value="details">Tab tùy chỉnh</TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                    <h3 className="font-bold mb-2">Công dụng:</h3>
                    <ul className="list-disc pl-5 mb-4">
                        <li>{product.descriptionDetail}</li>
                    </ul>
                    {/* <h3 className="font-bold mb-2">Thành phần:</h3>
                    <p className="mb-4">
                        Chlorhexidine gluconate, carbomer, ethanol, isopropyl
                        alcohol, perfume và vitamin E giúp sát khuẩn nhanh với
                        phổ rộng, nhanh chóng tiêu diệt vi khuẩn gây bệnh trên
                        da, các chủng nấm bệnh, trực khuẩn, virus, thích hợp
                        dùng nhiều lần trong ngày mà không gây hại cho da, lưu
                        hương thơm dễ chịu.
                    </p> */}
                    <p className="italic mb-4">
                        (Đọc kỹ hướng dẫn sử dụng trước khi dùng)
                    </p>
                    <h3 className="font-bold mb-2">Bảo quản:</h3>
                    <p className="mb-4">Nơi khô mát, tránh ánh sáng</p>
                    <h3 className="font-bold mb-2">Tiêu chuẩn:</h3>
                    <p className="mb-4">TCCS</p>
                    <h3 className="font-bold mb-2">
                        Sản xuất tại nhà máy của {product.brand}
                    </h3>
                    {/* <p className="mb-4">
                        Lô II-8.3 Khu Công nghiệp Quế Võ 2, Xã Ngọc Xá, H. Quế
                        Võ, tỉnh Bắc Ninh
                    </p> */}
                    <h3 className="font-bold mb-2">Hạn sử dụng:</h3>
                    <p>3 năm kể từ ngày sản xuất.</p>
                </TabsContent>
                <TabsContent value="details">
                    <p>Custom tab content goes here.</p>
                </TabsContent>
                <TabsContent value="reviews">
                    <p>Product reviews would be displayed here.</p>
                </TabsContent>
            </Tabs>
        </div>
    );
}
