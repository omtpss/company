import PorjectSection from '../component/PorjectSection';
import Breadcrumbs from '../layout/Breadcrumbs';


function Project() {


    return (
        <div className='projectPage'>
            <div className="banner innerBanner">
                <div className="container">
                    <Breadcrumbs />
                </div>
            </div>
            <PorjectSection />
        </div>
    )
}

export default Project;