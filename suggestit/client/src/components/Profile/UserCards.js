import { Link, useLoaderData } from 'react-router-dom';
import { getCards } from '../../utils/api';
import { requireAuth } from '../../utils/requireAuth';

export async function loader({ request }) {
    // console.log(request);
    const { userId, token } = await requireAuth(request);
    // console.log((request));
    const cards = await getCards();
   
    if (cards) {
        const usercs=cards.map(X => { return X._Id}).includes(userId);
        return cards;
    }
  
    // if (cards) {
    //     const cardId = cards._id;
        
        // console.log('cardId'+cardId);

        // const searchQuery = encodeURIComponent(`cardId="${cardId}"`);
        // const relationQuery = encodeURIComponent(`author=_ownerId:users`);
        // const url =new URL(`http://localhost:3030/jsonstore/cards?where=cardId="${searchQuery}"&load=author=${relationQuery}`);
        // console.log(url);

        // const res = await fetch(url);
        // console.log(res);
        // if (!res.ok) {
        //     throw new Error(`${res.status} - ${res.statusText}`);
        // }
        // if (res.status === 204) {    
        // console.log('empty');
        //     return null;
        // }
        // const data = await res.json();
        // console.log(data);
        // console.log(Object.values(data));
        // return Object.values(data);
       
   
    //  const result = await request.get(`http://localhost:3030?where=${searchQuery}&load=${relationQuery}`);
    //  console.log(result);
    //  console.log(Object.values(result));
   
    // const comments = Object.values(result);
   


  

    // const userCards=cards.map(x=>userId===x._ownerId);
    // console.log(userCards);

    // if (cards) {
    //     // const userCards=cards.filter(x=>x._ownerId===userId);
    //     return userCards;
    // }

    // console.log(userId,token);
    // const ownerId=

    // const cards =await  getUserCards(userId,ownerId);
    // console.log(cards);
    // if (cards) {
    //     //
    //     console.log(userCards);
    //     return null;
    //     // return userCards;
    // }
    return null;
    // return null;
}

// return comments;

export default function UserCards() {
    const cards = useLoaderData();
    // console.log(cards);

    return (
        //  {/* <!-- || sec USER-OWNER PUBLISHED polls --> */}
        <section className='user published'>
            <h2 className='user-title'>Published</h2>

            <div className='user-article-wrapper'>
                {cards &&
                    cards.map(({ brand, _createdOn, _id, _ownerId }) => (
                        // TODO:!!! Hide overflow!!!from Details?! or SHOW ONLY FIRST N SUGGS
                        <article
                            key={_id}
                            className='sugg-card catalog private'
                            // sugg-card catalog private
                            // sugg-card details
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
