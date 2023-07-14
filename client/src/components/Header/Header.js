import { NavLink, useNavigation } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/useCurrentUser';

export default function Header({ props }) {
    const navigation = useNavigation();
    const { currentUser } = useCurrentUser();

    const userId = props;
    const isGuest = currentUser === 'Guest';

    const activeStyles = {
        backgroundColor: '#F79234',
        borderRadius: '5px',
        textShadow: '1px 1px 1px #132930',
    };

    return (
        <header className='page header'>
            <section className='header container special-border'>
                <div className='header-wrapper'>
                    <h1 className='title-header'>
                        <NavLink className='logo-nav' to='.'>
                            Suggest<span className='suggest-it'>It</span>
                        </NavLink>
                    </h1>
                    <p className='subtitle-header'>Ultimate Feedback</p>
                    <p></p>
                </div>

                <div className='header-nav-containter'>
                    <nav className='nav header'>
                        <ul className='nav header list'>
                            <NavLink
                                to='.'
                                className='nav header list links home'
                                id='nav-head-home-link'
                                disabled={navigation.state === 'loading'}
                            >
                                {navigation.state === 'loading'
                                    ? 'Loading..'
                                    : 'Home'}
                            </NavLink>
                            <NavLink
                                to='cards'
                                className='nav header list links cat'
                                id='nav-head-cat-link'
                                style={({ isActive }) =>
                                    isActive ? activeStyles : null
                                }
                                disabled={navigation.state === 'loading'}
                            >
                                {navigation.state === 'loading'
                                    ? 'Loading..'
                                    : 'Catalog'}
                            </NavLink>
                            <NavLink
                                to='infos'
                                className='nav header list links cat'
                                id='nav-head-info-link'
                                style={({ isActive }) =>
                                    isActive ? activeStyles : null
                                }
                                disabled={navigation.state === 'loading'}
                            >
                                {navigation.state === 'loading'
                                    ? 'Loading..'
                                    : 'Infos Catalog'}
                            </NavLink>

                            {isGuest && (
                                <NavLink
                                    to='login'
                                    className='nav header list links log'
                                    id='nav-head-log-link'
                                    style={({ isActive }) =>
                                        isActive ? activeStyles : null
                                    }
                                    disabled={navigation.state === 'loading'}
                                >
                                    {navigation.state === 'loading'
                                        ? 'Loading..'
                                        : 'Login'}
                                </NavLink>
                            )}

                            {!isGuest && (
                                <NavLink
                                    to='logout'
                                    className='nav header list links logout'
                                    id='nav-head-logout-link'
                                    style={({ isActive }) =>
                                        isActive ? activeStyles : null
                                    }
                                    disabled={navigation.state === 'loading'}
                                >
                                    {navigation.state === 'loading'
                                        ? 'Loading..'
                                        : 'Logout'}
                                </NavLink>
                            )}

                            {isGuest && (
                                <NavLink
                                    to='register'
                                    className='nav header list links reg'
                                    id='nav-head-reg-link'
                                    style={({ isActive }) =>
                                        isActive ? activeStyles : null
                                    }
                                    disabled={navigation.state === 'loading'}
                                >
                                    {navigation.state === 'loading'
                                        ? 'Loading..'
                                        : 'Register'}
                                </NavLink>
                            )}
                            {!isGuest && (
                                <NavLink
                                    to={`users/${userId}`}
                                    className='nav header list links prof'
                                    id='nav-head-prof-link'
                                    style={({ isActive }) =>
                                        isActive ? activeStyles : null
                                    }
                                    disabled={navigation.state === 'loading'}
                                >
                                    {navigation.state === 'loading'
                                        ? 'Loading..'
                                        : 'Profile'}
                                </NavLink>
                            )}
                            {/* <!-- <a to="/about" className="nav header list links">About</a> --> */}
                            {/* <!-- <a to="/contact" className="nav header list links">Contact</a> --> */}
                        </ul>
                    </nav>
                    <div className='whos-lookin-wrapper'>
                        <p className='whos-lookin' id='whos-lookin'>
                            {currentUser}
                        </p>
                    </div>
                </div>
            </section>
        </header>
    );
}
