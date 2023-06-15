import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo/Starwars-logo.png'
import './styles/navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4 nav-container">
            <div className='nav-header'>
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    <img src={logo} className='img-logo'  alt="logo"/>
                </Link>

                <div className="navbar-collapse nav-bar">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/"
                        >
                            FILMS
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active ' : ''}`}
                            to="/characters"
                        >
                            CHARACTERS
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/planets"
                        >
                            PLANETS
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/starships"
                        >
                            STARSHIPS
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/vehicles"
                        >
                            VEHICLES
                        </NavLink>
                    </div>
                </div>
            </div>

        </nav>


    )
}

export default Navbar;