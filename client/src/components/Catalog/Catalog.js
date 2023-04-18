import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { getCards } from '../../utils/service';

export async function loader() {
    const cards = await getCards();
    // if (cards) {
    return cards;
    // }
    // return null;
}

export default function Catalog() {
    const cards = useLoaderData();
    const navigation = useNavigation();

    return (
        <section className='catalog window'>
            <h2 className='catalog title'>Catalog</h2>

            <div className='catalog-wrapper'>
                {cards &&
                    cards.map(({ brand, _createdOn, _id, _ownerId }) => (
                        <article
                            key={_id}
                            className='sugg-card details catalog-view-card'
                            id={_id}
                        >
                            <header className='card-header'>
                                <h5 className='brand'>{brand}</h5>
                            </header>

                            <main className='card-main catalog-view-card'>
                                <ul className='sugg-list'>
                                    {/* TODO: MAP SUGGESTIONS */}
                                    {}
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
                                            to={_id}
                                            className='details-link'
                                            disabled={
                                                navigation.state === 'loading'
                                            }
                                        >
                                            {navigation.state === 'loading'
                                                ? 'Loading...'
                                                : 'Details'}
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
