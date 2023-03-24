import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

import * as cardService from '../../services/cardService';

export const Details = () => {
    const { cardId } = useParams();
    const [card, setCard] = useState({});
    const [userName, setUserName] = useState('');
    const [suggestion, setSuggestion] = useState('');

    useEffect(() => {
        cardService.getCard(cardId).then((res) => {
            if (!res.ok) {
                throw new Error(`${res.status}`);
            }
            setCard(res);
        });
    }, [cardId]);

    // ADD SUGGESTIONS
    const onSuggSubmit = async (e) => {
        e.preventDefault();

        const result = await cardService.addSuggestion(cardId, {
            userName,
            suggestion,
        });

        setSuggestion((state) => ({
            ...state,
            suggestions: { ...state.suggestions, [result._id]: result },
        }));

        setUserName('');
        setSuggestion('');
    };

    return (
        //  DETAILS vis for all
        <section className='details-view container'>
            <h2>Details</h2>

            {/*  LOADER show when fetching */}
            {/* <Loader/> */}

            {/*  CARD-DETAILS */}  
        <article className='sugg-card details private'>
            <header className='card-header card-brand-logo suggestit-brand'>
                <h5 className='brand logo-line'>{card.brand}</h5>
            </header>

            <main className='card-main'>
                <ul className='sugg-list' role='list'>
                 
                    {/*  li start */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                {/* <span className='author-nickname'>Me</span> */}
                                Suggestion for you Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Laboriosam, cum.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Doloribus, est?
                                {/*  IF OWNER & NOT TIMED OUT */}
                                <span className='user-sug-list'>
                                    <a
                                        href='/'
                                        className='edit-user-sugged link'
                                    >
                                        Edit
                                    </a>
                                    <a
                                        href='/'
                                        className='delete-user-sugged link'
                                    >
                                        Delete
                                    </a>
                                </span>
                            </p>

                            <p className='sugg-ranking'>
                                {/* LIKES */}
                                <span className='rank'>15</span>

                                {/*  LIKE DISABLED FOR GUESTS & OWNERS */}
                                {/*  ===!? LIKE LIMITED voting!?=== */}
                                <a href='/' className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </a>
                            </p>
                        </div>
                    </li>
                    {/*  li end */}

                    {/*  li start  */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                <span className='author-nickname'>Me</span>
                                Another suggestion for you
                            </p>
                            <p className='sugg-ranking'>
                                <span className='rank'>10</span>
                                <a href='/' className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </a>
                            </p>
                        </div>
                    </li>
                    {/*  li end */}

                    {/*  ADDITONAL */}
                    {/*  li start */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                <span className='author-nickname'>Me</span>
                                One more suggestion for you
                            </p>
                            <p className='sugg-ranking'>
                                <span className='rank'>5</span>
                                <a href='/' className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </a>
                            </p>
                        </div>
                    </li>
                    {/*  li end */}
                    {/*  li start */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                <span className='author-nickname'>Me</span>
                                One more suggestion for you
                            </p>
                            <p className='sugg-ranking'>
                                <span className='rank'>5</span>
                                <a href='/' className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </a>
                            </p>
                        </div>
                    </li>
                    {/*  li end */}
                    {/*  li start */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                <span className='author-nickname'>Me</span>
                                One more suggestion for you
                            </p>
                            <p className='sugg-ranking'>
                                <span className='rank'>5</span>
                                <a href='/' className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </a>
                            </p>
                        </div>
                    </li>
                    {/*  li end */}

                    {/*  li start */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                <span className='author-nickname'>Me</span>
                                One more suggestion for you
                            </p>
                            <p className='sugg-ranking'>
                                <span className='rank'>5</span>
                                <a href='/' className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </a>
                            </p>
                        </div>
                    </li>
                    {/*  li end */}
                    {/*  li start */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                <span className='author-nickname'>Me</span>
                                One more suggestion for you
                            </p>
                            <p className='sugg-ranking'>
                                <span className='rank'>5</span>
                                <a href='/' className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </a>
                            </p>
                        </div>
                    </li>
                    {/*  li end */}

                    {/*  li start */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                <span className='author-nickname'>Me</span>
                                One more suggestion for you
                            </p>
                            <p className='sugg-ranking'>
                                <span className='rank'>5</span>
                                <a href='/' className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </a>
                            </p>
                        </div>
                    </li>
                    {/*  li end                              */}

                    {/*  li start */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                <span className='author-nickname'>Me</span>
                                One more suggestion for you
                            </p>
                            <p className='sugg-ranking'>
                                <span className='rank'>1</span>
                                <a href='/' className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </a>
                            </p>
                        </div>
                    </li>
                    {/*  li end */}

                    {/*  li start */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                <span className='author-nickname'>Me</span>
                                Last suggestion
                            </p>
                            <p className='sugg-ranking'>
                                <span className='rank'>0</span>
                                <a href='/' className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </a>
                            </p>
                        </div>
                    </li>
                    {/*  li end */}

                    {/* LISTitems */}
                </ul>
            </main>
            <footer className='card-footer suggs-card foot'>
                <div className='card-footer-content'>
                    <p className='card-footer-owner'>Owner</p>
                    <p className='card-footer-text'>
                        Thank you for your contributions!
                    </p>

                    <div className='card-footer-links-wrapper'>
                        {/*  NOT VISIBLE WHEN OPENED */}
                        <Link to={`/catalog/${_id}`} className='details-link'>
                            Details
                        </Link>

                        {/*  VISIBLE FOR LOGGED (NOT OWNERS?) */}
                        <Link to='/addSuggestion' className='add-sugg-link'>
                            Suggest
                        </Link>
                        {/*  <a href="/" className="print details">Print</a> */}
                        {/*  <a href="/" className="print email details"
                           >Email</a
                       > */}

                        {/*  VISIBLE FOR LOGGED OWNER ONLY */}
                        {/* <p className="countdown-text"><span className="count-end">20</span> days left</p> */}

                        {/* if POLL ENDED  */}
                        {/* <p className="countdown-text">Poll ended</p> */}

                        {/*  VISIBLE FOR OWNER IF NOT TIMED OUT */}
                        <a href='/' className='card-details edit-card'>
                            Edit
                        </a>
                        <a href='/' className='card-details delete-card'>
                            Delete
                        </a>
                    </div>
                </div>
            </footer>
        </article>
        </section>
    );
};
