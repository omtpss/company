import AboutSection from "../component/AboutSection";
import Banner from "../component/Banner";
import ChooseSection from "../component/ChooseSection";
import ContactSection from "../component/ContactSection";
import PorjectSection from "../component/PorjectSection";
import ServiceSection from "../component/ServiceSection";
import TestimonialSection from "../component/TestimonialSection";
import FooterSection from "../layout/FooterSection";

function Home () {
    return (
        <>
            <Banner/>
            <AboutSection/>
            <ServiceSection/>
            <ChooseSection/>
            <PorjectSection/>
            <TestimonialSection/>
            <ContactSection/>
            <FooterSection/>
        </>
    )
}

export default Home;