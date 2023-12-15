import { Col, Row, Typography, Image, Button } from 'antd';

const { Title, Text } = Typography;

function AboutSection() {
    return (
        <div className='sectionPadding'>
            <div className="container">
                <Row align="middle" gutter={[50]}>
                    <Col span={12}>
                        <div className='aboutImg'>
                            <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/feature_about_3.png"></Image>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='aboutContent'>
                            <Title level={4} className='secondaryTitle blueColor'><span>About</span> Us</Title>
                            <Title level={1} className='primaryTitle blueColor'>Make it easy to do your business with us and we are best</Title>
                            <Text>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward, a new normal that has evolved operational X is on the runway.</Text> 
                            <br/><br/>
                            <Button type="primary" danger> Get a Quote </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutSection;