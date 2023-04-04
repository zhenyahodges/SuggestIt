// import { useState } from 'react';
import { Form, Link,redirect,
    useActionData,
    useNavigation,
    useLoaderData, } from 'react-router-dom';
// import useForm from '../../hooks/useForm';

// export const Login = ({
    
// }) => {
//     const {data,handleChange,handleSubmit} = useForm ({
//         email: '',
//         password: ''
//     },);
export default function Login(){
    
    return (
        // <!-- LOGIN -->
        <section className='login form-wrapper'>
            <h2>Login</h2>
            <Form
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
                        // value={data.email}
                        // onChange={handleChange}
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
                        // value={data.password}
                        // onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type='submit'
                    method='get'
                    value='Login'
                    className='log btn dark subm'
                    form='log-form'
                    id='btn-log-form'
                    disabled
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
