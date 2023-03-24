import { Link } from 'react-router-dom';

export const Login=()=>{
    return(
        // <!-- LOGIN -->
        <section className="login form-wrapper">
            <h2>Login</h2>
            <form
                action="#"
                method="get"
                id="log-form"
                className="login form"
            >
                <div className="wrap email">
                    <label for="email" className="log lbl email"
                        >Email</label
                    >
                    <input
                        type="email"
                        className="log entry email"
                        name="email"
                        id="log-email"
                        autocomplete="email"
                        required
                    />
                </div>
                <div className="wrap pass">
                    <label for="pass" className="log lbl pass"
                        >Password</label
                    >
                    <input
                        type="password"
                        className="log entry pass"
                        name="pass"
                        id="log-pass"
                        autocomplete="current-password"
                        minlength="6"
                        placeholder="6 characters minimum"
                        required
                    />
                </div>
                <button
                    type="submit"
                    method="get"
                    value="Login"
                    className="log btn dark subm"
                    form="log-form"
                    id="btn-log-form"
                    disabled
                >
                    Login
                </button>
                <Link to="/register" className="login link"
                    >Don't have an account? Register</Link
                >
            </form>
        {/* <!-- END LOGIN --> */}
        </section>
    );
};