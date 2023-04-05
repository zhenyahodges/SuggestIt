import { Form, NavLink, Outlet } from 'react-router-dom';

export default function ProfileLayout() {
    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    };


    return (
        // <!-- PROFILE -->
        <section className='profile window container'>
            <h2>Profile</h2>

            <div className='profile-wrapper'>
                {/* <!-- ||PROF INFO --> */}
                <div className='profile-form-wrap'>
                    <Form
                        action='#'
                        method='get'
                        id='prof-form'
                        className='prof form'
                    >
                        <div className='wrap fname'>
                            <label
                                htmlFor='prof-fname'
                                className='prof lbl fname'
                            >
                                First Name
                            </label>
                            <input
                                type='text'
                                className='prof entry fname'
                                name='prof-fname'
                                id='prof-fname'
                                value='John'
                            />
                        </div>
                        <div className='wrap prof-lname'>
                            <label
                                htmlFor='prof-lname'
                                className='prof lbl lname'
                            >
                                Last Name
                            </label>
                            <input
                                type='text'
                                className='prof entry lname'
                                name='prof-lname'
                                id='prof-lname'
                                value='Johnson'
                            />
                        </div>
                        <div className='wrap email'>
                            <label
                                htmlFor='prof-email'
                                className='prof lbl email'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                className='prof entry email'
                                name='prof-email'
                                id='prof-email'
                                value='johnson@gmail.com'
                            />
                        </div>
                        {/* 
                        <!-- <div className="wrap pass">
                    <label htmlFor="pass" className="prof lbl pass"
                        >Password</label
                    >
                    <input
                        type="password"
                        className="prof entry pass"
                        name="prof-pass"
                        id="prof-pass"
                        minLength="6"
                        placeholder=" 6 characters minimum"
                        required
                    />
                </div> --> */}

                        {/* <!-- <div className="wrap repass">
                    <label htmlFor="repass" className="prof lbl repass"
                        >Confirm Password</label
                    >
                    <input
                        type="password"
                        className="prof entry repass"
                        name="prof-repass"
                        id="prof-repass"
                        required
                    />
                </div> --> */}

                        {/* <!-- <button
                    type="submit"
                    method="post"
                    value="Register"
                    className="prof btn dark subm"
                    form="prof-form"
                    id="btn-prof-form"
                    disabled
                >
                    Register
                </button> --> */}
                    </Form>
                    <nav className='prof-nav'>
                        <NavLink to='.' 
                        end 
                        className='btn dark show published'
                        style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Published
                        </NavLink>
                        <NavLink
                            to='create'
                            className='btn light show create'
                             style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Create
                        </NavLink>
                        <NavLink
                            to='suggest'
                            className='btn dark show suggested'
                             style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Suggested
                        </NavLink>
                    </nav>
                </div>

                {/* <!-- SECTION USER PROFILE INFO-CARDS --> */}
                <section className='user-profile-cards-wrapper'>
                    <Outlet />
                    {/* <!-- || sec USER-OWNER PUBLISHED polls --> */}
                    {/* <!-- || sec USER-OWNER CREATE polls --> */}
                    {/* <!-- || USER-OWNER SUGGESTIONS --> */}
                </section>
            </div>
        </section>
    );
}
