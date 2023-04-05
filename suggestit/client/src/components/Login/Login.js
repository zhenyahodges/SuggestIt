// import { useState } from 'react';
// import { useState } from 'react';
import { Form, Link,redirect,
    useActionData,
    useNavigation,
    useLoaderData,
    useNavigate, } from 'react-router-dom';
// import useForm from '../../hooks/useForm';

// export const Login = ({
    
// }) => {
//     const {data,handleChange,handleSubmit} = useForm ({
//         email: '',
//         password: ''
//     },);

export async function action({request}){
    const formData=await request.formData();
    const email=formData.get('email');
   const password= formData.get('pass');
   console.log(email, password);
    return null;
}

export default function Login(){
    // const [loginFormData,setLoginFormData] = useState();
    const navigate=useNavigate();
    
    return (
        // <!-- LOGIN -->
        <section className='login form-wrapper'>
            <h2>Login</h2>
            <Form
                action='/login'
                method='post'
                id='log-form'
                className='login form'                
                // onSubmit={handleSubmit}
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
                    // disabled
                >
                    Login
                </button>
                <Link to='/register' className='login link'>
                    Don't have an account? Register
                </Link>
            </Form>
            {/* <!-- END LOGIN --> */}
        </section>
    );
};
