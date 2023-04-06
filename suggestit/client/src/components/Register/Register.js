import { Form, Link, useNavigation } from 'react-router-dom';

export async function action({request}){
    const formData=await request.formData();
    const fname=formData.get('fname');
    const lname=formData.get('lname');
    const email=formData.get('email');
   const password= formData.get('pass');
   const repass=formData.get('repass');
   console.log(fname,lname,email, password,repass);
    return null;
}

export default function Register (){
    const navigation=useNavigation();

    return (
        // <!-- REGISTER -->
        <section className='register form-wrapper'>
            <h2>Register</h2>
            <Form
                action='/register'                
                method='post'
                id='reg-form'
                className='register form'               
            >
                <div className='wrap fname'>
                    <label htmlFor='fname' className='reg lbl fname'>
                        First Name
                    </label>
                    <input
                        type='text'
                        className='reg entry fname'
                        name='fname'
                        id='reg-fname'
                        minLength='3'
                        autoComplete='given-name'                    
                        required
                    />
                </div>
                <div className='wrap lname'>
                    <label htmlFor='lname' className='reg lbl lname'>
                        Last Name
                    </label>
                    <input
                        type='text'
                        className='reg entry lname'
                        name='lname'
                        id='reg-lname'
                        minLength='3'
                        autoComplete='family-name'                       
                        required
                    />
                </div>
                <div className='wrap email'>
                    <label htmlFor='email' className='reg lbl email'>
                        Email
                    </label>
                    <input
                        type='email'
                        className='reg entry email'
                        name='email'
                        id='reg-email'
                        autoComplete='email'                     
                        required
                    />
                </div>
                <div className='wrap pass'>
                    <label htmlFor='pass' className='reg lbl pass'>
                        Password
                    </label>
                    <input
                        type='password'
                        className='reg entry pass'
                        name='pass'
                        id='reg-pass'
                        minLength='6'
                        placeholder='6 characters minimum'
                        autoComplete='new-password'
                        required
                    />
                </div>
                <div className='wrap repass'>
                    <label htmlFor='repass' className='reg lbl repass'>
                        Confirm Password
                    </label>
                    <input
                        type='password'
                        className='reg entry repass'
                        name='repass'
                        id='reg-repass'
                        autoComplete='new-password'
                        required
                    />
                </div>

                {/* <input 
                type="checkbox" 
                id="isAccept" 
                checked={formData.isAccept}
                onChange={handleChange}
                name="isAccept"
            />
            <label htmlhtmlFor="isAccept">By ticking this you agree 
            to our <a className="terms">Terms and Contitions</>
            </label> */}

                <button
                    // type='submit'
                    // method='post'
                    // value='Register'
                    className='btn dark subm'
                    form='reg-form'
                    id='btn-reg-form'
                    disabled={navigation.state === 'submitting'}
                >
                    {navigation.state === 'submitting'
                        ? 'Registering ...'
                        : 'Register'}
                </button>

                <Link to='/login' className='login link'>
                    Already have an account? Login
                </Link>
            </Form>
            {/* END REGISTER  */}
        </section>
    );
};
