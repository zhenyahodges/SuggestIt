import { NavLink, Outlet, redirect, useLoaderData } from 'react-router-dom';
// import { requireAuth } from '../../utils/requireAuth';

export async function loader() {
    // await requireAuth();
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user); 
    let token = '';
    if(!user){
        redirect('/login');
    }
    if (user) {
        token = user.token;
        if (!token) {
           throw redirect('/login');
        }
    }
    return user;
}

export default function ProfileLayout() {
   const user=useLoaderData();

    const activeStyles = {
        backgroundColor: '#F79234',
        color: '#132930',
        fontWeight: 'bold',
    };

    return (
        // <AuthContext.Provider value={userId}>
        //  <!-- PROFILE -->
        <section className='profile window container'>
            <h2>Profile</h2>

            <div className='profile-wrapper'>
                {/* <!-- ||PROF INFO --> */}
                <div className='profile-form-wrap'>
                    {/* <fetcher.Form
                        // action='/login'
                        method='get'
                        id='prof-form'
                        className='prof form'
                    > */}
                    {/* <div className='wrap fname'>
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
                                // value={user.}
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
                                // value='Johnson'
                            />
                        </div> */}
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
                                value={user.email}
                                readOnly                               
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
                    {/* </fetcher.Form> */}

                    <nav className='prof-nav'>
                        <NavLink
                            to='.'
                            end
                            className='btn dark show published'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                        >
                            Published
                        </NavLink>
                        <NavLink
                            to='suggested'
                            className='btn dark show suggested'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                        >
                            Suggested
                        </NavLink>
                        <NavLink
                            to='create'
                            className='btn light show create'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                        >
                            Create
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
        // </AuthContext.Provider>
    );
}
