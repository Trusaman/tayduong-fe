import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle } from "lucide-react";
import { Product } from "@/api/types";
import { useTranslations } from "next-intl";

export const dynamic = "force-dynamic";

export default function ProductCard({ product }: { product: Product }) {
    const t = useTranslations("ProductCard");

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-strong overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Enhanced Product Image Section */}
                    <div className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 p-4 sm:p-6 lg:p-8 xl:p-12 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                        <div className="relative w-full max-w-sm">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={400}
                                height={400}
                                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-medium transform hover:scale-105 transition-smooth"
                            />
                            {/* Decorative elements - hidden on mobile for cleaner look */}
                            <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                            <div className="hidden sm:block absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 rounded-full"></div>
                        </div>
                    </div>

                    {/* Enhanced Product Info Section */}
                    <div className="p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                        <div className="mb-4 sm:mb-6">
                            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                                <span className="inline-block px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium rounded-full">
                                    Pharmaceutical Product
                                </span>
                                <span className="inline-block px-2 sm:px-3 py-1 bg-teal-100 text-teal-700 text-xs sm:text-sm font-medium rounded-full">
                                    {product.category}
                                </span>
                            </div>
                            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                                {product.name}
                            </h1>
                            <p className="text-sm sm:text-base text-red-600 font-medium mb-4 sm:mb-6">
                                {t("Manufacturer")}: {product.brand}
                            </p>
                        </div>

                        <div className="mb-6 sm:mb-8">
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                                {product.description}
                            </p>
                        </div>

                        <div className="mb-6 sm:mb-8">
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                {t("ContactConsultation")}
                            </h2>
                            <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full h-10 w-10 sm:h-11 sm:w-11"
                                >
                                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                                </Button>
                                <span className="text-xs sm:text-sm text-gray-500">
                                    Theo dõi chúng tôi
                                </span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Button
                                variant="medical"
                                size="lg"
                                className="w-full justify-center text-sm sm:text-base h-11 sm:h-12"
                            >
                                {t("CallForConsultation")}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full justify-center text-sm sm:text-base h-11 sm:h-12"
                            >
                                {t("SendConsultationRequest")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Enhanced Tabs Section */}
            <div className="mt-8 sm:mt-12">
                <Tabs defaultValue="description" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg sm:rounded-xl">
                        <TabsTrigger
                            value="description"
                            className="rounded-md sm:rounded-lg py-2 sm:py-3 min-h-[40px] sm:min-h-[44px] data-[state=active]:bg-white data-[state=active]:shadow-soft transition-all text-xs sm:text-sm"
                        >
                            {t("ProductInfo")}
                        </TabsTrigger>
                        <TabsTrigger
                            value="details"
                            className="rounded-md sm:rounded-lg py-2 sm:py-3 min-h-[40px] sm:min-h-[44px] data-[state=active]:bg-white data-[state=active]:shadow-soft transition-all text-xs sm:text-sm"
                        >
                            {t("TechnicalSpecs")}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="description" className="mt-4 sm:mt-6">
                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-soft border border-gray-100">
                            <div className="space-y-4 sm:space-y-6">
                                <div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                                        {t("Usage")}
                                    </h3>
                                    <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                                        <p className="text-sm sm:text-base text-gray-700 whitespace-pre-line leading-relaxed">
                                            {product.descriptionDetail}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                                        {t("Storage")}
                                    </h3>
                                    <div className="bg-green-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {t("StorageInstructions")}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                                        {t("ExpiryDate")}
                                    </h3>
                                    <div className="bg-amber-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {t("ExpiryInfo")}
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-red-50 border border-red-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                                    <p className="text-xs sm:text-sm text-red-700 italic leading-relaxed">
                                        {t("UsageWarning")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="details" className="mt-4 sm:mt-6">
                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-soft border border-gray-100">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                                {t("TechnicalSpecs")}
                            </h3>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 border-b border-gray-100 gap-1 sm:gap-0">
                                    <span className="text-sm sm:text-base text-gray-600">
                                        {t("Manufacturer")}:
                                    </span>
                                    <span className="text-sm sm:text-base font-medium text-gray-900 sm:text-right">
                                        {product.brand}
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 border-b border-gray-100 gap-1 sm:gap-0">
                                    <span className="text-sm sm:text-base text-gray-600">
                                        {t("Standard")}:
                                    </span>
                                    <span className="text-sm sm:text-base font-medium text-gray-900 sm:text-right">
                                        TCCS
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 border-b border-gray-100 gap-1 sm:gap-0">
                                    <span className="text-sm sm:text-base text-gray-600">
                                        {t("Origin")}:
                                    </span>
                                    <span className="text-sm sm:text-base font-medium text-gray-900 sm:text-right">
                                        {t("Vietnam")}
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 border-b border-gray-100 gap-1 sm:gap-0">
                                    <span className="text-sm sm:text-base text-gray-600">
                                        {t("QualityCertification")}:
                                    </span>
                                    <span className="text-sm sm:text-base font-medium text-gray-900 sm:text-right">
                                        {t("ISOCertification")}
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 gap-1 sm:gap-0">
                                    <span className="text-sm sm:text-base text-gray-600">
                                        {t("Warranty")}:
                                    </span>
                                    <span className="text-sm sm:text-base font-medium text-gray-900 sm:text-right">
                                        {t("WarrantyInfo")}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg sm:rounded-xl border border-blue-100">
                                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                                    {t("ManufacturedAt")} {product.brand}
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    {t("QualityAssurance")}
                                </p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
