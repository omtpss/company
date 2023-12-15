import { Typography, } from 'antd';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const { Title } = Typography;

function Breadcrumbs(props) {
    const location = useLocation();
    const [title, setTitle] = useState('')

    useEffect(() => {
        setTitle(location.pathname.slice(1))
    }, [location])

    return (
        <div>
            <Title align="center" level={1} className='primaryTitle'>{title}</Title>
            <Breadcrumb
                items={[
                    {
                        href: '',
                        title: (
                            <>
                                <HomeOutlined />
                                <span>Home</span>
                            </>
                        ),
                    },
                    {
                        title: (
                            <>
                                <span>{title}</span>
                            </>
                        ),
                    }
                ]}
            />
        </div>
    )
}

export default Breadcrumbs;