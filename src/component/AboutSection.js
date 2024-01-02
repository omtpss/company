import { Col, Row, Typography, Image } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

function AboutSection() {
    const featureData = [
        {
            featureIcon: <Image preview={false} src="/images/expert-team.svg"></Image>,
            featureTitle: 'Expert Peoples',
            featureDes: 'At vero eos et accusamus etiusto odio praesentium.',
        },
        {
            featureIcon: <Image preview={false} src="/images/growth.svg"></Image>,
            featureTitle: 'First Growing Process',
            featureDes: 'At vero eos et accusamus etiusto odio praesentium.',
        },
        {
            featureIcon: <Image preview={false} src="/images/idea.svg"></Image>,
            featureTitle: 'Creative Ideas',
            featureDes: 'At vero eos et accusamus etiusto odio praesentium.',
        },
    ]

    return (
        <div className='sectionPadding aboutSection'>
            <div className="container">
                <Row align="middle" gutter={{md: 24,xl: 100}}>
                    <Col md={12}>
                        <div className='aboutImg'>
                            <Image preview={false} src="/images/about.jpg"></Image>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className='aboutContent'>
                            <Title level={4} className='secondaryTitle blueColor'><span>About</span> Us</Title>
                            <Title level={1} className='primaryTitle blueColor'>Make it easy to do your business with us and we are best</Title>
                            <Text>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward, a new normal that has evolved operational X is on the runway.</Text> <br/><br/>
                            <Text>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward, a new normal that has evolved operational X is on the runway.</Text> 
                            <br/><br/>
                            <Link to="/Contact" type="primary" className='ant-btn-primary'> Get a Quote </Link>
                        </div>
                    </Col>
                </Row>

                <Row gutter={[24]}>
                    {featureData.map((items, index) => {
                        return (
                            <Col sm={12} lg={8}>
                                <div className='featuredCard'>
                                    <div className='featuredIcon'>
                                        {items.featureIcon}
                                    </div>
                                    <div className='featuredContent'>
                                        <Title level={4} className='secondaryTitle blueColor'>{items.featureTitle}</Title>
                                        <Text className='blueColor'>{items.featureDes}</Text>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default AboutSection;