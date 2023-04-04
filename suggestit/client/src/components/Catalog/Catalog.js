import { Link } from 'react-router-dom';
// import { Loader } from '../Loader/Loader';

import { useEffect, useState } from 'react';
import CardItem from './Card/CardItem';
// import { getCards } from '../../utils/api';
// import { defer, useLoaderData } from 'react-router-dom';

// export function loader() {
//     return defer({ cards: getCards() });
// }

export default function Catalog() {
    const [cards, setCards] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/cards')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('res.status');
                }
                if (res.status === 204) {
                    console.log('empty');
                    return {};
                    // return console.log('empty');
                }
                // console.log('empty');
                // return {};
                return res.json();
            })
            // .then((data) => setCards(Object.values(data)))
            .then((data) => console.log(Object.values(data)))
            // .then((data) => setCards(data.cards))
            .catch((err) => {
                throw new Error(err.status);
            });

        // async function loadCards() {
        //     setLoading(true);
        // try {
        //     const data = await getCards();
        //     setCards(data);
        // } catch (err) {
        //     // setErr(err);
        //     console.log(err);
        // } finally {
        //     setLoading(false);
        // }
        // }

        // loadCards();
    }, []);

    // console.log(`'cards: '+ ${cards[0].brand} + 'brand': ${cards.brand} ${cards._id}`);
    const cardElements = cards.map(({ _ownerId, brand, _createdOn, _id }) => (
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
                        <Link to={`/catalog/${_id}`} className='details-link'>
                            Details
                        </Link>

                        {/* ADD-SUGGESTION LINK: visible for LOGGED (NOT OWNERS?)

                {/* {(isAuthorized && !isOwner)&&
                <Link to='/addSuggestion' className='add-sugg-link'>
                Suggest
                </Link>} */}

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
    ));

    return (
        <section className='catalog window'>
            <h2 className='catalog title'>Catalog</h2>

            {/* LOADER show when fetching   */}
            {/* <Loader/> */}

            <div className='catalog-wrapper'>
                {cardElements}
                {/* {cards && cards.map((c) => <CardItem key={c._id} {...c} />)} */}
            </div>
        </section>
    );
}
