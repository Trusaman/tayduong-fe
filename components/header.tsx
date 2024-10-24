import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white fixed top-0 left-0 right-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <Image
                            src="https://res.cloudinary.com/dzyeanw6v/image/upload/v1729671940/tayduong-logo.jpg"
                            alt="Tay Duong Pharmacy Logo"
                            width={50}
                            height={50}
                            className="mr-3"
                        />
                        <Link href="/">
                            <span className="text-2xl font-bold text-primary">
                                Tay Duong Pharmacy
                            </span>
                        </Link>
                    </div>
                    <nav className="w-full sm:w-auto">
                        <ul className="flex flex-wrap justify-center sm:space-x-6">
                            {["Home", "Products", "About", "Contact"].map(
                                (item) => (
                                    <li
                                        key={item}
                                        className="mx-2 sm:mx-0 my-1 sm:my-0"
                                    >
                                        <Link
                                            href={`/${item.toLowerCase()}`}
                                            className="text-lg hover:text-primary hover:underline transition-all duration-200"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="border-b border-gray-200" />
        </header>
    );
}
