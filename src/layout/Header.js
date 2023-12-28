import React, { useState, useEffect } from "react"
import { Outlet, NavLink, Link } from "react-router-dom";
import { PhoneOutlined } from '@ant-design/icons';

function Header() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);

    const [addClass, setAddClass] = useState(false);

    const toggleClass = () => {
        setAddClass(!addClass);
    };

    return (
        <>
            <div className={scroll ? "site_header sticky_header" : "site_header"} >
                <div className="container">
                    <div className="nav_menu">
                        <div className="site_logo">
                            <Link to="/"><span>Lo</span>go</Link>
                        </div>
                        <ul className={addClass ? 'show' : ''} onClick={toggleClass}>
                            <div className="mobileToggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/project">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/testimonial">Testimonial</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="callLink">
                            <PhoneOutlined /> <span className="callNb"><span>Call any time</span> 123 456 7890 </span>
                        </div>
                        <div className="mobileToggle" onClick={toggleClass}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    )
}

export default Header;