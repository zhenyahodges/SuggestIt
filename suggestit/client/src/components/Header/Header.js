import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
    const activeStyles = {           
       backgroundColor: '#F79234',     
       borderRadius: '5px',
       textShadow: '1px 1px 1px #132930'
    };

    return (
        // <!-- || HEADER -->
        <header className='page header'>
            <section className='header container special-border'>
                <div className='header-wrapper'>
                    <h1 className='title-header'>
                        <NavLink className='logo-nav' to='.'>
                            Suggest<span className='suggest-it'>It</span>
                        </NavLink>
                    </h1>
                    <p className='subtitle-header'>
                        Ultimate Feedback
                        {/* <!-- Suggestion polls for improvements --> */}
                    </p>
                    <p></p>
                </div>

                {/* <!-- ||HEADER NAV --> */}
                <nav className='nav header'>
                    <ul className='nav header list'>
                        {/* <NavLink
                            to='.'
                            className='nav header list links home'
                            id='nav-head-home-link'
                        >
                            Home
                        </NavLink> */}
                        <NavLink
                            to='cards'
                            className='nav header list links cat'
                            id='nav-head-cat-link'
                              style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Catalog
                        </NavLink>

                        {/* visible when not logged in */}
                        <NavLink
                            to='login'
                            className='nav header list links log'
                            id='nav-head-log-link'
                              style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Login
                        </NavLink>

                    {/* LOGOUT visible when looged in only */}
                        <NavLink
                            to='logout'
                            className='nav header list links logout'
                            id='nav-head-logout-link'
                              style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Logout
                        </NavLink>

                      {/* visible when not logged in */}
                        <NavLink
                            to='register'
                            className='nav header list links reg'
                            id='nav-head-reg-link'
                              style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Register
                        </NavLink>
                        <NavLink
                            to='profile'
                            className='nav header list links prof'
                            id='nav-head-prof-link'
                              style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Profile
                        </NavLink>
                        {/* <!-- <a to="/about" className="nav header list links">About</a> --> */}
                        {/* <!-- <a to="/contact" className="nav header list links">Contact</a> --> */}
                    </ul>
                </nav>
                <div className='whos-lookin-wrapper'>
                    <p className='whos-lookin guest' id='whos-lookin-guest'>
                        Guest
                    </p>
                    <p
                        className='whos-lookin logged-user'
                        id='whos-lookin-logged-user'
                    >
                        user email
                    </p>
                </div>
            </section>
        </header>
    );
};
