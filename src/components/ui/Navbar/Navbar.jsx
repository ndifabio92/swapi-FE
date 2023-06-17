import React, {useState} from "react";
import logo from '../../../assets/images/logo/Starwars-logo.png';
import './styles/navbar.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link, ListItem} from "@mui/material";

const pages = ['films', 'characters', 'vehicles', 'starships'];
const Navbar = () => {

    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu} sx={{ display: {xs: 'flex'}, flexDirection: {xs:"column"}}}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                    href="/"
                                >
                                    FILMS
                                </Button>
                                <Button
                                    component={Link}

                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                    href="/characters"
                                >
                                    CHARACTERS
                                </Button>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                    href="/starships"
                                >
                                    STARSHIPS
                                </Button>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                    href="/vehicles"
                                >
                                    VEHICLES
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{my: 2, color: 'white', display: {xs: 'flex', md: 'none'}}}
                        href="/"
                    >
                        <img src={logo} className='img-logo' alt="logo"/>
                    </Button>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}} className="container-box-web">
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{my: 2, color: 'white', display: 'block'}}
                            href="/"
                        >
                            <img src={logo} className='img-logo' alt="logo"/>
                        </Button>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}} className="container-menu-web">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                                href="/"
                            >
                                FILMS
                            </Button>
                            <Button
                                component={Link}

                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                                href="/characters"
                            >
                                CHARACTERS
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                                href="/starships"
                            >
                                STARSHIPS
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                                href="/vehicles"
                            >
                                VEHICLES
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        // <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4 nav-container">
        //     <div className='nav-header'>
        //         <Link
        //             className="navbar-brand"
        //             to="/"
        //         >
        //             <img src={logo} className='img-logo' alt="logo"/>
        //         </Link>
        //         <div className="navbar-collapse nav-bar">
        //             <div className={isMobile && isActiveMenu ? "navbar-collapse nav-bar navbar-nav-active" : "navbar-collapse nav-bar navbar-nav"}>
        //             <NavLink
        //                     className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
        //                     to="/"
        //                     onClick={handleClick}
        //                 >
        //                     FILMS
        //                 </NavLink>
        //
        //                 <NavLink
        //                     className={({isActive}) => `nav-item nav-link  ${isActive ? 'active ' : ''}`}
        //                     to="/characters"
        //                     onClick={handleClick}
        //                 >
        //                     CHARACTERS
        //                 </NavLink>
        //
        //                 <NavLink
        //                     className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
        //                     to="/planets"
        //                     onClick={handleClick}
        //                 >
        //                     PLANETS
        //                 </NavLink>
        //
        //                 <NavLink
        //                     className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
        //                     to="/starships"
        //                     onClick={handleClick}
        //                 >
        //                     STARSHIPS
        //                 </NavLink>
        //
        //                 <NavLink
        //                     className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
        //                     to="/vehicles"
        //                     onClick={handleClick}
        //                 >
        //                     VEHICLES
        //                 </NavLink>
        //             </div>
        //         </div>
        //         <div className="menu-mobile">
        //             <span onClick={handleClick}>
        //                 <MenuIcon />
        //             </span>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar;