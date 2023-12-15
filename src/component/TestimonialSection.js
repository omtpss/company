import React from 'react';
import { Typography, Carousel } from 'antd';


const { Title, Text } = Typography;

const clientMsg = [
    {
        msgTxt: 'Operational  podcasting change management inside of workflows to establish a framework . Keeping your eye on the ball while performing a deep dive on the start-up mentality. Taking seamless key performance indicators offline to maximize the long tail.',
        clientName: 'Robards Lynda',
        clientPosition: 'Company SEO, Google',
    },
    {
        msgTxt: 'Operational  podcasting change management inside of workflows to establish a framework . Keeping your eye on the ball while performing a deep dive on the start-up mentality. Taking seamless key performance indicators offline to maximize the long tail.',
        clientName: 'Howard Esther',
        clientPosition: 'CEO & Founder',
    },
]

function TestimonialSection() {
    return (
        <div className='sectionPadding'>
            <div className='container'>
                <Title level={4} align="center" className='secondaryTitle blueColor'><span>Test</span>imonial</Title>
                <Title level={1} align="center" className='primaryTitle blueColor spaceBottom'>We care about your business</Title>
                <Carousel autoplay className='testimonialSlider'>
                    {clientMsg.map((items, index) => {
                        return (
                            <div key={index}>
                                <div className='quoteIcon'>
                                    <svg height="50" viewBox="0 0 1792 1792" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M832 960v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zm896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z" fill='#ff4d4f' /></svg>
                                </div>
                                <Text>{items.msgTxt}</Text>
                                <div className='rating'>
                                    <svg height="24" version="1.1" width="24"><g transform="translate(0 -1028.4)"><path d="m9.5999 1.4564 1.5501 4.7699 5.015 0.0002-4.057 2.9482 1.55 4.7703-4.0581-2.948-4.0577 2.948 1.5497-4.7703-4.0575-2.9482 5.0154-0.0002z" fill="#f1c40f" stroke="#f39c12" stroke-width=".69755" transform="matrix(1.4336 0 0 1.4336 -1.7602 1028.9)" /></g></svg>
                                    <svg height="24" version="1.1" width="24"><g transform="translate(0 -1028.4)"><path d="m9.5999 1.4564 1.5501 4.7699 5.015 0.0002-4.057 2.9482 1.55 4.7703-4.0581-2.948-4.0577 2.948 1.5497-4.7703-4.0575-2.9482 5.0154-0.0002z" fill="#f1c40f" stroke="#f39c12" stroke-width=".69755" transform="matrix(1.4336 0 0 1.4336 -1.7602 1028.9)" /></g></svg>
                                    <svg height="24" version="1.1" width="24"><g transform="translate(0 -1028.4)"><path d="m9.5999 1.4564 1.5501 4.7699 5.015 0.0002-4.057 2.9482 1.55 4.7703-4.0581-2.948-4.0577 2.948 1.5497-4.7703-4.0575-2.9482 5.0154-0.0002z" fill="#f1c40f" stroke="#f39c12" stroke-width=".69755" transform="matrix(1.4336 0 0 1.4336 -1.7602 1028.9)" /></g></svg>
                                    <svg height="24" version="1.1" width="24"><g transform="translate(0 -1028.4)"><path d="m9.5999 1.4564 1.5501 4.7699 5.015 0.0002-4.057 2.9482 1.55 4.7703-4.0581-2.948-4.0577 2.948 1.5497-4.7703-4.0575-2.9482 5.0154-0.0002z" fill="#f1c40f" stroke="#f39c12" stroke-width=".69755" transform="matrix(1.4336 0 0 1.4336 -1.7602 1028.9)" /></g></svg>
                                    <svg height="24" version="1.1" width="24"><g transform="translate(0 -1028.4)"><path d="m9.5999 1.4564 1.5501 4.7699 5.015 0.0002-4.057 2.9482 1.55 4.7703-4.0581-2.948-4.0577 2.948 1.5497-4.7703-4.0575-2.9482 5.0154-0.0002z" fill="#f1c40f" stroke="#f39c12" stroke-width=".69755" transform="matrix(1.4336 0 0 1.4336 -1.7602 1028.9)" /></g></svg>
                                </div>
                                <Title level={4} align="center" className='secondaryTitle blueColor'>{items.clientName}</Title>
                                <Text className='clientPosition'>{items.clientPosition}</Text>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default TestimonialSection;