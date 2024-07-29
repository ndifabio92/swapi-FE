import { useState } from "react";
import logo from '../../../assets/images/logo/Starwars-logo.png';
import './styles/navbar.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon style={{ color: "yellow" }} />
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu} sx={{ display: { xs: 'flex' }, flexDirection: { xs: "column" } }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    href="/"
                                >
                                    HOME
                                </Button>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    href="/films"
                                >
                                    FILMS
                                </Button>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    href="/characters"
                                >
                                    CHARACTERS
                                </Button>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    href="/starships"
                                >
                                    STARSHIPS
                                </Button>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    href="/vehicles"
                                >
                                    VEHICLES
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: { xs: 'flex', md: 'none' } }}
                        href="/"
                    >
                        <img src={logo} className='img-logo' alt="logo" />
                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="container-box-web">
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            href="/"
                        >
                            <img src={logo} className='img-logo' alt="logo" />
                        </Button>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="container-menu-web">
                            <Button
                                onClick={handleCloseNavMenu}
                                className="btn-navbar"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href="/"
                            >
                                HOME
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                className="btn-navbar"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href="/films"
                            >
                                FILMS
                            </Button>
                            <Button
                                className="btn-navbar"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href="/characters"
                            >
                                CHARACTERS
                            </Button>
                            <Button
                                className="btn-navbar"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href="/starships"
                            >
                                STARSHIPS
                            </Button>
                            <Button
                                className="btn-navbar"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href="/vehicles"
                            >
                                VEHICLES
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Navbar;