import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function NewsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-10 sm:py-14 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <NewsPageContent />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function NewsPageContent() {
    const t = useTranslations("NewsPage");
    const tCommon = useTranslations("Common");

    const newsItems = [
        {
            id: "1",
            title: "Tưng Bừng Đón Mừng 80 Năm Quốc Khánh",
            date: "2025-08-30",
            image: "/su-kien-1.jpg",
            excerpt:
                "Hòa cùng không khí tưng bừng của cả nước kỷ niệm 80 năm Ngày Quốc khánh 2/9 (1945 - 2025), Công ty Cổ phần Y Dược Tây Dương trân trọng tổ chức chương trình Liên hoan Chào mừng 80 năm Quốc khánh. Đây là dịp để toàn thể cán bộ, nhân viên công ty cùng nhau ôn lại những trang sử hào hùng của dân tộc, đồng thời nhìn lại chặng đường phát triển đầy tự hào của Tây Dương.",
            category: "Company",
        },
        // {
        //     id: "2",
        //     title: "Corporate Social Responsibility Activities",
        //     date: "2024-08-20",
        //     image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1730085522/hfz4jjbcz7joh9rkpz0z.jpg",
        //     excerpt:
        //         "We organized community health programs and donated essential medical supplies to local clinics.",
        //     category: "CSR",
        // },
        // {
        //     id: "3",
        //     title: "ISO & GDP Compliance Strengthened",
        //     date: "2024-07-05",
        //     image: "https://res.cloudinary.com/dzyeanw6v/image/upload/v1729671940/tayduong-logo.jpg",
        //     excerpt:
        //         "Our quality management systems have been enhanced to meet international standards across operations.",
        //     category: "Quality",
        // },
    ];

    return (
        <div>
            <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 bg-gradient-medical text-white text-sm sm:text-base font-semibold rounded-full shadow-soft mb-4">
                    📰 {t("Subtitle")}
                </span>
                <h1 className="text-heading-xl sm:text-display-lg text-gray-900 mb-3">
                    <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-700 bg-clip-text text-transparent">
                        {t("Title")}
                    </span>
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((item) => (
                    <Card
                        key={item.id}
                        className="overflow-hidden hover:shadow-medium transition-smooth hover:-translate-y-1"
                    >
                        <div className="relative w-full h-48">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <CardHeader>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide">
                                {item.category}
                            </div>
                            <CardTitle className="text-lg sm:text-xl">
                                {item.title}
                            </CardTitle>
                            <CardDescription>
                                {new Date(item.date).toLocaleDateString()}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-700 mb-4 line-clamp-3 text-justify">
                                {item.excerpt}
                            </p>
                            <div className="flex justify-between items-center">
                                <Link href="/news">
                                    <Button variant="outline" size="sm">
                                        {tCommon("ReadMore")}
                                    </Button>
                                </Link>
                                <span className="text-xs text-muted-foreground">
                                    {new Date(item.date).toLocaleDateString()}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
