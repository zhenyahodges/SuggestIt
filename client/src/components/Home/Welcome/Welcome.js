export default function Welcome() {
    return (
        <section className='welcome-headings'>
            <h2 className='main-title'>
                {/* <!-- Ultimate Feedback --> */}
                Suggestions for Continuous Improvements
            </h2>
            <div className='sub-wrapper'>
                <h3 className='main-subtitle'>
                    An easy and efficient way to get direct feedback and ideas
                    for improvements from your customers and employees
                </h3>
                <p className='main-subtext'>
                    We offer a user-friendly interface for suggestions which
                    ranks them by popularity
                </p>
            </div>
            {/* {<button onClick={()=>navigate('login')} className='btn highlight login' id='login-btn'>
                    Login
                </button>} */}
        </section>
    );
}
