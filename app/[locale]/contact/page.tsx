import Footer from "@/components/footer";
import Header from "@/components/header";
import HubSpotForm from "@/components/huspot-contact-form";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <HubSpotForm />
            <Footer />
        </div>
    );
}
