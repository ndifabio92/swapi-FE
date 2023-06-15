import React, {useEffect, useRef, useState} from "react";
import {Link, NavLink} from 'react-router-dom';
import logo from '../../../assets/images/logo/Starwars-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import './styles/navbar.css';
import {Button} from "@mui/material";

const Navbar = () => {

    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleClick = () => {
        setIsActiveMenu(!isActiveMenu);
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check on initial render

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4 nav-container">
            <div className='nav-header'>
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    <img src={logo} className='img-logo' alt="logo"/>
                </Link>
                <div className="navbar-collapse nav-bar">
                    <div className={isMobile && isActiveMenu ? "navbar-collapse nav-bar navbar-nav-active" : "navbar-collapse nav-bar navbar-nav"}>
                    <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/"
                            onClick={handleClick}
                        >
                            FILMS
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active ' : ''}`}
                            to="/characters"
                            onClick={handleClick}
                        >
                            CHARACTERS
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/planets"
                            onClick={handleClick}
                        >
                            PLANETS
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/starships"
                            onClick={handleClick}
                        >
                            STARSHIPS
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/vehicles"
                            onClick={handleClick}
                        >
                            VEHICLES
                        </NavLink>
                    </div>
                </div>
                <div className="menu-mobile">
                    <span onClick={handleClick}>
                        <MenuIcon />
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;