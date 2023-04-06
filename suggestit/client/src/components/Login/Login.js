import {
    Form,
    Link,
    redirect,
    useNavigation,
} from 'react-router-dom';
import { loginUser } from '../../utils/api';

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('pass');
    
    try{
    const data = await loginUser({ email, password });
    //    console.log(data);
    // localStorage.setItem('loggedin', true);
    return redirect(`/users/${data._id}`);
    // return null;
    }catch(err){
        return err.message;
    }
}

// {
//     "email":"peter@abv.bg",
//     "_id":"35c62d76-8152-4626-8712-eeb96381bea8",
//     "accessToken":"63f6a769a2d17e76583a48dabafe23e3429a54e0345e9322b2f952bdf6a46599"
// }

export default function Login() {
    const navigation = useNavigation();

    return (
        // <!-- LOGIN -->
        <section className='login form-wrapper'>
            <h2>Login</h2>
            <Form
                action='/login'
                method='post'
                id='log-form'
                className='login form'
            >
                <div className='wrap email'>
                    <label htmlFor='email' className='log lbl email'>
                        Email
                    </label>
                    <input
                        type='email'
                        className='log entry email'
                        name='email'
                        id='log-email'
                        autoComplete='email'
                        required
                    />
                </div>
                <div className='wrap pass'>
                    <label htmlFor='pass' className='log lbl pass'>
                        Password
                    </label>
                    <input
                        type='password'
                        className='log entry pass'
                        name='pass'
                        id='log-pass'
                        autoComplete='current-password'
                        minLength='6'
                        placeholder='6 characters minimum'
                        required
                    />
                </div>
                <button
                    // type='submit'
                    // method='post'
                    // value='Login'
                    className='log btn dark subm'
                    form='log-form'
                    id='btn-log-form'
                    disabled={navigation.state === 'submitting'}
                >
                    {navigation.state === 'submitting'
                        ? 'Logging...'
                        : 'Login'}
                </button>
                <Link to='/register' className='login link'>
                    Don't have an account? Register
                </Link>
            </Form>
            {/* <!-- END LOGIN --> */}
        </section>
    );
}
