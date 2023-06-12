import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/Starwars-logo.png'
import './styles/index.css';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4 nav-container">
            <div className='nav-header'>
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    <img src={logo} style={{ width: "125px" }} />
                </Link>

                <div className="navbar-collapse nav-bar">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/films"
                        >
                            Films
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/people"
                        >
                            People
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/planets"
                        >
                            Planets
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/starships"
                        >
                            Starships
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/vehicles"
                        >
                            Vehicles
                        </NavLink>
                    </div>
                </div>
            </div>

        </nav>


    )
}

export default Navbar;