import { Form, Link, NavLink, redirect, useNavigation } from 'react-router-dom';
import { loginUser } from '../../utils/api';


export async function action({ request }) {
    loginUser(request)
    // if(request)
    const formData = await request.formData();  
    const email = formData.get('email');
    const password = formData.get('pass');
    
    try {      
        const data = await loginUser({ email, password });
        const token = data.accessToken;       

        if (token) {
            const user={
                email: data.email,
                userId: data._id,
                token,            
            };
            // console.log(user);
            // isAuthProfile = true;
            localStorage.setItem('user', JSON.stringify(user));
        }
        return redirect(`/users/${data._id}`);
        // return null;
    } catch (err) {
        return err.message;
    }
}


export default function Logout() {
    const navigation = useNavigation();

    return (
        // <!-- LOGOUT -->
        <section className='login logout form-wrapper'>
            <h2>Logout</h2>
            <Form
                // action='/login'
                method='get'
                id='logout-form'
                className='logout login form'
            >
                <div className='logout-wrap wrap email'>
                    <label htmlFor='confirm' className='logout-text log lbl email'>
                        Are you sure you want to logout?
                    </label>               
                </div>              
                <div className='logout-btn-container'>
                <button
                    // type='submit'
                    method='get'
                    // value='Logout'
                    className='logout log btn dark subm'
                    form='logout-form'
                    id='btn-log-form'
                    disabled={navigation.state === 'submitting'}
                >
                    {navigation.state === 'submitting' ? 'Logging Out...' : 'Yes'}
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
                    {navigation.state === 'submitting' ? 'Redirecting...' : 'No'}
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
