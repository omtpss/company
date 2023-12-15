import React, { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom";
import { PhoneOutlined } from '@ant-design/icons';

function Header() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);

    return (
        <>
            <div className={scroll ? "site_header sticky_header" : "site_header"} >
                <div className="container">
                    <div className="nav_menu">
                        <div className="site_logo">
                            <span>OP</span>
                        </div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/service">Services</Link>
                            </li>
                            <li>
                                <Link to="/project">Projects</Link>
                            </li>
                            <li>
                                <Link to="/testimonial">Testimonial</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="callLink">
                            <PhoneOutlined style={{ fontSize: '30px'}}/> <span className="callNb"><span>Call any time</span> 123 456 7890 </span>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    )
}

export default Header;