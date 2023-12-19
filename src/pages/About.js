import AboutSection from '../component/AboutSection';
import ChooseSection from '../component/ChooseSection';
import Breadcrumbs from '../layout/Breadcrumbs';


function About() {


    return (
        <div className='AboutPage'>
            <div className="banner innerBanner">
                <div className="container">
                    <Breadcrumbs />

                </div>
            </div>
            <AboutSection />
            <ChooseSection/>
            
        </div>
    )
}

export default About;