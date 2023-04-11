import { Form, redirect, useNavigate, useNavigation, useParams } from 'react-router-dom';
import { logoutUser } from '../../utils/api';
import { requireAuth } from '../../utils/requireAuth';
import { useState } from 'react';

export async function loader({ request }) {
    await requireAuth(request);
    return new URL(request.url).searchParams.get('message');
}
let pathname;

export async function action({ request }) { 
    // console.log('reeeeeeee'+request);
    pathname = new URL(request.url).searchParams.get('redirectTo') || '/cards';
    // console.log(pathname);
    return redirect(pathname);
}

export default function Logout() {
    const navigation = useNavigation();
    const navigate=useNavigate();

    const onLogout= async () =>{
        const { token } = JSON.parse(localStorage.getItem('user'));
        await logoutUser(token);
        // await requireAuth();
        // navigate(-1);
        navigate('/');
    };   

    const onStay=()=> {
        const { userId } = JSON.parse(localStorage.getItem('user'));
        return navigate(`/users/${userId}`);
    };

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
