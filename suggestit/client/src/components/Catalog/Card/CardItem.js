import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { getCard, getCards } from '../../../utils/api';

export function loader({ params }) {
    // console.log(params);
    return getCards(params.cardId);
}

export default function CardItem() {
    const card = useLoaderData();
    const [ownerId, brand, createdOn, cardId,suggestions] = card;

    const {token,userId} = JSON.parse(localStorage.getItem('user'));
    // const userId = user.userId;
    console.log(ownerId);
    console.log(userId);


    let isOwner = false;
    let isAuthorized = false;

    if (token) {
        isAuthorized = true;
    }

    if (ownerId === userId) {
        isOwner = true;
    }
console.log(isOwner);
console.log(isAuthorized);
    // brand :     "IBM"
    // _createdOn  :  1680963671960
    // _id    :     "54151e7c-7c1e-41f8-a8d0-35d6860386c9"
    // _ownerId    :     "35c62d76-8152-4626-8712-eeb96381bea8"

    // console.log(card);
    // console.log(suggestions);

    return (
        //  DETAILS vis for all
        <section className='details-view container'>
            <h2>Details</h2>
            {
                // TODO:!!! Hide overflow!!!from Details?! or SHOW ONLY FIRST N SUGGS

                <article className='sugg-card details detailed-card'>
                    <header className='card-header'>
                        <h5 className='brand'>{brand}</h5>
                    </header>

                    <main className='card-main'>
                        <p>HERE GO THE SUGGESTIONS</p>
                        <ul className='sugg-list'>
                            {/* TODO: MAP SUGGESTIONS */}
                            {/* {suggestions && suggestions.map((s) => <SuggestionItem id={s._id} key={s._id} {...s} />)}
                            {_id.suggestions.map(s=>(<SuggestionItem key={s._id} {...s}/>))}  

                            {card.suggestions &&
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
                                    to={`/:suggestionId`}
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
                                {(isAuthorized && isOwner) && (
                                    <>
                                        <NavLink
                                            to='/'
                                            className='card-details edit-card'
                                        >
                                            Edit
                                        </NavLink>
                                        <NavLink
                                            to='/'
                                            className='card-details delete-card'
                                        >
                                            Delete
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        </div>
                    </footer>
                </article>
            }
        </section>
    );
}
