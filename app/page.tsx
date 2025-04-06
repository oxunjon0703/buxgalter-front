import HeroSection from "@/components/layout/hero-section";
import ContactUs from "@/components/layout/contact-us";
import Subscribe from "@/components/layout/subscribe";
import AboutUs from "@/components/layout/about-us";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <AboutUs />
            <Subscribe />
            <ContactUs />
        </>
    );
}