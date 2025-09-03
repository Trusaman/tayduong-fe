"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Award, Phone, Star, Quote } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function PartnerLogo({
    src,
    alt,
    boxSize = 112, // px
    imgSize = 96, // px
    fallbackIcon: FallbackIcon = Building2,
    className = "",
}: {
    src: string;
    alt: string;
    boxSize?: number;
    imgSize?: number;
    fallbackIcon?: React.ElementType;
    className?: string;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <div
            className={
                "relative mx-auto mb-4 bg-white rounded-full flex items-center justify-center overflow-hidden border border-gray-100 transition-transform duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-blue-100 " +
                className
            }
            style={{ width: boxSize, height: boxSize }}
        >
            {hasError ? (
                <div className="flex items-center justify-center w-full h-full text-blue-600/70">
                    <FallbackIcon className="w-10 h-10" aria-hidden />
                </div>
            ) : (
                <>
                    {isLoading && (
                        <Skeleton className="absolute inset-0 w-full h-full" />
                    )}
                    <Image
                        src={src}
                        alt={alt}
                        width={imgSize}
                        height={imgSize}
                        className="object-contain"
                        onLoad={() => setIsLoading(false)}
                        onError={() => {
                            setHasError(true);
                            setIsLoading(false);
                        }}
                    />
                </>
            )}
        </div>
    );
}

