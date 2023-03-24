import { Link } from "react-router-dom"

export const Register=()=>{
    return(
        // <!-- REGISTER -->
        <section className="register form-wrapper">
            <h2>Register</h2>
            <form
                action="#"
                method="post"
                id="reg-form"
                className="register form"
            >
                <div className="wrap fname">
                    <label for="fname" className="reg lbl fname"
                        >First Name</label
                    >
                    <input
                        type="text"
                        className="reg entry fname"
                        name="fname"
                        id="reg-fname"
                        minlength="3"
                        autocomplete="given-name"
                        required
                    />
                </div>
                <div className="wrap lname">
                    <label for="lname" className="reg lbl lname"
                        >Last Name</label
                    >
                    <input
                        type="text"
                        className="reg entry lname"
                        name="lname"
                        id="reg-lname"
                        minlength="3"
                        autocomplete="family-name"
                        required
                    />
                </div>
                <div className="wrap email">
                    <label for="email" className="reg lbl email"
                        >Email</label
                    >
                    <input
                        type="email"
                        className="reg entry email"
                        name="email"
                        id="reg-email"
                        autocomplete="email"
                        required
                    />
                </div>
                <div className="wrap pass">
                    <label for="pass" className="reg lbl pass"
                        >Password</label
                    >
                    <input
                        type="password"
                        className="reg entry pass"
                        name="pass"
                        id="reg-pass"
                        minlength="6"
                        placeholder="6 characters minimum"
                        required
                    />
                </div>
                <div className="wrap repass">
                    <label for="repass" className="reg lbl repass"
                        >Confirm Password</label
                    >
                    <input
                        type="password"
                        className="reg entry repass"
                        name="repass"
                        id="reg-repass"
                        required
                    />
                </div>
                {/* <!-- <div className="wrap code">
                    <label for="" className="reg lbl code">Code</label>
                    <input type="text" className="reg entry code" name="reg entry code" id="reg-entry-code" />
                </div> --> */}

                <button
                    type="submit"
                    method="post"
                    value="Register"
                    className="btn dark subm"
                    form="reg-form"
                    id="btn-reg-form"
                    disabled
                >
                    Register
                </button>

                <Link to="/login" className="login link"
                    >Already have an account? Login</Link
                >
            </form>
        {/* END REGISTER  */}
        </section>
    );
};