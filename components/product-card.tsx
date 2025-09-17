import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook } from "lucide-react";
import { Product } from "@/api/types";
import { useTranslations } from "next-intl";

export const dynamic = "force-dynamic";

export default function ProductCard({ product }: { product: Product }) {
    const t = useTranslations("ProductCard");

    return (
        <div className="max-w-7xl mx-auto p-6 sm:p-8">
            <div className="bg-white rounded-3xl shadow-strong overflow-hidden border border-gray-100">
                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Enhanced Product Image Section */}
                    <div className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 p-6 sm:p-8 lg:p-12 flex items-center justify-center">
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
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-2">
                                Pharmaceutical Product
                            </span>
                            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-4 ml-2">
                                {product.category}
                            </span>
                            <h1 className="text-heading-lg md:text-heading-xl text-gray-900 mb-3">
                                {product.name}
                            </h1>
                            <p className="text-body text-red-600 font-medium mb-6">
                                {t("Manufacturer")}: {product.brand}
                            </p>
                        </div>

                        <div className="mb-8">
                            <p className="text-body-lg text-gray-600 leading-relaxed whitespace-pre-line">
                                {product.description}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-heading-sm text-gray-900 mb-4">
                                {t("ContactConsultation")}
                            </h2>
                            <div className="flex items-center gap-3 mb-6">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full h-11 w-11"
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
                                {t("CallForConsultation")}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full justify-center"
                            >
                                {t("SendConsultationRequest")}
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
                            className="rounded-lg py-3 min-h-[44px] data-[state=active]:bg-white data-[state=active]:shadow-soft transition-all"
                        >
                            {t("ProductInfo")}
                        </TabsTrigger>
                        <TabsTrigger
                            value="details"
                            className="rounded-lg py-3 min-h-[44px] data-[state=active]:bg-white data-[state=active]:shadow-soft transition-all"
                        >
                            {t("TechnicalSpecs")}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="description" className="mt-6">
                        <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-heading-sm text-gray-900 mb-3">
                                        {t("Usage")}
                                    </h3>
                                    <div className="bg-blue-50 rounded-xl p-4">
                                        <p className="text-body text-gray-700 whitespace-pre-line">
                                            {product.descriptionDetail}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-heading-sm text-gray-900 mb-3">
                                        {t("Storage")}
                                    </h3>
                                    <div className="bg-green-50 rounded-xl p-4">
                                        <p className="text-body text-gray-700">
                                            {t("StorageInstructions")}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-heading-sm text-gray-900 mb-3">
                                        {t("ExpiryDate")}
                                    </h3>
                                    <div className="bg-amber-50 rounded-xl p-4">
                                        <p className="text-body text-gray-700">
                                            {t("ExpiryInfo")}
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                    <p className="text-body-sm text-red-700 italic">
                                        {t("UsageWarning")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="details" className="mt-6">
                        <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
                            <h3 className="text-heading-sm text-gray-900 mb-6">
                                {t("TechnicalSpecs")}
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-body text-gray-600">
                                        {t("Manufacturer")}:
                                    </span>
                                    <span className="text-body font-medium text-gray-900">
                                        {product.brand}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-body text-gray-600">
                                        {t("Standard")}:
                                    </span>
                                    <span className="text-body font-medium text-gray-900">
                                        TCCS
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-body text-gray-600">
                                        {t("Origin")}:
                                    </span>
                                    <span className="text-body font-medium text-gray-900">
                                        {t("Vietnam")}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-body text-gray-600">
                                        {t("QualityCertification")}:
                                    </span>
                                    <span className="text-body font-medium text-gray-900">
                                        {t("ISOCertification")}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-4">
                                    <span className="text-body text-gray-600">
                                        {t("Warranty")}:
                                    </span>
                                    <span className="text-body font-medium text-gray-900">
                                        {t("WarrantyInfo")}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-100">
                                <h4 className="text-body font-semibold text-gray-900 mb-2">
                                    {t("ManufacturedAt")} {product.brand}
                                </h4>
                                <p className="text-body-sm text-gray-600">
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
