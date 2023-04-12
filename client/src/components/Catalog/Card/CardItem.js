import {
    Link,    
    useLoaderData,
    useNavigate,
    useNavigation,
    useSubmit,
} from 'react-router-dom';
import {
    getCards,
    onDeleteCard,
} from '../../../utils/service';
import { useEffect, useState } from 'react';

let cardId;

export async function loader({ params }) {
    cardId = params.cardId;
    const res = await getCards(params.cardId);
    return res;
}

export default function CardItem() {
    const [sugg, setSugg] = useState();

    const card = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();
    // let submit = useSubmit();

    const [ownerId, brand, createdOn, cardId, suggestions] = card;
    const user = JSON.parse(localStorage.getItem('user'));
    //  change
    let userId;
    let token;
    if (user) {
        ({ token, userId } = user);
    }

    let isOwner = false;
    let isAuthorized = false;

    if (token) {
        isAuthorized = true;
    }
    if (ownerId === userId) {
        isOwner = true;
    }


    const handleChange = (e) => {
             setSugg(e.target.value);
    };

    const onDelete = async () => {
        // const result = confirm(`Are you sure you want to delete this card?`);
        // if (result) {
        await onDeleteCard(cardId, token);
        navigate(-1);
        // }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(sugg);
    };

    return (
        //  DETAILS vis for all
        <section className='details-view container'>
            <h2>Details</h2>
            {
                // TODO:!!! Hide overflow!!!from Details?! or SHOW ONLY FIRST N sugg
                <>
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

                        <footer className='card-footer sugg-card foot'>
                            <div className='card-footer-content'>
                                {/* <p className='card-footer-owner'>Owner</p> */}
                                <p className='card-footer-text'>
                                    Thank you for your contributions!
                                </p>

                                <div className='card-footer-links-wrapper'>
                                    {/* ADD-SUGGESTION LINK: visible for LOGGED (NOT OWNERS?) */}
                                    {isAuthorized && !isOwner && (
                                        // <AddSuggestion onsuggubmit={onsuggubmit}/>
                                        <Link
                                            to={`/suggestions/${cardId}`}
                                            className='add-sugg-link'
                                        >
                                            Suggest
                                        </Link>
                                    )}

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
                                    {isAuthorized && isOwner && (
                                        <>
                                            <button
                                                to='/'
                                                className='btn-sm card-details edit-card'
                                                // onClick={onEdit}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                to='/'
                                                className='btn-sm card-details delete-card'
                                                onClick={onDelete}
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </footer>
                    </article>
                    {/* // ===================== //{' '} */}
                    {/* //  authorised & NOT owner- ADD SUGGESTION form  */}

                    {isAuthorized && !isOwner && (
                        <section className='add-sugg form-wrapper'>
                            {/* ?with or without li?  */}
                            <form
                                // action={`/${cardId}`}
                                method='post'
                                id='add-form'
                                className='add-sugg form'
                                onSubmit={handleSubmit}
                            >
                                <h2>Add a Suggestion</h2>
                                <p>
                                    <label htmlFor='sugg'>
                                        Your Suggestion:
                                    </label>
                                </p>

                                <textarea
                                    className='sugg-text-add'
                                    id='sugg'
                                    form='add-form'
                                    name='sugg'
                                    rows='4'
                                    cols='50'
                                    maxLength='150'
                                    placeholder='Type your suggestion here'
                                    value={sugg}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <span
                                    className='add sugg author'
                                    id='add-sugg-author'
                                >
                                    Me
                                </span>
                                <button
                                    type='submit'
                                    method='post'
                                    // value={sugg}
                                    className='add-sugg btn dark subm'
                                    form='add-sugg'
                                    id='btn-add-form'
                                    // onSubmit={onSubmit}
                                    disabled={navigation.state === 'submitting'}
                                >
                                    {navigation.state === 'submitting'
                                        ? 'Submitting ...'
                                        : 'Submit'}
                                </button>
                            </form>

                            {/* SUGG PREVIEW -display for a brief period before confirming ? timed?*/}

                            {/*  <div className="sugg-item-wrapper">
<p className="sugg-text" placeholder="Suggestion">
<span className="author">
Me
</span>
Another suggestion for you
</p>
<p className="sugg-ranking">
<span className="rank">10</span
><a className="sugg-like-link"
><i
    className="like fa-solid fa-circle-up"
></i
></a>
</p>
</div>  */}
                        </section>
                    )}
                </>

                // =====================
            }
        </section>
    );
}
