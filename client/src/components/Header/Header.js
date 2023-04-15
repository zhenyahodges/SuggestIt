import { NavLink, useLoaderData, useNavigation } from 'react-router-dom';
import { useWhoIsLooking } from '../../context/CurrentUserContext';
import { useLogged } from '../../context/LoggedContext';
import { requireAuth } from '../../utils/requireAuth';
import { useEffect } from 'react';
import { getUserInfo } from '../../utils/service';

// // let currUserId='';
// export async function loader({ request }) {
//     const { userId, token } = await requireAuth(request);
//     console.log(userId,token);
//     // currUserId=userId;
//     const res = await getUserInfo(token);
//     console.log('RES3333'+res);
//     if (res) {
//         return res;
//     } else {
//         return null;
//     }
// }

export const Header = (props) => {
    const navigation = useNavigation();
    const { whoIsLooking } = useWhoIsLooking();
    const { isLogged, setIsLogged } = useLogged();
    // const result=useLoaderData();
    // console.log('RESULT###'+result)

    useEffect(() => {
        whoIsLooking !== 'Guest' && setIsLogged(true);
        // },[setIsLogged, setWhoIsLooking, whoIsLooking]);
    }, []);

    console.log('LOGGED' + isLogged);
    console.log('USSSEEEE' + whoIsLooking);

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
                            to={`users/${props.userId}`}
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
                        {whoIsLooking}
                    </p>
                </div>
            </section>
        </header>
    );
};
