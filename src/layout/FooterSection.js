import { Col, Row, Typography, Input, Button } from 'antd';
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

function FooterSection() {

    const serviceLinks = [
        {
            linkTxt: 'IT Management',
            linkUrl: './Contact',
        },
        {
            linkTxt: 'IT Solutions',
            linkUrl: './Contact',
        },
        {
            linkTxt: 'Machine Learning',
            linkUrl: './Contact',
        },
        {
            linkTxt: 'UI/UX Design',
            linkUrl: './Contact',
        },
        {
            linkTxt: 'SEO Optimization',
            linkUrl: './Contact',
        },
    ]

    const informationLinks = [
        {
            linkTxt: 'About Company',
            linkUrl: './About',
        },
        {
            linkTxt: 'Out Team',
            linkUrl: './Team',
        },
        {
            linkTxt: 'Pricing Plan',
            linkUrl: './Contact',
        },
        {
            linkTxt: 'Our Project',
            linkUrl: './Project',
        },
        {
            linkTxt: 'Contact Us',
            linkUrl: './Contact',
        },
    ]


    return (
        <>
            <div className='sectionPadding footer'>
                <div className="container">
                    <Row gutter={{md:24, lg:40, xl:80}}>
                        <Col lg={7} md={12} >
                            <Title className='secondaryTitle' level={4}><span>Lo</span>go</Title>
                            <Text>Proactively envisioned multimedia based expertise and cross-media growth strategies seamlessly.</Text>
                            <div className='socialIcon'>
                                <Link>
                                    <svg enable-background="new 0 0 56.693 56.693" height="20px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="20px" ><path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" fill='#fff' /></svg>
                                </Link>
                                <Link>
                                    <svg enable-background="new 0 0 32 32" height="16px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="16px"><rect fill="#fff" height="23" width="7" y="9" /><path d="M24.003,9C20,9,18.89,10.312,18,12V9h-7v23h7V19c0-2,0-4,3.5-4s3.5,2,3.5,4v13h7V19C32,13,31,9,24.003,9z" fill="#fff" /><circle cx="3.5" cy="3.5" fill="#fff" r="3.5" /></svg>
                                </Link>
                                <Link>
                                    <svg version="1.1" id="Layer_1" height="20px" width="20px" viewBox="0 0 56.7 56.7" enable-background="new 0 0 56.7 56.7">
                                        <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z" fill='#fff' /><circle cx="41.5" cy="16.4" r="2.9" fill='#fff' /><path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9 h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3 s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6 c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z" fill='#fff' />
                                    </svg>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={5} md={12}>
                            <Title className='secondaryTitle' level={4}><span>Our</span> Services</Title>
                            <ul className='footerLinks'>
                                {serviceLinks.map((links, index) => {
                                    return (
                                        <Link to={links.linkUrl}><ArrowRightOutlined /> {links.linkTxt}</Link>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col lg={5} md={12} xs={24}>
                            <Title className='secondaryTitle' level={4}><span>In</span>formation</Title>
                            <ul className='footerLinks'>
                                {informationLinks.map((links, index) => {
                                    return (
                                        <Link to={links.linkUrl}><ArrowRightOutlined /> {links.linkTxt}</Link>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col lg={7} md={12} xs={24}>
                            <Title className='secondaryTitle' level={4}><span>Ne</span>weletter</Title>
                            <Text>Register now to get latest updates on promotions & coupons.</Text>
                            <br /><br />
                            <div className='formStyle'>
                                <Input placeholder="Your email address" /> <br /><br />
                                <Button type="primary" danger> Subscribe </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='copyRight'>
                <div className='container'>
                    <Text align="center">© 2023 Website. Designed By Om.</Text>
                </div>
            </div>
        </>
    )
}

export default FooterSection;