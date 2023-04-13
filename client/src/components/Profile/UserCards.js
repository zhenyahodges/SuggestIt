import { Link, useLoaderData } from 'react-router-dom';
import { getCards, getUserCards } from '../../utils/service';
import { requireAuth } from '../../utils/requireAuth';

export async function loader({ request }) {
    const { userId, token } = await requireAuth(request);
    const cards = await getUserCards(userId,token);
    return cards;
}

// return comments;

export default function UserCards() {
    const cards = useLoaderData();

    return (
        <section className='user published'>
            <h2 className='user-title'>Published</h2>

            <div className='user-article-wrapper'>
                {cards &&
                    cards.map(({ brand, _createdOn, _id, _ownerId }) => (
                        // TODO:!!! Hide overflow if necess!!!from Details?! or SHOW ONLY FIRST N SUGGS
                        <article
                            key={_id}
                            className='sugg-card catalog private'
                            id={_id}
                        >
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
                                    <p className='card-footer-text'>
                                        Thank you for your contributions!
                                    </p>
                                    <div className='card-footer-links-wrapper'>
                                        <Link
                                            to={`/cards/${_id}`}
                                            className='details-link'
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </footer>
                        </article>
                    ))}
            </div>
        </section>
    );
}
