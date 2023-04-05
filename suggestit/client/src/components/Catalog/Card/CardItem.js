import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { getCard, getCards } from '../../../utils/api';
// import { SuggestionItem } from '../../AddSuggestion/SuggestionItem/SuggestionItem';
// import { SuggestionItem } from '../../Details/AddSuggestion/SuggestionItem/SuggestionItem';

export function loader({ params }) {
    // console.log(params);
    return getCard(params.cardId);
}

export default function CardItem() {
    const card = useLoaderData();
    const [ownerId,brand,createdOn,suggestions] = card;
    // console.log(card);

    return (
        //  DETAILS vis for all
        <section className='details-view container'>
            <h2>Details</h2>

            {/*  LOADER show when fetching */}
            {/* <Loader/> */}

            {
                // TODO:!!! Hide overflow!!!from Details?! or SHOW ONLY FIRST N SUGGS

                <article className='sugg-card details'>
                    <header className='card-header'>
                        <h5 className='brand'>{brand}</h5>
                    </header>

                    <main className='card-main'>
                        <p>HERE GO THE SUGGESTIONS</p>
                        <ul className='sugg-list'>
                            {/* TODO: MAP SUGGESTIONS */}
                            {/* {suggestions && suggestions.map((s) => <SuggestionItem id={s._id} key={s._id} {...s} />)} */}
                            {/* {_id.suggestions.map(s=>(<SuggestionItem key={s._id} {...s}/>))}   */}

                            {/* {card.suggestions &&
     Object.values(card.suggestions).map((x) => (
        <li key={x._id} className='sugg-item'>
             <div className='sugg-item-wrapper'>
               <p className='sugg-text'>
                 <span className='author-nickname'>
                      {x.userName}
                </span> */}
                            {/* SUGGESTION */}
                            {/* {x.suggestion} */}
                        </ul>
                    </main>

                    <footer className='card-footer suggs-card foot'>
                        <div className='card-footer-content'>
                            {/* <p className='card-footer-owner'>Owner</p> */}
                            <p className='card-footer-text'>
                                Thank you for your contributions!
                            </p>

                            <div className='card-footer-links-wrapper'>
                                {/* ADD-SUGGESTION LINK: visible for LOGGED (NOT OWNERS?) */}
                                {/* {(isAuthorized && !isOwner)&& */}
                                <Link
                                    to='/addSuggestion'
                                    className='add-sugg-link'
                                >
                                    Suggest
                                </Link>
                                {/* }  */}

                                {/*------- LATER  */}
                                {/*  <a href="/" className="print details">Print</a> */}
                                {/*  <a href="/" className="print email details"
                    >Email</a
                    > */}

                                {/*------- LATER  */}
                                {/*  VISIBLE FOR LOGGED OWNER ONLY */}
                                {/* <p className="countdown-text"><span className="count-end">20</span> days left</p> */}

                                {/* if POLL ENDED  */}
                                {/* <p className="countdown-text">Poll ended</p> */}

                                {/*  VISIBLE FOR OWNER IF NOT TIMED OUT */}
                                {/* { (isAuthorized && !isOwner)&&
       <a href='/' className='card-details edit-card'>
            Edit
        </a>
        <a href='/' className='card-details delete-card'>
            Delete
        </a>} */}
                            </div>
                        </div>
                    </footer>
                </article>
            }
            {/* SUGGESTIONS */}
        </section>
    );
}
