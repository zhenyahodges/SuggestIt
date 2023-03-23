export const Header = () => {
    return (
        // <!-- || HEADER -->
        <header className='page header'>
            <section className='header container special-border'>
                <div className='header-wrapper'>
                    <h1 className='title-header'>
                        Suggest<span className='suggest-it'>It</span>
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
                        <a
                            href='/'
                            className='nav header list links home'
                            id='nav-head-home-link'
                        >
                            Home
                        </a>
                        <a
                            href='/'
                            className='nav header list links cat'
                            id='nav-head-cat-link'
                        >
                            Catalog
                        </a>
                        <a
                            href='/'
                            className='nav header list links log'
                            id='nav-head-log-link'
                        >
                            Login
                        </a>
                        <a
                            href='/'
                            className='nav header list links reg'
                            id='nav-head-reg-link'
                        >
                            Register
                        </a>
                        {/* <!-- <a href="/about" className="nav header list links">About</a> --> */}
                        {/* <!-- <a href="/contact" className="nav header list links">Contact</a> --> */}
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
