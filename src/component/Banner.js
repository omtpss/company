import { Col, Row, Typography, Image, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <Row align="middle" gutter={[50]}>
                    <Col md={13} sm={24}>
                        <div className='bannerContent'>
                            <Title level={4} className='secondaryTitle'>Welcome <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256" /><path d="M94,61.4a20,20,0,0,1,34.6-20l30,51.9" fill="none" stroke="#E42C2C" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M67.4,95.2l-16-27.7A20,20,0,0,1,86,47.5l34,58.9" fill="none" stroke="#E42C2C" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M154,165.3a39.9,39.9,0,0,1,14.6-54.6l-10-17.4a20,20,0,0,1,34.7-20l20,34.7A80,80,0,0,1,74.7,188l-42-72.8a20,20,0,0,1,34.7-20l22,38.1" fill="none" stroke="#E42C2C" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M81.1,240A110.3,110.3,0,0,1,48,204" fill="none" stroke="#E42C2C" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M176,31a51.7,51.7,0,0,1,45,26" fill="none" stroke="#E42C2C" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg> to Our Company</Title>
                            <Title level={1} className='primaryTitle'>Website & <span>Application</span> development agency</Title>
                            <Text>Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches data commnunication.</Text> <br /> <br />
                            
                            <Space size={[16, 16]} wrap>
                                <Link to="./Contact" type="primary" className='ant-btn-primary'> Get a Quote </Link>
                                <Link to="/contact" type="primary" className='ml-5 ant-btn-primary' danger> Contact Us </Link>
                            </Space>
                        </div>
                    </Col>
                    <Col md={11} sm={24}>
                        <div className='bannerImg'>
                            <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/banner_h_4_img.png"></Image>
                            <div className='hiIcon'>
                                <Image preview={false} src='https://vcodeit.com/assets/images/hi-icon.svg'></Image>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Banner;