import ChooseSection from '../component/ChooseSection';
import ServiceSection from '../component/ServiceSection';
import Breadcrumbs from '../layout/Breadcrumbs';


function Services() {


    return (
        <div className='servicePage'>
            <div className="banner innerBanner">
                <div className="container">
                    <Breadcrumbs />
                </div>
            </div>
            <ServiceSection />
            <ChooseSection/>
        </div>
    )
}

export default Services;