import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import RenderNavLink from '../Buttons/RenderNavLink/RenderNavLink';

export default function Header({ props }) {
    const { currentUser } = useCurrentUser();

    const userId = props;
    const isGuest = currentUser === 'Guest';

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
                            <RenderNavLink
                                to={'.'}
                                className={'home'}
                                id={'home'}
                                text={'Home'}
                            />
                            <RenderNavLink
                                to={'cards'}
                                className={'cat'}
                                id={'cat'}
                                text={'Catalog'}
                            />
                            <RenderNavLink
                                to={'infos'}
                                className={'cat'}
                                id={'info'}
                                text={'Infos Catalog'}
                            />

                            {isGuest && (
                                <RenderNavLink
                                    to={'login'}
                                    className={'log'}
                                    id={'log'}
                                    text={'Login'}
                                />
                            )}

                            {!isGuest && (
                                <RenderNavLink
                                    to={'logout'}
                                    className={'logout'}
                                    id={'logout'}
                                    text={'Logout'}
                                />
                            )}

                            {isGuest && (
                                <RenderNavLink
                                    to={'register'}
                                    className={'reg'}
                                    id={'reg'}
                                    text={'Register'}
                                />
                            )}
                            {!isGuest && (
                                <RenderNavLink
                                    to={`users/${userId}`}
                                    className={'prof'}
                                    id={'prof'}
                                    text={'Profile'}
                                />
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
