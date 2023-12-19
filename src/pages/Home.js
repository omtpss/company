import AboutSection from "../component/AboutSection";
import Banner from "../component/Banner";
import ChooseSection from "../component/ChooseSection";
import PorjectSection from "../component/PorjectSection";
import ServiceSection from "../component/ServiceSection";
import TestimonialSection from "../component/TestimonialSection";

function Home () {
    return (
        <>
            <Banner/>
            <AboutSection/>
            <ServiceSection/>
            <ChooseSection/>
            <PorjectSection/>
            <TestimonialSection/>
        </>
    )
}

export default Home;