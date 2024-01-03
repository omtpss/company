import { Col, Row, Typography, Button, Image } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';


const { Title, Text } = Typography;

function ServiceSection() {

    const serviceData = [
        {
            serviceIcon: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_h_4_icon_1.png"></Image>,
            serviceTitle: 'UI/UX Design',
            serviceDes: 'Strategies to ensure proactive domination. At the end of the day going forward.',
        },
        {
            serviceIcon: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_h_4_icon_6.png"></Image>,
            serviceTitle: 'Web Development',
            serviceDes: 'Strategies to ensure proactive domination. At the end of the day going forward.',
        },
        {
            serviceIcon: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_h_4_icon_4.png"></Image>,
            serviceTitle: 'Frontend Development',
            serviceDes: 'Strategies to ensure proactive domination. At the end of the day going forward.',
        },
        {
            serviceIcon: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_h_4_icon_2.png"></Image>,
            serviceTitle: 'SEO Optimization',
            serviceDes: 'Strategies to ensure proactive domination. At the end of the day going forward.',
        },
        {
            serviceIcon: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_h_4_icon_5.png"></Image>,
            serviceTitle: 'Design & Concept',
            serviceDes: 'Strategies to ensure proactive domination. At the end of the day going forward.',
        },
        {
            serviceIcon: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_h_4_img_3.png"></Image>,
            serviceTitle: 'Digital Strategy',
            serviceDes: 'Strategies to ensure proactive domination. At the end of the day going forward.',
        },
    ];

    return (
        <div className='greyBg sectionPadding serviceSection'>
            <div className="container">
                <Title level={4} align="center" className='secondaryTitle blueColor'><span>Our</span> Services</Title>
                <Title level={1} align="center" className='primaryTitle blueColor spaceBottom'>We care about your business</Title>
                <Row align="middle" gutter={[24, 24]}>
                    {serviceData.map((items, index) => {
                        return (
                            <Col key={index} lg={8} sm={12} xs={24}>
                                <div className='serviceCard'>
                                    <div className='serviceIcon'>{items.serviceIcon}</div>
                                    <Title level={4} className='secondaryTitle'>{items.serviceTitle}</Title>
                                    <Text >{items.serviceDes}</Text>
                                    <br /><br />
                                    <Button type="primary" danger className='d-flex' align="middle"> Read More <ArrowRightOutlined /></Button>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default ServiceSection;