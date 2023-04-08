import { Form, redirect, useNavigation } from 'react-router-dom';
import { logoutUser } from '../../utils/api';
import { requireAuth } from '../../utils/requireAuth';

export async function loader({ request }) {
    await requireAuth(request);
    return new URL(request.url).searchParams.get('message');
}

let pathname;

export async function action({ request }) {
    // const formData = await request.formData();
    // console.log(formData);
    // const { userId }=JSON.parse(localStorage.getItem('user'));
    pathname = new URL(request.url).searchParams.get('redirectTo') || '/cards';
    console.log(pathname);
    // console.log(pathname);
    return redirect(pathname);
}

async function onLogout() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    // console.log(token);

    const res = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        localStorage.clear();
    
        return (window.location.href = '/');
        // return redirect('.');
    }
   
    // return redirect((window.location.href = '/'));
    return redirect('/jsonstore/cards');
    // return null;
    // throw redirect('/');
}

function onStay() {
    const { userId } = JSON.parse(localStorage.getItem('user'));
    return (window.location.href = `/users/${userId}`);
}

export default function Logout() {
    const navigation = useNavigation();

    return (
        // <!-- LOGOUT -->
        <section className='login logout form-wrapper'>
            <h2>Logout</h2>
            <Form
                replace
                // action='/login'
                // method='get'
                id='logout-form'
                className='logout login form'
            >
                <div className='logout-wrap wrap email'>
                    <label
                        htmlFor='confirm'
                        className='logout-text log lbl email'
                    >
                        Are you sure you want to logout?
                    </label>
                </div>
                <div className='logout-btn-container'>
                    <button
                        // type='submit'
                        method='get'
                        onClick={onLogout}
                        // value='Logout'
                        className='logout log btn dark subm'
                        form='logout-form'
                        id='btn-log-form'
                        disabled={navigation.state === 'submitting'}
                    >
                        {navigation.state === 'submitting'
                            ? 'Logging Out...'
                            : 'Yes'}
                    </button>
                    <button
                        type='submit'
                        method='post'
                        //    to='profile'
                        // value='Login'
                        className='logout log btn dark subm'
                        form='log-form'
                        id='btn-log-form'
                        onClick={onStay}
                        disabled={navigation.state === 'submitting'}
                    >
                        {navigation.state === 'submitting'
                            ? 'Redirecting...'
                            : 'No'}
                    </button>
                </div>
                {/* <Link to='/register' className='login link'>
                    Don't have an account? Register
                </Link> */}
            </Form>
            {/* <!-- END LOGOUT --> */}
        </section>
    );
}
