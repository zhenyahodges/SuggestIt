import { Loader } from "../Loader/Loader"

export const Profile=()=>{
    return(
        
        // <!-- PROFILE -->
        <section className="profile window container">
            <h2>Profile</h2>                    

            <div className="profile-wrapper">
                {/* <!-- ||PROF INFO --> */}
                <div className="profile-form-wrap">
                    <form
                        action="#"
                        method="post"
                        id="prof-form"
                        className="prof form"
                    >
                        <div className="wrap fname">
                            <label
                                for="prof-fname"
                                className="prof lbl fname"
                                >First Name</label
                            >
                            <input
                                type="text"
                                className="prof entry fname"
                                name="prof-fname"
                                id="prof-fname"
                                value="John"
                            />
                        </div>
                        <div className="wrap prof-lname">
                            <label
                                for="prof-lname"
                                className="prof lbl lname"
                                >Last Name</label
                            >
                            <input
                                type="text"
                                className="prof entry lname"
                                name="prof-lname"
                                id="prof-lname"
                                value="Johnson"
                            />
                        </div>
                        <div className="wrap email">
                            <label
                                for="prof-email"
                                className="prof lbl email"
                                >Email</label
                            >
                            <input
                                type="email"
                                className="prof entry email"
                                name="prof-email"
                                id="prof-email"
                                value="johnson@gmail.com"
                            />
                        </div>
{/* 
                        <!-- <div className="wrap pass">
                    <label for="pass" className="prof lbl pass"
                        >Password</label
                    >
                    <input
                        type="password"
                        className="prof entry pass"
                        name="prof-pass"
                        id="prof-pass"
                        minlength="6"
                        placeholder=" 6 characters minimum"
                        required
                    />
                </div> --> */}

                        {/* <!-- <div className="wrap repass">
                    <label for="repass" className="prof lbl repass"
                        >Confirm Password</label
                    >
                    <input
                        type="password"
                        className="prof entry repass"
                        name="prof-repass"
                        id="prof-repass"
                        required
                    />
                </div> --> */}

                        {/* <!-- <button
                    type="submit"
                    method="post"
                    value="Register"
                    className="prof btn dark subm"
                    form="prof-form"
                    id="btn-prof-form"
                    disabled
                >
                    Register
                </button> --> */}
                    </form>
                    <button className="btn dark show published">
                        Published
                    </button>
                    <button className="btn light show create">
                        Create
                    </button>
                    <button className="btn dark show suggested">
                        Suggested
                    </button>
                </div>

                {/* <!-- SECTION USER PROFILE INFO-CARDS --> */}
                <section className="user-profile-cards-wrapper">
                    {/* <!-- || sec USER-OWNER PUBLISHED polls --> */}
                    <section className="user published">
                        <h2 className="user-title">Published</h2>

                        {/* <!-- LOADER show when fetching --> */}
                         {/* <Loader/> */}

                        <div className="user-article-wrapper">
                            {/* <!-- 1st card --> */}
                            <article className="sugg-card catalog private">
                                <header
                                    className="card-header card-brand-logo suggestit-brand"
                                >
                                    <h5 className="brand logo-line">
                                        Your Brand
                                    </h5>
                                </header>

                                <main className="card-main">
                                    <ul className="sugg-list" role="list">
                                        {/* <!-- LIST items start --> */}

                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    Suggestion for you
                                                </p>

                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >15</span
                                                    >
                                                    <a
                                                        className="sugg-like-link"
                                                    >
                                                        <i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                        {/* <!-- li start  --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    Another suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >10</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                        {/* <!-- ADDITONAL --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    Last suggestion
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >0</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                         {/* <!-- LISTitems --> */}
                                    </ul>
                                </main>
                                <footer
                                    className="card-footer suggs-card foot"
                                >
                                    <div className="card-footer-content">
                                        <p className="card-footer-text">
                                            Thank you for your
                                            contributions!
                                        </p>
                                        <div
                                            className="card-footer-links-wrapper"
                                        >
                                            <a
                                                href="#"
                                                className="details-link"
                                                >Details</a
                                            >
                                            <a
                                                href="#"
                                                className="add-sugg-link"
                                                >Suggest</a
                                            >
                                        </div>
                                    </div>
                                </footer>
                            </article>

                            {/* <!-- 2nd card --> */}
                            <article className="sugg-card catalog private">
                                <header
                                    className="card-header card-brand-logo suggestit-brand"
                                >
                                    <h5 className="brand logo-line">
                                        Your Brand
                                    </h5>
                                </header>

                                <main className="card-main">
                                    <ul className="sugg-list" role="list">
                                        {/* <!-- LIST items start --> */}

                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    Suggestion for you
                                                </p>

                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >15</span
                                                    >
                                                    <a
                                                        className="sugg-like-link"
                                                    >
                                                        <i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                        {/* <!-- li start  --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    Another suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >10</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                        {/* <!-- ADDITONAL --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    Last suggestion
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >0</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                         {/* <!-- LISTitems --> */}
                                    </ul>
                                </main>
                                <footer
                                    className="card-footer suggs-card foot"
                                >
                                    <div className="card-footer-content">
                                        <p className="card-footer-text">
                                            Thank you for your
                                            contributions!
                                        </p>
                                        <div
                                            className="card-footer-links-wrapper"
                                        >
                                            <a
                                                href="#"
                                                className="details-link"
                                                >Details</a
                                            >
                                            <a
                                                href="#"
                                                className="add-sugg-link"
                                                >Suggest</a
                                            >
                                        </div>
                                    </div>
                                </footer>
                            </article>

                            {/* <!-- 3rd card --> */}
                            <article className="sugg-card catalog private">
                                <header
                                    className="card-header card-brand-logo suggestit-brand"
                                >
                                    <h5 className="brand logo-line">
                                        Your Brand
                                    </h5>
                                </header>

                                <main className="card-main">
                                    <ul className="sugg-list" role="list">
                                        {/* <!-- LIST items start --> */}

                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    Suggestion for you
                                                </p>

                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >15</span
                                                    >
                                                    <a
                                                        className="sugg-like-link"
                                                    >
                                                        <i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                        {/* <!-- li start  --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    Another suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >10</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                        {/* <!-- ADDITONAL --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    One more suggestion
                                                    for you
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >5</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- li start --> */}
                                        <li className="sugg-item">
                                            <div
                                                className="sugg-item-wrapper"
                                            >
                                                <p className="sugg-text">
                                                    <span
                                                        className="author-nickname"
                                                    >
                                                        Me
                                                    </span>
                                                    Last suggestion
                                                </p>
                                                <p className="sugg-ranking">
                                                    <span className="rank"
                                                        >0</span
                                                    ><a
                                                        className="sugg-like-link"
                                                        ><i
                                                            className="like fa-solid fa-circle-up"
                                                        ></i
                                                    ></a>
                                                </p>
                                            </div>
                                        </li>
                                        {/* <!-- li end --> */}

                                         {/* <!-- LISTitems --> */}
                                    </ul>
                                </main>
                                <footer
                                    className="card-footer suggs-card foot"
                                >
                                    <div className="card-footer-content">
                                        <p className="card-footer-text">
                                            Thank you for your
                                            contributions!
                                        </p>
                                        <div
                                            className="card-footer-links-wrapper"
                                        >
                                            <a
                                                href="#"
                                                className="details-link"
                                                >Details</a
                                            >
                                            <a
                                                href="#"
                                                className="add-sugg-link"
                                                >Suggest</a
                                            >
                                        </div>
                                    </div>
                                </footer>
                            </article>
                        </div>
                    </section>

                    {/* <!-- || sec USER-OWNER CREATE polls --> */}
                    <section className="user create">
                        <h2 className="user-title">Create</h2>

                         {/* <!-- LOADER show when fetching --> */}
                         {/* <Loader/> */}

                        <div className="user-create-wrapper">

                            <form
                                action="#"
                                method="post"
                                id="create-card-form"
                                className="create-card form"
                            >
                                <div className="wrap card-title">
                                    <label
                                        for="card-name"
                                        className="lbl card-name"
                                        >Feedback Form Title</label
                                    >
                                    <input
                                        type="text"
                                        className="card-name"
                                        name="card-name"
                                        id="card-name"
                                        placeholder="Enter title"
                                        minlength="3"
                                        maxlength="30"
                                        required
                                    />
                                </div>
                                <div className="wrap card-code">
                                    <label
                                        for="card-code"
                                        className="lbl card-code"
                                        >Create Code</label
                                    >
                                    {/* <!-- ?!POLL-ID?! --> */}
                                    <input
                                        type="text"
                                        className="card-code"
                                        name="card-code"
                                        id="card-code"
                                        minlength="6"
                                        maxlength="6"
                                        placeholder="Create form code"
                                        required
                                    />
                                </div>
                                {/* <!-- <div className="wrap card-timeout">
                                    <label
                                        for="card-timeout"
                                        className="lbl card-timeout"
                                        >End Date</label
                                    >
                                    <input
                                        type="date"
                                        className="card-timeout"
                                        name="card-timeout"
                                        id="card-timeout"
                                        min="2023-03-20"
                                        max="2023-06-20"
                                        value="2023-03-01"
                                        required
                                    />
                                </div> --> */}

                                <button
                                    type="submit"
                                    method="post"
                                    value="Create"
                                    className="create btn dark subm"
                                    form="create-card-form"
                                    id="btn-create-form"
                                    disabled
                                >
                                    Submit
                                </button>
                            </form>
                            {/* <!-- <article className="create sugg-card catalog private">
                                <header
                                    className="card-header card-brand-logo suggestit-brand"
                                >
                                    <h5 className="brand logo-line">
                                        Your Brand
                                    </h5>
                                </header>

                                <main className="card-main">
                                    <ul className="sugg-list" role="list">
                                       
                                    </ul>
                                </main>
                                <footer
                                    className="card-footer suggs-card foot"
                                >
                                    <div className="card-footer-content">
                                        <p className="card-footer-text">
                                            Thank you for your
                                            contributions!
                                        </p>
                                        <div
                                            className="card-footer-links-wrapper"
                                        >
                                            <a
                                                href="#"
                                                className="details-link"
                                                >Details</a
                                            >
                                            <a
                                                href="#"
                                                className="add-sugg-link"
                                                >Suggest</a
                                            >
                                        </div>
                                    </div>
                                </footer>
                            </article> --> */}
                        </div>
                    </section>

                    {/* <!-- || USER-OWNER SUGGESTIONS --> */}
                    <section className="user suggested">
                        <h2 className="user-title">Suggested</h2>

                       {/* <!-- LOADER show when fetching --> */}
                       {/* <Loader/> */}

                        <div className="user-sugged-wrapper">

                            {/* <!-- ???LIST SHOWS/ANY FUNC?! --> */}
                            <ul className="user-sugged-list" role="list">
                                <li className="user-sugged-li-items">
                                    Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Aliquid, ut.

                                    {/* <!-- VIS IF OWNER & NOT TIMED OUT --> */}
                                    <span className="user-sug-list">
                                        <a
                                            href="/"
                                            className="edit-user-sugged link"
                                            >Edit</a
                                        >
                                        <a
                                            href="/"
                                            className="delete-user-sugged link"
                                            >Delete</a
                                        >
                                    </span>
                                </li>
                                <li className="user-sugg-li-items">
                                    Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Aliquid, ut.
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
};