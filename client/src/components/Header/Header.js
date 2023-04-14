import { useContext, useEffect } from 'react';
import { NavLink, useNavigation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const Header = (props) => {
    const navigation = useNavigation();

    console.log(props);
    const [result] = Object.values(props);
    console.log(result);
    const { whoIsLookin, isLogged, userId } = result;
    //     const{isLogged,setIsLogged}=useAuth();
    // useEffect(()=>{
    //     isLoggedIn?setIsLogged(true): setIsLogged(false);
    // },[setIsLogged]);

    const activeStyles = {
        backgroundColor: '#F79234',
        borderRadius: '5px',
        textShadow: '1px 1px 1px #132930',
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

                        {/* visible when not logged in */}
                        {!isLogged && (
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

                        {/* LOGOUT visible when looged in only */}
                        {isLogged && (
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

                        {/* visible when not logged in */}
                        {!isLogged && (
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
                        {isLogged && (
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
                        {whoIsLookin}
                    </p>
                </div>
            </section>
        </header>
    );
};
