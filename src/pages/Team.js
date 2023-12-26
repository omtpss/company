import TeamSection from '../component/TeamSection';
import Breadcrumbs from '../layout/Breadcrumbs';


function Team() {


    return (
        <div className='servicePage'>
            <div className="banner innerBanner">
                <div className="container">
                    <Breadcrumbs />
                </div>
            </div>
            <TeamSection />
        </div>
    )
}

export default Team;