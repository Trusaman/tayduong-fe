import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook } from "lucide-react";
import { Product } from "@/api/types";

export const dynamic = "force-dynamic";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="max-w-7xl mx-auto p-6 sm:p-8">
            <div className="bg-white rounded-3xl shadow-strong overflow-hidden border border-gray-100">
                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Enhanced Product Image Section */}
                    <div className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 p-8 lg:p-12 flex items-center justify-center">
                        <div className="relative">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={400}
                                height={400}
                                className="w-full h-auto rounded-2xl shadow-medium transform hover:scale-105 transition-smooth"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 rounded-full"></div>
                        </div>
                    </div>

                    {/* Enhanced Product Info Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                                Pharmaceutical Product
                            </span>
                            <h1 className="text-heading-xl text-gray-900 mb-3">
                                {product.name}
                            </h1>
                            <p className="text-body text-red-600 font-medium mb-6">
                                Hãng sản xuất: {product.brand}
                            </p>
                        </div>

                        <div className="mb-8">
                            <p className="text-body-lg text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-heading-sm text-gray-900 mb-4">
                                Liên hệ tư vấn
                            </h2>
                            <div className="flex items-center gap-3 mb-6">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <Facebook className="h-5 w-5" />
                                </Button>
                                <span className="text-body-sm text-gray-500">
                                    Theo dõi chúng tôi
                                </span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Button
                                variant="medical"
                                size="lg"
                                className="w-full justify-center"
                            >
                                📞 Gọi (+84) 0247.107.9966 để được tư vấn miễn
                                phí
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full justify-center"
                            >
                                📧 Gửi yêu cầu tư vấn
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Enhanced Tabs Section */}
            <div className="mt-12">
                <Tabs defaultValue="description" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-xl">
                        <TabsTrigger
                            value="description"
                            className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-soft transition-all"
                        >
                            📋 Thông tin chi tiết
                        </TabsTrigger>
                        <TabsTrigger
                            value="details"
                            className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-soft transition-all"
                        >
                            ⚙️ Thông số kỹ thuật
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="description" className="mt-6">
                        <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-heading-sm text-gray-900 mb-3">
                                        Công dụng
                                    </h3>
                                    <div className="bg-blue-50 rounded-xl p-4">
                                        <p className="text-body text-gray-700">
                                            {product.descriptionDetail}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-heading-sm text-gray-900 mb-3">
                                        Bảo quản
                                    </h3>
                                    <div className="bg-green-50 rounded-xl p-4">
                                        <p className="text-body text-gray-700">
                                            Nơi khô mát, tránh ánh sáng trực
                                            tiếp
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-heading-sm text-gray-900 mb-3">
                                        Hạn sử dụng
                                    </h3>
                                    <div className="bg-amber-50 rounded-xl p-4">
                                        <p className="text-body text-gray-700">
                                            3 năm kể từ ngày sản xuất
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                    <p className="text-body-sm text-red-700 italic">
                                        ⚠️ Đọc kỹ hướng dẫn sử dụng trước khi
                                        dùng
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="details" className="mt-6">
                        <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                            <h3 className="text-heading-sm text-gray-900 mb-6">
                                Thông số kỹ thuật
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-body text-gray-600">
                                        Hãng sản xuất:
                                    </span>
                                    <span className="text-body font-medium text-gray-900">
                                        {product.brand}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-body text-gray-600">
                                        Tiêu chuẩn:
                                    </span>
                                    <span className="text-body font-medium text-gray-900">
                                        TCCS
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-body text-gray-600">
                                        Xuất xứ:
                                    </span>
                                    <span className="text-body font-medium text-gray-900">
                                        Việt Nam
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-body text-gray-600">
                                        Chứng nhận chất lượng:
                                    </span>
                                    <span className="text-body font-medium text-gray-900">
                                        ISO 9001:2015
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-4">
                                    <span className="text-body text-gray-600">
                                        Bảo hành:
                                    </span>
                                    <span className="text-body font-medium text-gray-900">
                                        Theo quy định nhà sản xuất
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-100">
                                <h4 className="text-body font-semibold text-gray-900 mb-2">
                                    Sản xuất tại nhà máy của {product.brand}
                                </h4>
                                <p className="text-body-sm text-gray-600">
                                    Đảm bảo chất lượng theo tiêu chuẩn quốc tế
                                    với quy trình sản xuất hiện đại
                                </p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
