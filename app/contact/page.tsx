import Footer from "@/components/footer";
import Header from "@/components/header";
import HubSpotForm from "@/components/huspot-contact-form";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <h1>Contact us</h1>
            <div className="max-2xl:">
                <HubSpotForm />
            </div>
            <Footer />
        </div>
    );
}
