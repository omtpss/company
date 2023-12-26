import { Col, Row, Typography, Image, Space } from 'antd';
import { Link } from 'react-router-dom';

const {Title, Text} = Typography;

function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <Row align="middle" gutter={[50]}>
                    <Col md={13} sm={24}>
                        <div className='bannerContent'>
                            <Title level={4} className='secondaryTitle'>Award Winning Company</Title>
                            <Title level={1} className='primaryTitle'>Website & <span>Application</span> development agency</Title>
                            <Text>Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches data commnunication.</Text> <br /> <br />

                            <Space size={[16, 16]} wrap>
                                <Link to="./Contact" type="primary" className='ant-btn-primary'> Get a Quote </Link>
                                <Link to="/contact" type="primary" className='ml-5 ant-btn-primary' danger> Contact Us </Link>
                            </Space>
                        </div>
                    </Col>
                    <Col md={11} sm={24}>
                        <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/banner_h_4_img.png"></Image>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Banner;