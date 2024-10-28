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
                                src="/van-phong-1.jpg"
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
                                TAY DUONG PHARMA JSC
                            </h2>
                            <p className="mb-4">
                                TAY DUONG PHARMA Joint Stock Company was
                                established in 2018. We specialize in providing
                                solutions for clinical diagnosis, biological
                                research and pharmaceutical industry.
                            </p>
                            <p className="mb-6">
                                To accomplish the above goals, we choose to
                                become a distributor of reputable manufacturers
                                in the world for quality products with
                                continuous innovation. Direct support from the
                                manufacturer combined with the company&apos;s
                                professional staff brings customers
                                technological solutions that meet their needs,
                                thereby contributing to the development of
                                science, technology, and the economy of the
                                country.
                            </p>
                            <Link href="/products">
                                <Button
                                    variant="outline"
                                    className="hover:bg-slate-600 hover:text-white border-slate-600 pt-2"
                                >
                                    OUR PRODUCTS
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    Mission
                                </h3>
                                <p className="text-gray-600">
                                    Providing advanced scientific and
                                    technological solutions applied in clinical
                                    diagnosis and biotechnology, thereby making
                                    practical contributions to a better life.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    Vision
                                </h3>
                                <p className="text-gray-600">
                                    Become a leading enterprise in the field of
                                    clinical testing, biotechnology applications
                                    and pharmacy.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[300px] md:h-[400px]">
                            <Image
                                // src="https://res.cloudinary.com/dzyeanw6v/image/upload/v1729763808/about-us-2.jpg"
                                src="/van-phong-4.jpg"
                                alt="Handshake with World Map"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    Core values
                                </h3>
                                <p className="text-gray-600">
                                    Speed - Trust - Cooperation
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    Business philosophy
                                </h3>
                                <p className="text-gray-600">
                                    Dedicated to customers - Responsible to
                                    society
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
