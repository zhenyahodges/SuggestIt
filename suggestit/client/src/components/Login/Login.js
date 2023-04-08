import {
    Form,
    Link,
    redirect,
    useActionData,
    useLoaderData,
    useNavigation,
} from 'react-router-dom';
import { loginUser } from '../../utils/api';

export async function loader({ request }) {
    return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('pass');

    const pathname =
        new URL(request.url).searchParams.get('redirectTo') || '/login';

    try {
        const data = await loginUser({ email, password });
        const token = data.accessToken;

        if (token) {
            const user = {
                email: data.email,
                userId: data._id,
                token,
            };
            // console.log(user);
            // isAuthProfile = true;
            localStorage.setItem('user', JSON.stringify(user));
        }
        // return redirect(`/users/${data._id}`);
        return redirect(pathname);
        // return null;
    } catch (err) {
        return err.message;
    }
}

export default function Login() {
    const navigation = useNavigation();
    const message = useLoaderData();
    const errorMessage = useActionData();

    return (
        // <!-- LOGIN -->
        <section className='login form-wrapper'>
            <h2>Login</h2>
            {message && <h3 style={{ color: 'red' }}>{message}</h3>}
            {errorMessage && <h3 style={{ color: 'red' }}>{errorMessage}</h3>}
            <Form
                // action='/login'
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
                    {navigation.state === 'submitting' ? 'Logging...' : 'Login'}
                </button>
                <Link to='/register' className='login link'>
                    Don't have an account? Register
                </Link>
            </Form>
            {/* <!-- END LOGIN --> */}
        </section>
    );
}
