"use client";

import { Button } from "@/components/ui/button";
import {
    Clock,
    Pill,
    Home,
    Beaker,
    PoundSterling,
    UserPlus,
} from "lucide-react";
import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "@/i18n/routing";

const backgroundImages = [
    "https://res.cloudinary.com/dzyeanw6v/image/upload/v1730085522/hfz4jjbcz7joh9rkpz0z.jpg",
    "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729658542/hsvcf23k7tcsipontgxt.webp",
];

export default function ResponsivePharmacyHome() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            }
            to {
              opacity: 1;
            }
          }
        `;
        document.head.appendChild(style);

        const intervalId = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % backgroundImages.length
            );
        }, 5000); // Change image every 5 seconds

        return () => {
            document.head.removeChild(style);
            clearInterval(intervalId);
        };
    }, []);
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
                    {/* Enhanced background with modern overlay */}
                    {backgroundImages.map((image, index) => (
                        <div
                            key={index}
                            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                            style={{
                                backgroundImage: `url('${image}')`,
                                opacity: index === currentImageIndex ? 0.15 : 0,
                                animation:
                                    index === currentImageIndex
                                        ? "zoomInBackground 40s ease-in-out infinite, fadeIn 1s ease-in-out"
                                        : "none",
                                filter: "brightness(1.2) contrast(1.1)",
                            }}
                        ></div>
                    ))}

                    {/* Modern gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-teal-900/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20"></div>

                    {/* Enhanced content with better typography */}
                    <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-8 py-24 sm:py-32">
                        <div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 bg-gradient-medical text-white text-sm font-semibold rounded-full shadow-soft mb-4">
                                    🏥 Trusted Healthcare Partner
                                </span>
                            </div>

                            <h1 className="text-display-xl sm:text-display-lg md:text-display-xl text-gray-900 mb-6 max-w-4xl">
                                Your Health, Our{" "}
                                <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-700 bg-clip-text text-transparent">
                                    Priority
                                </span>
                            </h1>

                            <p className="text-body-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                                Providing quality healthcare solutions with
                                cutting-edge pharmaceutical innovations,
                                ensuring your well-being is at the forefront of
                                our mission.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                                <Link href="/contact">
                                    <Button
                                        variant="medical"
                                        size="xl"
                                        className="min-w-[200px]"
                                    >
                                        Explore Our Services
                                    </Button>
                                </Link>
                                <Link href="/products">
                                    <Button
                                        variant="outline"
                                        size="xl"
                                        className="min-w-[200px]"
                                    >
                                        View Products
                                    </Button>
                                </Link>
                            </div>

                            {/* Trust indicators */}
                            <div className="mt-12 flex flex-wrap items-center justify-center sm:justify-start gap-8 opacity-70">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    ISO Certified
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    GDP Compliant
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    CE Marked
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="relative bg-cover bg-center min-h-[calc(100vh-72px)] sm:min-h-[calc(100vh-64px)] py-24 sm:py-32 px-4 sm:px-6 flex items-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                // "url('https://res.cloudinary.com/dzyeanw6v/image/upload/v1729658542/hsvcf23k7tcsipontgxt.webp')",
                                "url('https://res.cloudinary.com/dzyeanw6v/image/upload/v1730085522/hfz4jjbcz7joh9rkpz0z.jpg')",
                            animation:
                                "zoomInBackground 40s ease-in-out infinite",
                            filter: "brightness(1.4)",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center sm:items-start justify-center h-full text-gray-800">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center sm:text-left text-white leading-tight">
                            Your Health, Our Priority
                        </h1>
                        <p className="text-xl sm:text-2xl mb-10 text-center sm:text-left text-white max-w-3xl">
                            Providing quality healthcare solutions for a better
                            tomorrow, ensuring your well-being is at the
                            forefront of our mission.
                        </p>
                        <div className="flex justify-center sm:justify-start">
                            <Link href={"/contact"}>
                                <Button
                                    size="lg"
                                    className="text-xl px-10 py-6 bg-white text-[#008080] hover:bg-gray-100 rounded-full transition-all duration-300 transform hover:scale-105"
                                >
                                    Explore Our Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section> */}

                <section className="py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="lg:w-2/3">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                                        Global Impact
                                    </span>
                                </div>
                                <h2 className="text-heading-xl text-gray-900 mb-6">
                                    Transforming Healthcare Worldwide
                                </h2>
                                <p className="text-body-lg text-gray-600 mb-6 leading-relaxed">
                                    As a leading pharmaceutical company,
                                    we&apos;re committed to improving global
                                    health outcomes. Our extensive range of
                                    medications and health products contributes
                                    significantly to treating various conditions
                                    worldwide.
                                </p>
                                <p className="text-body text-gray-600 leading-relaxed">
                                    With a focus on accessibility and
                                    affordability, we&apos;re making a tangible
                                    difference in people&apos;s lives every day
                                    through innovative solutions.
                                </p>
                            </div>
                            <div className="lg:w-1/3 flex justify-center">
                                <div className="relative">
                                    <div className="w-56 h-56 bg-gradient-medical rounded-full flex flex-col items-center justify-center text-white shadow-strong transform hover:scale-105 transition-smooth">
                                        <span className="text-5xl font-bold mb-2">
                                            $8
                                        </span>
                                        <span className="text-xl font-semibold mb-1">
                                            BILLION
                                        </span>
                                        <span className="text-sm opacity-90">
                                            Annual Impact
                                        </span>
                                    </div>
                                    {/* Decorative elements */}
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
                                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-teal-200 rounded-full opacity-40"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-cyan-700 text-primary-foreground py-24 sm:py-32 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Pharmaceutical Challenges
                        </h2>
                        <p className="mb-4">
                            Effective medication management is challenging,
                            partly because patient symptoms can be nonspecific
                            or often overlap between different conditions.
                            Traditional approaches to medication dispensing are
                            characterized by long wait times and potential for
                            errors. This means patients are often treated with a
                            one-size-fits-all approach, leading to suboptimal
                            outcomes and increasing harmful resistance to
                            certain drugs.
                        </p>
                    </div>
                </section>

                <section className="bg-background py-24 sm:py-32 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Pharmaceutical Advances
                        </h2>
                        <p className="text-muted-foreground">
                            The development of advanced pharmacy management
                            systems and point-of-care services can revolutionize
                            the medication dispensing workflow. The rapid and
                            accurate identification of patient needs in a
                            streamlined process allows for the initiation of
                            personalized therapy as soon as possible and the
                            creation of tailored medication regimens suitable
                            for different settings and individual patient needs.
                        </p>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24 sm:py-32 px-6 sm:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4">
                                Clinical Excellence
                            </span>
                            <h2 className="text-heading-xl text-gray-900 mb-6">
                                Patient-Centered Healthcare Benefits
                            </h2>
                            <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
                                Our comprehensive approach to pharmaceutical
                                care delivers measurable improvements in patient
                                outcomes and healthcare efficiency.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Clock,
                                    title: "Real-time Therapeutic Decisions",
                                    description:
                                        "Instant access to patient data enables immediate, informed treatment decisions.",
                                },
                                {
                                    icon: Pill,
                                    title: "Reduced Drug Resistance",
                                    description:
                                        "Appropriate prescribing protocols minimize resistance development.",
                                },
                                {
                                    icon: Home,
                                    title: "Local Testing Programs",
                                    description:
                                        "Community-based testing initiatives improve accessibility and outcomes.",
                                },
                                {
                                    icon: Beaker,
                                    title: "Equipment Compatibility",
                                    description:
                                        "Seamless integration with existing pharmacy infrastructure.",
                                },
                                {
                                    icon: PoundSterling,
                                    title: "Resource Optimization",
                                    description:
                                        "Efficient allocation of healthcare resources for maximum impact.",
                                },
                                {
                                    icon: UserPlus,
                                    title: "Enhanced Patient Care",
                                    description:
                                        "Personalized treatment plans improve patient satisfaction and outcomes.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth transform hover:-translate-y-2 border border-gray-100"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-gradient-medical rounded-2xl flex items-center justify-center mb-6 shadow-soft">
                                            <item.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-heading-sm text-gray-900 mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-body-sm text-gray-600 leading-relaxed">
                                            {item.description}
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
