import { Form, Navigate, redirect, useNavigation } from 'react-router-dom';
import { logoutUser } from '../../utils/api';
import { requireAuth } from '../../utils/requireAuth';

// async function onLogout() {
//     const { userId, token } = await requireAuth();
//     try {
//         if (token) {
//             await logoutUser(token, userId);
//             // localStorage.clear();
//             return redirect('login');
//         } else {
//             redirect('login');
//         }
//     } catch (err) {
//         return err.message;
//     }
// }
// const isLoggedOut=false;
async function onLogout(){    
    const { userId, token } = await requireAuth();

    const creds={userId};
    const res=await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        }
    });
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {       
        return null;
    }

    localStorage.clear();
  
    return requireAuth();
    // return null;
}

export default function Logout() {
    const navigation = useNavigation();
    
    return (
        // <!-- LOGOUT -->
        <section className='login logout form-wrapper'>
            <h2>Logout</h2>
            <Form
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
