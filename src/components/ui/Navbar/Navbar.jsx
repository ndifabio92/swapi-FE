import { Link, NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                The Star Wars API
            </Link>

            <div className="navbar-collapse">
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
        </nav>


    )
}

export default Navbar;