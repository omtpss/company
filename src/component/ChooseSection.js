import { Col, Row, Typography, Image } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

function ChooseSection() {
    const chooseList = [
        {
            chooseIcon: <Image preview={false} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_shape_image_1.png'></Image>,
            chooseTitle: 'First Growing Process',
            chooseDes: 'Bring to the table win-win survival strategies to ensur.',
        },
        {
            chooseIcon: <Image preview={false} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_shape_image_2.png'></Image>,
            chooseTitle: 'Dedicated Support 24/7',
            chooseDes: 'Leverage agile frameworks to provide a robust.',
        },
        {
            chooseIcon: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_shape_image_3.png"></Image>,
            chooseTitle: 'Clean Code Design',
            chooseDes: 'Podcasting operational change management inside.',
        },
    ]


    return (
        <div className='sectionPadding chooseSection'>
            <div className="container">
                <Row align="middle" gutter={[50]}>
                    <Col md={12}>
                        <div className='chooseImg'>
                            <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/feature_img.jpg"></Image>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className='chooseContent'>
                            <Title level={4} className='secondaryTitle blueColor'><span>Why Choose</span> Our Services!</Title>
                            <Title level={1} className='primaryTitle blueColor'>Leading the best digital agency</Title>
                            <Text>Bring to the table win-win survival strategies to ensure proactive domination At the end of the day.</Text>
                            <div className='iconListWrap'>
                                {chooseList.map((items, index) => {
                                    return (
                                        <div className='iconList'>
                                            <div className='iconListIcon'>
                                                {items.chooseIcon}
                                            </div>
                                            <div className='iconListTxt'>
                                                <Title level={5} className='secondaryTitle blueColor'>{items.chooseTitle}</Title>
                                                <Text>{items.chooseDes}</Text>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <br /><br />
                            <Link to="/contact" type="primary" className='ant-btn-primary' danger> Contact Us </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ChooseSection;