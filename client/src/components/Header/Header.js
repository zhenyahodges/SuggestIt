import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import RenderNavLink from '../Buttons/RenderNavLink/RenderNavLink';

export default function Header({ userId }) {
    const { currentUser } = useCurrentUser();
    const isGuest = currentUser === 'Guest';

    const navLinksData = [
        { to: '.', className: 'home', id: 'home', text: 'Home' },
        { to: 'cards', className: 'cat', id: 'cat', text: 'Catalog' },
        { to: 'infos', className: 'cat', id: 'info', text: 'Infos Catalog' },
        {
            to: 'login',
            className: 'log',
            id: 'log',
            text: 'Login',
            condition: isGuest,
        },
        {
            to: 'logout',
            className: 'logout',
            id: 'logout',
            text: 'Logout',
            condition: !isGuest,
        },
        {
            to: 'register',
            className: 'reg',
            id: 'reg',
            text: 'Register',
            condition: isGuest,
        },
        {
            to: `users/${userId}`,
            className: 'prof',
            id: 'prof',
            text: 'Profile',
            condition: !isGuest,
        },
    ];

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
                            {navLinksData.map(
                                ({ to, className, id, text, condition }) =>
                                    condition !== false && (
                                        <RenderNavLink
                                            key={id}
                                            to={to}
                                            className={className}
                                            id={id}
                                            text={text}
                                        />
                                    )
                            )}
                           
                            {/* <!-- <a to="/about" className="nav header list links">About</a> --> */}
                            {/* <!-- <a to="/contact" className="nav header list links">Contact</a> --> */}
                            <span
                                className='whos-lookin-wrapper whos-lookin'
                                id='whos-lookin'
                                data-testid='user'
                            >
                                {currentUser}
                            </span>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    );
}
