import { requireAuth } from '../../utils/requireAuth';

export async function loader(){
    const {userId,token}=await requireAuth();
    return null;
}


export default function userCards() {
 

    return (
        //  {/* <!-- || sec USER-OWNER PUBLISHED polls --> */}
        <section className='user published'>
            <h2 className='user-title'>Published</h2>

            <div className='user-article-wrapper'>
                {/* <!-- 1st card --> */}
                <article className='sugg-card catalog private'>
                    <header className='card-header  suggestit-brand'>
                        <h5 className='brand'>Your Brand</h5>
                    </header>

                    <main className='card-main'>
                        <ul className='sugg-list'>
                            {/* <!-- LIST items start --> */}

                            {/* <!-- li start --> */}
                            <li className='sugg-item'>
                                <div className='sugg-item-wrapper'>
                                    <p className='sugg-text'>
                                        <span className='author-nickname'>
                                            Me
                                        </span>
                                        Suggestion for you
                                    </p>

                                    <p className='sugg-ranking'>
                                        <span className='rank'>15</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
                                    </p>
                                </div>
                            </li>
                            {/* <!-- li end --> */}

                            {/* <!-- li start  --> */}
                            <li className='sugg-item'>
                                <div className='sugg-item-wrapper'>
                                    <p className='sugg-text'>
                                        <span className='author-nickname'>
                                            Me
                                        </span>
                                        Another suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>10</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
                                    </p>
                                </div>
                            </li>
                            {/* <!-- li end --> */}

                            {/* <!-- ADDITONAL --> */}
                            {/* <!-- li start --> */}
                            <li className='sugg-item'>
                                <div className='sugg-item-wrapper'>
                                    <p className='sugg-text'>
                                        <span className='author-nickname'>
                                            Me
                                        </span>
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        Last suggestion
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>0</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                            <div className='card-footer-links-wrapper'>
                                <a href='/' className='details-link'>
                                    Details
                                </a>
                                <a href='/' className='add-sugg-link'>
                                    Suggest
                                </a>
                            </div>
                        </div>
                    </footer>
                </article>

                {/* <!-- 2nd card --> */}
                <article className='sugg-card catalog private'>
                    <header className='card-header  suggestit-brand'>
                        <h5 className='brand'>Your Brand</h5>
                    </header>

                    <main className='card-main'>
                        <ul className='sugg-list'>
                            {/* <!-- LIST items start --> */}

                            {/* <!-- li start --> */}
                            <li className='sugg-item'>
                                <div className='sugg-item-wrapper'>
                                    <p className='sugg-text'>
                                        <span className='author-nickname'>
                                            Me
                                        </span>
                                        Suggestion for you
                                    </p>

                                    <p className='sugg-ranking'>
                                        <span className='rank'>15</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
                                    </p>
                                </div>
                            </li>
                            {/* <!-- li end --> */}

                            {/* <!-- li start  --> */}
                            <li className='sugg-item'>
                                <div className='sugg-item-wrapper'>
                                    <p className='sugg-text'>
                                        <span className='author-nickname'>
                                            Me
                                        </span>
                                        Another suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>10</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
                                    </p>
                                </div>
                            </li>
                            {/* <!-- li end --> */}

                            {/* <!-- ADDITONAL --> */}
                            {/* <!-- li start --> */}
                            <li className='sugg-item'>
                                <div className='sugg-item-wrapper'>
                                    <p className='sugg-text'>
                                        <span className='author-nickname'>
                                            Me
                                        </span>
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        Last suggestion
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>0</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                            <div className='card-footer-links-wrapper'>
                                <a href='/' className='details-link'>
                                    Details
                                </a>
                                <a href='/' className='add-sugg-link'>
                                    Suggest
                                </a>
                            </div>
                        </div>
                    </footer>
                </article>

                {/* <!-- 3rd card --> */}
                <article className='sugg-card catalog private'>
                    <header className='card-header  suggestit-brand'>
                        <h5 className='brand'>Your Brand</h5>
                    </header>

                    <main className='card-main'>
                        <ul className='sugg-list'>
                            {/* <!-- LIST items start --> */}

                            {/* <!-- li start --> */}
                            <li className='sugg-item'>
                                <div className='sugg-item-wrapper'>
                                    <p className='sugg-text'>
                                        <span className='author-nickname'>
                                            Me
                                        </span>
                                        Suggestion for you
                                    </p>

                                    <p className='sugg-ranking'>
                                        <span className='rank'>15</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
                                    </p>
                                </div>
                            </li>
                            {/* <!-- li end --> */}

                            {/* <!-- li start  --> */}
                            <li className='sugg-item'>
                                <div className='sugg-item-wrapper'>
                                    <p className='sugg-text'>
                                        <span className='author-nickname'>
                                            Me
                                        </span>
                                        Another suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>10</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
                                    </p>
                                </div>
                            </li>
                            {/* <!-- li end --> */}

                            {/* <!-- ADDITONAL --> */}
                            {/* <!-- li start --> */}
                            <li className='sugg-item'>
                                <div className='sugg-item-wrapper'>
                                    <p className='sugg-text'>
                                        <span className='author-nickname'>
                                            Me
                                        </span>
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        One more suggestion for you
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>5</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                                        Last suggestion
                                    </p>
                                    <p className='sugg-ranking'>
                                        <span className='rank'>0</span>
                                        <a className='sugg-like-link' href='/'>
                                            <i className='like fa-solid fa-circle-up'></i>
                                        </a>
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
                            <div className='card-footer-links-wrapper'>
                                <a href='/' className='details-link'>
                                    Details
                                </a>
                                <a href='/' className='add-sugg-link'>
                                    Suggest
                                </a>
                            </div>
                        </div>
                    </footer>
                </article>
            </div>
        </section>
    );
}
