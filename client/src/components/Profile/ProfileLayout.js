import {
    Form,
    NavLink,
    Outlet,
    redirect,
    useLoaderData,
    useNavigation,
} from 'react-router-dom';
import { requireAuth } from '../../utils/requireAuth';
import { getUserInfo } from '../../utils/service';

export async function loader({ request, params }) {
    const { userId, token } = await requireAuth(request);
    const res = await getUserInfo(token);
    const { fname, lname, email } = res;
    const user = { fname, lname, email, userId };
    const pathname = new URL(request.url).searchParams.get('message');

    if (!userId) {
        return redirect(pathname);
    }

    if (!token) {
        return redirect(pathname);
    }

    redirect(request.url);

    return user;
}

export default function ProfileLayout() {
    const user = useLoaderData();
    const navigation = useNavigation();

    const activeStyles = {
        backgroundColor: '#F79234',
        color: '#132930',
        fontWeight: 'bold',
    };

    return (
        <section className='profile window container'>
            <h2>Profile</h2>

            <div className='profile-wrapper'>
                <div className='profile-form-wrap'>
                    <Form method='get' id='prof-form' className='prof form'>
                        <div className='user-details'>
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
                                    value={user.fname}
                                    readOnly
                                    disabled
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
                                    value={user.lname}
                                    readOnly
                                    disabled
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
                                    value={user.email}
                                    readOnly
                                    disabled
                                />
                            </div>
                        </div>
                    </Form>

                    <nav className='prof-nav'>
                        <NavLink
                            to='.'
                            end
                            className='btn dark show published'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'Published'}
                        </NavLink>
                        <NavLink
                            to='suggested'
                            className='btn dark show suggested'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'Suggested'}
                        </NavLink>
                        {/* <NavLink
                            to=''
                            className='btn dark show suggested'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'Published Infos'}
                        </NavLink> */}
                        <NavLink
                            to='create'
                            className='btn light show create'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'Create'}
                        </NavLink>
                        <NavLink
                            to='createinfo'
                            className='btn light show create'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'Post Info'}
                        </NavLink>
                    </nav>
                </div>

                <section className='user-profile-cards-wrapper'>
                    <Outlet context={{ user }} />
                </section>
            </div>
        </section>
    );
}
