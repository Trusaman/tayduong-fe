import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AboutUs() {
    const t = useTranslations("AboutPage");

    return (
        <div>
            <Header />
            <div className="min-h-screen bg-white">
                <div className="container mx-auto px-4 py-4 sm:py-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-8 sm:mb-16">
                        <div className="relative h-[300px] md:h-[400px]">
                            <Image
                                // src="https://res.cloudinary.com/dzyeanw6v/image/upload/v1729763801/about-us-1.jpg"
                                src="/van-phong-5.png"
                                alt="DNA Strand"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl text-gray-600 mb-2">
                                {/* About us */}
                                {t("Title")}
                            </h3>
                            <h2 className="text-3xl font-bold mb-4">
                                {t("CompanyName")}
                            </h2>
                            <p className="mb-4">{t("TitleMain")}</p>
                            <p className="mb-6">{t("TitleSub")}</p>
                            <Link href="/products">
                                <Button
                                    variant="outline"
                                    className="hover:bg-slate-600 hover:text-white border-slate-600 pt-2"
                                >
                                    {t("OurProducts")}
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    {t("Mission")}
                                </h3>
                                <p className="text-gray-600">
                                    {t("MissionDescription")}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    {t("Vision")}
                                </h3>
                                <p className="text-gray-600">
                                    {t("VisionDescription")}
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[300px] md:h-[400px]">
                            <Image
                                // src="https://res.cloudinary.com/dzyeanw6v/image/upload/v1729763808/about-us-2.jpg"
                                src="/giao-hang-3.png"
                                alt="Handshake with World Map"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    {t("CoreValues")}
                                </h3>
                                <p className="text-gray-600">
                                    {t("CoreValuesDescription")}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    {t("BusinessPhilosophy")}
                                </h3>
                                <p className="text-gray-600">
                                    {t("BusinessPhilosophyDescription")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
