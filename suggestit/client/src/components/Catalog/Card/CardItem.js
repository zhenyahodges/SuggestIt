import { Form, Link, NavLink, useLoaderData, useNavigation } from 'react-router-dom';
import { getCard, getCards, onSuggSubmReq } from '../../../utils/api';

let cardId;

export function loader({ params }) {
    // console.log(params);
    cardId=params.cardId;
    return getCards(params.cardId);
}

export async function action({ request,params }) {
    console.log('hwer');
    console.log(request);
    console.log(params);
    return null;
    // const formData = await request.formData();
    // console.log(formData);
    // const sugg=formData.get('sugg');
}

// async function onSuggSubmit(e){
//    e.preventDefault();
//      const  user=JSON.parse(localStorage.getItem('user'));
//     const userId=user.userId;
//     const token=user.token;
//     const res=await onSuggSubmReq(sugg,cardId,token,userId)

// }

export default function CardItem() {
    const card = useLoaderData();
    const navigation=useNavigation();
    const [ownerId, brand, createdOn, cardId, suggestions] = card;

    const { token, userId } = JSON.parse(localStorage.getItem('user'));
    // const userId = user.userId;
    // console.log(ownerId);
    // console.log(userId);

    let isOwner = false;
    let isAuthorized = false;

    if (token) {
        isAuthorized = true;
    }

    if (ownerId === userId) {
        isOwner = true;
    }
    // console.log(isOwner);
    // console.log(isAuthorized);
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

                        <footer className='card-footer suggs-card foot'>
                            <div className='card-footer-content'>
                                {/* <p className='card-footer-owner'>Owner</p> */}
                                <p className='card-footer-text'>
                                    Thank you for your contributions!
                                </p>

                                <div className='card-footer-links-wrapper'>
                                    {/* ADD-SUGGESTION LINK: visible for LOGGED (NOT OWNERS?) */}
                                    {(isAuthorized && !isOwner)&&
                                    <Link
                                        to={`.`}
                                        className='add-sugg-link'
                                    >
                                        Suggest
                                    </Link>
                                     } 

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
                    {/* // ===================== //{' '} */}
                    {/* //  authorised & NOT owner- ADD SUGGESTION form  */}

                    {isAuthorized && !isOwner && (
                        <section className='add-sugg form-wrapper'>
                            {/* ?with or without li?  */}
                            <Form
                                action={`/${cardId}`}
                                method='post'
                                id='add-form'
                                className='add-sugg form'
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
                                    required
                                ></textarea>
                                <span
                                    className='add sugg author'
                                    id='add-sugg-author'
                                >
                                    Me
                                </span>
                                <button
                                    // type="submit"
                                    // method="post"
                                    // value="Submit"
                                    className='add-sugg btn dark subm'
                                    form='add-sugg'
                                    id='btn-add-form'
                                    // onClick={onSuggSubmit}
                                    disabled={navigation.state === 'submitting'}
                                >
                                   {navigation.state === 'submitting'
                        ? 'Submitting ...'
                        : 'Submit'}
                                </button>
                            </Form>

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
