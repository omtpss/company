import { Col, Row, Typography, Image, Button, Input } from 'antd';

const { Title, Text } = Typography;
const { TextArea } = Input;

function ContactSection() {

    const contactList = [
        {
            contactIcon: <Image preview={false} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/phone-call-2.png'></Image>,
            contactTitle: 'Phone:',
            contactDetails: '(+088)589-8745',
        },
        {
            contactIcon: <Image preview={false} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/email-1.png'></Image>,
            contactTitle: 'Email:',
            contactDetails: 'support@rstheme.com',
        },
        {
            contactIcon: <Image preview={false} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/location-2.png'></Image>,
            contactTitle: 'Address:',
            contactDetails: ' 2972 Westheimer Rd. Santa Ana',
        },
    ]

    return (
        <div className='sectionPadding contactUs'>
            <div className="container">

                <Row align="middle" gutter={{md: 24,xl: 100}}>
                    <Col md={14}>
                        <Title level={4} className='secondaryTitle blueColor'><span>Get</span> in Touch</Title>
                        <Title level={1} className='primaryTitle blueColor spaceBottom02'>Don't be say, Say hello!</Title>
                        <div className='formStyle'>
                            <Row gutter={[20, 20]}>
                                <Col sm={12} xs={24}>
                                    <Input placeholder="Your Name" />
                                </Col>
                                <Col sm={12} xs={24}>
                                    <Input placeholder="Your Email" />
                                </Col>
                                <Col md={24} xs={24}>
                                    <TextArea rows={4} placeholder="Message..." maxLength={6} />
                                </Col>
                                <Col md={24} xs={24}>
                                    <Button type="primary" danger> Send Message </Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className='iconListWrap contactList'>
                            {contactList.map((items, index) => {
                                return (
                                    <div className='iconList'>
                                        <div className='iconListIcon'>
                                            {items.contactIcon}
                                        </div>
                                        <div className='iconListTxt'>
                                            <Text>{items.contactTitle}</Text>
                                            <Title level={5} className='secondaryTitle blueColor'>{items.contactDetails}</Title>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ContactSection;