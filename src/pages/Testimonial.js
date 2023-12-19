import TestimonialSection from '../component/TestimonialSection';
import Breadcrumbs from '../layout/Breadcrumbs';


function Testimonial() {


    return (
        <>
            <div className="banner innerBanner">
                <div className="container">
                    <Breadcrumbs />
                </div>
            </div>
            <TestimonialSection />
        </>
    )
}

export default Testimonial;