import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate=useNavigate();
 
    return (
        // <!-- WELCOME -->
        <section className='welcome window'>
            <section className='welcome-headings'>
                <h2 className='main-title'>
                    {/* <!-- Ultimate Feedback --> */}
                    Suggestions for Continuous Improvements
                </h2>
                <div className='sub-wrapper'>
                    <h3 className='main-subtitle'>
                        Do you want an easy and efficient way to get direct
                        feedback and ideas for imrovements from your customers
                        and employees?
                    </h3>
                    <p className='main-subtext'>
                        We offer a user-friendly interface for suggestions which
                        ranks them by popularity
                    </p>
                </div>
                <button onClick={()=>navigate('login')} className='btn highlight login' id='login-btn'>
                    Login
                </button>
            </section>

            {/* <!-- SAMPLE  --> */}
            <section className='sample content'>
                <h4 className='samples-title'>Sample</h4>

                <div className='samples wrapper'>
                    {/* <!-- CARD START --> */}
                    <article className='sugg-card sample'>
                        <header className='card-header  suggestit-brand'>
                            <h5 className='brand logo-line'>
                                Suggest<span className='suggest-it'>It</span>
                            </h5>
                        </header>

                        <main className='card-main'>
                            <ul className='sugg-list'>
                                {/* <!-- LIST items start --> */}

                                {/* <!-- li start --> */}
                                <li className='sugg-item'>
                                    <div className='sugg-item-wrapper'>
                                        <p className='sugg-text'>
                                            {/* <span className='author-nickname'>
                                                Me
                                            </span> */}
                                            Improve this project
                                        </p>

                                        <p className='sugg-ranking'>
                                            <span className='rank'>15</span>
                                            <span
                                               
                                                className='sugg-like-link'
                                               
                                            >
                                                <i className='like fa-solid fa-circle-up'></i>
                                            </span>
                                        </p>
                                    </div>
                                </li>
                                {/* <!-- li end --> */}

                                {/* <!-- li start --> */}
                                <li className='sugg-item'>
                                    <div className='sugg-item-wrapper'>
                                        <p className='sugg-text'>
                                            <span className='author-nickname'>
                                                Me
                                            </span>
                                            Add more features
                                        </p>
                                        <p className='sugg-ranking'>
                                            <span className='rank'>10</span>
                                            <span
                                              
                                                className='sugg-like-link'
                                            >
                                                <i className='like fa-solid fa-circle-up'></i>
                                            </span>
                                        </p>
                                    </div>
                                </li>
                                {/* <!-- li end --> */}

                                {/* <!-- li start --> */}
                                <li className='sugg-item'>
                                    <div className='sugg-item-wrapper'>
                                        <p className='sugg-text'>
                                            <span className='author-nickname'>
                                                Me
                                            </span>
                                            Add more pages
                                        </p>
                                        <p className='sugg-ranking'>
                                            <span className='rank'>5</span>
                                            <span
                                                href='/'
                                                className='sugg-like-link'
                                            >
                                                <i className='like fa-solid fa-circle-up'></i>
                                            </span>
                                        </p>
                                    </div>
                                </li>
                                {/* <!-- li end --> */}

                                {/* <!-- LISTitems --> */}
                            </ul>
                        </main>

                        <footer className='card-footer suggs-card foot'>
                            <div className='card-footer-content'>
                                <p className='card-footer-text'>
                                    Thank you for your contributions!
                                </p>
                                
                            </div>
                        </footer>
                    </article>
                    {/* <!-- CARD END --> */}
                </div>
            </section>

            <div className='more'>
                <button onClick={()=>navigate('cards')} className='btn dark catalog' id='catalog-btn'>
                    Catalog
                </button>
            </div>
        </section>
    );
};
