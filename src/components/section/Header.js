import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollSections } from "react-scroll-section";
import { FcGraduationCap } from "react-icons/fc";
import { FaTimes, FaBars } from "react-icons/fa";
const Header = () => {
    const sections = useScrollSections();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to="/" className="nav__logo">
                        <FcGraduationCap /> Shohzod
                    </Link>
                    <ul className={mobileMenuOpen ? "nav__menu active" : "nav__menu"}>
                        {sections.map(({ id, onClick, selected }) => (
                            <li
                                key={id}
                                onClick={() => (onClick(), setMobileMenuOpen(!mobileMenuOpen))}
                                className={selected ? "active" : ""}
                            >
                                {id.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                    <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="menu__icon">
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
