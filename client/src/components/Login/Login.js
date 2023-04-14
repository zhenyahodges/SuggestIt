import {
    Form,
    Link,
    redirect,
    useActionData,
    useLoaderData,
    useNavigation,
    useParams,
} from 'react-router-dom';
import { loginUser } from '../../utils/service';
import { requireAuth } from '../../utils/requireAuth';

export async function loader({ request }) {
    // await requireAuth();
    return new URL(request.url).searchParams.get('message');
}

export async function action({ request,params }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('pass'); 
console.log('parsms==='+params);
console.log(request.url);

    // const myNewUrl=(request.url.split('/login')[0]);

    let pathname =
        new URL(request.url).searchParams.get('redirectTo') || '.';
        // new URL(request.url).searchParams.get('redirectTo') || '/cards';

    try {
        const data = await loginUser({ email, password });
        const token = data.accessToken;

        if (token) {
            const user = {
                email: data.email,
                userId: data._id,
                token,
            };
            localStorage.setItem('user', JSON.stringify(user));            
            // return redirect(`${myNewUrl}/users/${user.userId}`);
            // return localStorage.setItem('user', JSON.stringify(user)); 
        return redirect('/');

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
        <section className='login form-wrapper'>
            <h2>Login</h2>
            {message && <h3 style={{ color: 'red' }}>{message}</h3>}
            {errorMessage && <h3 style={{ color: 'red' }}>{errorMessage}</h3>}
            <Form   
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
                        minLength='3'
                        maxlength='64'
                        autoComplete='email'
                        pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
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
                        maxlength='64'
                        placeholder='6 characters minimum'
                        required
                    />
                </div>
                <button
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
        </section>
    );
}