export default function CustomersPage() {
    const t = useTranslations("CustomersPage");
    const tCustomers = useTranslations("Customers");

    const hospitalPartners = [
        {
            key: "Bachmai",
            name: tCustomers("Bachmai"),

            type: "hospital",
            established: "1911",
            specialties: ["General Medicine", "Surgery", "Emergency Care"],
            partnership: "5+ years",
            imageUrl:
                "https://res.cloudinary.com/dzyeanw6v/image/upload/v1756867458/logo-BM_x8vyqf.png",
        },
        {
            key: "BV108",
            name: tCustomers("BV108"),

            type: "hospital",
            established: "1956",
            specialties: [
                "Military Medicine",
                "Trauma Care",
                "Specialized Surgery",
            ],
            partnership: "4+ years",
            imageUrl:
                "https://res.cloudinary.com/dzyeanw6v/image/upload/v1756867459/logo-108_mg26at.png",
        },
        {
            key: "DHY",
            name: tCustomers("DHY"),

            type: "hospital",
            established: "1902",
            specialties: ["Medical Education", "Research", "Clinical Care"],
            partnership: "3+ years",
            imageUrl:
                "https://res.cloudinary.com/dzyeanw6v/image/upload/v1756867459/logo-DHY_t5owoq.jpg",
        },
        {
            key: "PTW",
            name: tCustomers("PTW"),

            type: "hospital",
            established: "1963",
            specialties: [
                "Pulmonology",
                "Respiratory Care",
                "Tuberculosis Treatment",
            ],
            partnership: "6+ years",
            imageUrl:
                "https://res.cloudinary.com/dzyeanw6v/image/upload/v1756867459/logo-PhoiTW_pkj9ze.svg",
        },
        {
            key: "NTW",
            name: tCustomers("NTW"),

            type: "hospital",
            established: "1969",
            specialties: ["Pediatrics", "Child Surgery", "Neonatal Care"],
            partnership: "4+ years",
            imageUrl:
                "https://res.cloudinary.com/dzyeanw6v/image/upload/v1756867854/logo-NHITW_fozrnq.png",
        },
        {
            key: "TMHTW",
            name: tCustomers("TMHTW"),

            type: "hospital",
            established: "1967",
            specialties: [
                "ENT Surgery",
                "Hearing Disorders",
                "Facial Reconstruction",
            ],
            partnership: "3+ years",
            imageUrl:
                "https://res.cloudinary.com/dzyeanw6v/image/upload/v1756867459/logo-TMH_TW_aifv1u.png",
        },
    ];

    const pharmaceuticalPartners = [
        {
            key: "Longchau",
            name: tCustomers("Longchau"),

            type: "pharmaceutical",
            established: "2007",
            specialties: [
                "Retail Pharmacy",
                "Healthcare Products",
                "Digital Health",
            ],
            partnership: "2+ years",
            imageUrl:
                "https://res.cloudinary.com/dzyeanw6v/image/upload/v1756867458/logo-Longchau_woxkj9.webp",
        },
    ];

    const stats = [
        {
            icon: Building2,
            value: "100+",
            label: t("TrustedBy"),
            description: "healthcare institutions",
        },
        // {
        //     icon: Users,
        //     value: "1M+",
        //     label: t("PatientsServed"),
        //     description: "across Vietnam",
        // },
        {
            icon: Award,
            value: "500+",
            label: t("ProductsSupplied"),
            description: "medical products",
        },
    ];

    const benefits = [
        {
            icon: Award,
            title: t("QualityProducts"),
            description: t("QualityProductsDesc"),
        },
        {
            icon: Building2,
            title: t("ReliableSupply"),
            description: t("ReliableSupplyDesc"),
        },
        {
            icon: Users,
            title: t("TechnicalSupport"),
            description: t("TechnicalSupportDesc"),
        },
        {
            icon: Star,
            title: t("CompetitivePricing"),
            description: t("CompetitivePricingDesc"),
        },
    ];

    const testimonials = [
        {
            customer: "Bachmai",
            name: tCustomers("Bachmai"),
            content: t("TestimonialBachmai"),
            role: "Procurement Director",
        },
        {
            customer: "Longchau",
            name: tCustomers("Longchau"),
            content: t("TestimonialLongchau"),
            role: "Supply Chain Manager",
        },
        {
            customer: "BV108",
            name: tCustomers("BV108"),
            content: t("TestimonialBV108"),
            role: "Medical Director",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5"></div>
                    <div className="relative max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {t("Title")}
                        </h1>
                        <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                            {t("Subtitle")}
                        </p>
                        <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
                            {t("Description")}
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 ">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mb-4">
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-lg font-medium text-gray-700 mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Hospital Partners Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {t("HospitalPartners")}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Leading healthcare institutions that trust our
                                products and services
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {hospitalPartners.map((partner) => (
                                <Card
                                    key={partner.key}
                                    className="hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md"
                                >
                                    <CardHeader className="text-center pb-4">
                                        <div className="group">
                                            <PartnerLogo
                                                src={partner.imageUrl}
                                                alt={partner.name}
                                                boxSize={140}
                                                imgSize={120}
                                            />
                                        </div>
                                        <CardTitle className="text-lg font-semibold text-gray-900">
                                            {partner.name}
                                        </CardTitle>
                                        <CardDescription className="text-sm text-gray-500">
                                            Established {partner.established} •{" "}
                                            {partner.partnership}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="space-y-3">
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-700 mb-2">
                                                    Specialties:
                                                </h4>
                                                <div className="flex flex-wrap gap-1">
                                                    {partner.specialties.map(
                                                        (specialty, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                                                            >
                                                                {specialty}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pharmaceutical Partners Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {t("PharmaceuticalPartners")}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Pharmaceutical companies and retail chains we
                                proudly serve
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            {pharmaceuticalPartners.map((partner) => (
                                <Card
                                    key={partner.key}
                                    className="hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-md"
                                >
                                    <CardHeader className="text-center pb-4">
                                        <div className="group">
                                            <PartnerLogo
                                                src={partner.imageUrl}
                                                alt={partner.name}
                                                boxSize={140}
                                                imgSize={120}
                                                fallbackIcon={Award}
                                                className="bg-[#266cdf]"
                                            />
                                        </div>
                                        <CardTitle className="text-lg font-semibold text-gray-900">
                                            {partner.name}
                                        </CardTitle>
                                        <CardDescription className="text-sm text-gray-500">
                                            Established {partner.established} •{" "}
                                            {partner.partnership}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="space-y-3">
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-700 mb-2">
                                                    Specialties:
                                                </h4>
                                                <div className="flex flex-wrap gap-1">
                                                    {partner.specialties.map(
                                                        (specialty, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full"
                                                            >
                                                                {specialty}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partnership Benefits Section */}
                <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {t("PartnershipBenefits")}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Why leading healthcare institutions choose us as
                                their trusted partner
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-4">
                                        <benefit.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customer Testimonials Section */}
                {/* <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {t("CustomerTestimonials")}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Hear from our valued partners about their
                                experience working with us
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-50 border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            <Quote className="w-8 h-8 text-blue-600 mr-3" />
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-4 h-4 text-yellow-400 fill-current"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 mb-4 italic leading-relaxed">
                                            &ldquo;{testimonial.content}&rdquo;
                                        </p>
                                        <div className="border-t pt-4">
                                            <p className="font-semibold text-gray-900">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* Call to Action Section */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            {t("BecomePartner")}
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join our network of trusted healthcare partners and
                            experience the difference of working with a reliable
                            pharmaceutical distributor.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-blue-600 hover:bg-gray-100"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    {t("ContactForPartnership")}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
