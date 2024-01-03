import { Col, Row, Typography, Image } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { Title, Text } = Typography;

function PorjectSection() {

    const serviceData = [
        {
            projectImg: <Image preview={false} src="./images/website01.png"></Image>,
            projectTitle: 'Creative Agency',
            projectTag: 'Branding',
            projectDes: 'Completely synergize resource taxing relation ships via premier niche markets.',
            projectUrl: './Contact',
        },
        {
            projectImg: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/portfolio-10-520x640.jpg"></Image>,
            projectTitle: 'Web Development',
            projectTag: 'Branding',
            projectDes: 'Completely synergize resource taxing relation ships via premier niche markets.',
            projectUrl: './Contact',
        },
        {
            projectImg: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/portfolio-8-520x640.jpg"></Image>,
            projectTitle: 'Infrastructure Upgrade',
            projectTag: 'Design, Idea',
            projectDes: 'Completely synergize resource taxing relation ships via premier niche markets.',
            projectUrl: './Contact',
        },
        {
            projectImg: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/portfolio-4-520x640.jpg"></Image>,
            projectTitle: 'Innovation Technology',
            projectTag: 'Software, Technology',
            projectDes: 'Completely synergize resource taxing relation ships via premier niche markets.',
            projectUrl: './Contact',
        },
        {
            projectImg: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/portfolio-11-520x640.jpg"></Image>,
            projectTitle: 'Creative Agency',
            projectTag: 'Branding',
            projectDes: 'Completely synergize resource taxing relation ships via premier niche markets.',
            projectUrl: './Contact',
        },
        {
            projectImg: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/portfolio-10-520x640.jpg"></Image>,
            projectTitle: 'Web Development',
            projectTag: 'Branding',
            projectDes: 'Completely synergize resource taxing relation ships via premier niche markets.',
            projectUrl: './Contact',
        },
    ]


    return (
        <div className='greyBg sectionPadding projectSection'>
            <div className="container">
                <Title level={4} align="center" className='secondaryTitle blueColor'><span>Our</span> Projects</Title>
                <Title level={1} align="center" className='primaryTitle blueColor spaceBottom'>Look at the work completed by Tekone</Title>
                <Row align="middle" gutter={[24, 24]}>
                    {serviceData.map((items, index) => {
                        return (
                            <Col key={index} lg={8} sm={12} xs={24}>
                                <div className='projectCard'>
                                    <div className='porjectCardOverlay'></div>
                                    {items.projectImg}
                                    <div className='porjectContent'>
                                        <Title level={4} className='secondaryTitle'>{items.projectTitle}</Title>
                                        <Title level={5} className=''><TagOutlined /> {items.projectTag}</Title>
                                        <Text >{items.projectDes}</Text>
                                    </div>
                                    <Link to={items.projectUrl} target='_blank' className='ant-btn-primary'>View Live</Link>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default PorjectSection;