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
import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Link from "next/link";

export default function ResponsivePharmacyHome() {
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
    `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-[72px] sm:pt-[64px]">
                <section className="relative bg-cover bg-center min-h-[calc(100vh-72px)] sm:min-h-[calc(100vh-64px)] py-24 sm:py-32 px-4 sm:px-6 flex items-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://res.cloudinary.com/dzyeanw6v/image/upload/v1729658542/hsvcf23k7tcsipontgxt.webp')",
                            animation:
                                "zoomInBackground 25s ease-in-out infinite",
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
                </section>

                <section className="py-24 sm:py-32 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                                Global Healthcare Impact
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                As a leading pharmacy, we&apos;re committed to
                                improving global health outcomes. Our extensive
                                range of medications and health products
                                contributes significantly to treating various
                                conditions worldwide.
                            </p>
                            <p className="text-muted-foreground">
                                With a focus on accessibility and affordability,
                                we&apos;re making a tangible difference in
                                people&apos;s lives every day.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <div className="relative w-48 h-48 bg-primary rounded-full flex flex-col items-center justify-center text-primary-foreground">
                                <span className="text-4xl font-bold">$8</span>
                                <span className="text-xl font-semibold">
                                    BILLION
                                </span>
                                <span className="text-sm mt-1">
                                    Annual Impact
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-primary text-primary-foreground py-24 sm:py-32 px-4 sm:px-6">
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

                <section className="bg-muted py-24 sm:py-32 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                            Clinical Benefits of a Patient-Centered Approach
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Clock,
                                    title: "Real-time therapeutic decision making",
                                },
                                {
                                    icon: Pill,
                                    title: "Reduced drug resistance through appropriate prescribing",
                                },
                                {
                                    icon: Home,
                                    title: "Implementing local testing programme",
                                },
                                {
                                    icon: Beaker,
                                    title: "Compatible with existing pharmacy equipment",
                                },
                                {
                                    icon: PoundSterling,
                                    title: "Better resources utilisation",
                                },
                                {
                                    icon: UserPlus,
                                    title: "Improved patient care",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center"
                                >
                                    <item.icon className="w-12 h-12 mb-4 text-primary" />
                                    <h3 className="font-semibold">
                                        {item.title}
                                    </h3>
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
