export default function CatalogItem(){
    return(
        <article className="sugg-card catalog all">
        <header
            className="card-header  suggestit-brand"
        >
            <h5 className="brand logo-line">
                Suggest<span className="suggest-it">It</span>
            </h5>
        </header>

        <main className="card-main">
            <ul className="sugg-list" role="list">
                {/* LIST items start  */}

                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            Improve this project
                        </p>

                        <p className="sugg-ranking">
                            <span className="rank">15</span>
                            <a className="sugg-like-link" href="/">
                                <i
                                    className="like fa-solid fa-circle-up"
                                ></i>
                            </a>
                        </p>
                    </div>
                </li>
                {/* li end  */}

                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            Add more features
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">10</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}

                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            Add more pages
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}

                 {/* LISTitems  */}
            </ul>
        </main>

        <footer className="card-footer suggs-card foot">
            <div className="card-footer-content">
                <p className="card-footer-text">
                    Thank you for your contributions!
                </p>
                <div className="card-footer-links-wrapper">
                    <Link to="/details" className="details-link"
                        >Details</Link
                    >
                    <Link to="/addSuggestion" className="add-sugg-link"
                        >Suggest</Link
                    >
                </div>
            </div>
        </footer>
    </article>

    <article className="sugg-card catalog">
        <header
            className="card-header  suggestit-brand"
        >
            <h5 className="brand">Your Brand</h5>
        </header>

        <main className="card-main">
            <ul className="sugg-list" role="list">
                {/* LIST items start  */}

                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            Suggestion for you
                        </p>

                        <p className="sugg-ranking">
                            <span className="rank">15</span>
                            <a className="sugg-like-link" href="/">
                                <i
                                    className="like fa-solid fa-circle-up"
                                ></i>
                            </a>
                        </p>
                    </div>
                </li>
                {/* li end  */}

                {/* li start   */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            Another suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">10</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}

                {/* ADDITONAL  */}
                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            One more suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}
                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            One more suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}
                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            One more suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}

                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            One more suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}
                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            One more suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}
                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            One more suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}
                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            One more suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}
                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            One more suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}
                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            One more suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}
                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            One more suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}
                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            One more suggestion for you
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">5</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}
                {/* li start  */}
                <li className="sugg-item">
                    <div className="sugg-item-wrapper">
                        <p className="sugg-text">
                            <span className="author-nickname">
                                Me
                            </span>
                            Last suggestion
                        </p>
                        <p className="sugg-ranking">
                            <span className="rank">0</span
                            ><a className="sugg-like-link" href="/"
                                ><i
                                    className="like fa-solid fa-circle-up"
                                ></i
                            ></a>
                        </p>
                    </div>
                </li>
                {/* li end  */}

                 {/* LISTitems  */}
            </ul>
        </main>
        <footer className="card-footer suggs-card foot">
            <div className="card-footer-content">
                <p className="card-footer-text">
                    Thank you for your contributions!
                </p>
                <div className="card-footer-links-wrapper">
                    <a href="/" className="details-link"
                        >Details</a
                    >
                    <a href="/" className="add-sugg-link"
                        >Suggest</a
                    >
                </div>
            </div>
        </footer>
    </article> 
    )
}