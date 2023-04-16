import {
    Form,
    Link,
    redirect,
    useFetcher,
    useLoaderData,
    useNavigate,
    useNavigation,
    useSubmit,
} from 'react-router-dom';
import { addSuggestion, getCards, onDeleteCard } from '../../../utils/service';
import { useEffect, useRef, useState } from 'react';
import { requireAuth } from '../../../utils/requireAuth';

let cardId;

export async function loader({ params }) {
    cardId = params.cardId;
    const res = await getCards(cardId);
    // const suggestions=await getSuggestions(cardId)
    return res;
}
export async function action({ request, params }) {
    const { userId, token } = await requireAuth();
    const formData = await request.formData();
    // console.log(formData);
    const data = Object.entries('formData###'+formData);
    const sugg= formData.get('sugg');
    console.log(data);
    console.log(sugg);

    try{
      if(token){
         await addSuggestion(token,sugg,userId);
        //    return redirect(`/users/${userId}`);
      } else{
        redirect('login');
      }
    } catch (err) {
        return err.message;
    }
    return null;
}

export default function CardItem() {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const res = useLoaderData();

//     const [sugg, setSugg] = useState();
//     const fetcher = useFetcher();

//     const ref = useRef();
//     const data=fetcher.data;
//     console.log('fetchherdATA##'+data);

//  useEffect(() => {
//     if (
//       fetcher.state === "idle" &&
//       fetcher.data?.ok
//     ) {
//       ref.current.reset();
//     }
//   }, [fetcher]);
 
    const ownerId=res._ownerId;
    const cardId=res._id;
    const brand=res.brand;
    const createdOn=res._createdOn;
    const updatedOn=res._updatedOn;
    const suggs=res._suggs;
    
    const user = JSON.parse(localStorage.getItem('user'));

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

    // const handleChange = (e) => {
    //     setSugg(e.target.value);
    // };

    const onDelete = async () => {
        if(window.confirm('Are you sure you want to delete?')){
        await onDeleteCard(cardId, token);
        navigate(`/users/${userId}`);
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(sugg);
    // };

    return (
        //  DETAILS vis for all
        <section className='details-view container'>
            <h2>Details</h2>
            {
                // TODO:!!! Hide overflow!!!from Details?! or SHOW ONLY FIRST N sugg
                <>
                    <article className='sugg-card details detailed-card'>
                        <header className='card-header details-header'>
                            <h5 className='brand'>{brand}</h5>
                        </header>

                        <main className='card-main'>
                            <p>HERE GO THE SUGGESTIONS</p>
                            <ul className='sugg-list'>
                                {/* TODO: MAP SUGGESTIONS */}
                                {/* {suggs && suggs.map((s) => <SuggestionItem id={s._id} key={s._id} {...s} />)}
                            {_id.suggestions.map(s=>(<SuggestionItem key={s._id} {...s}/>))}   */}

                            {/* {card.suggestions &&  Object.values(card.suggestions).map((x) => (
                                <li key={x._id} className='sugg-item'>
                                <div className='sugg-item-wrapper'>
                                   <p className='sugg-text'>
                                  <span className='author-nickname'>
                                      {x.userName}
                               </span> */}

                              {suggs && suggs.map(sugg=>{
                                // {/* <!-- li start --> */}
                               return (<li className="sugg-item"
                                 key={sugg._id}>
                                    <div className="sugg-item-wrapper">
                                        <p className="sugg-text">
                                            {/* <span className="author-nickname">
                                                {author}
                                                author
                                            </span> */}
                                        {/* {sugg.text} */}
                                            SUGG TEXT
                                            {/* <!--IF OWNER & NOT TIMED OUT --> */}
                                            <span className="user-sug-list">
                                                <Link to="#"
                                                    className="edit-user-sugged link"
                                                    >Edit</Link>                                                
                                                <Link to="#"
                                                    className="delete-user-sugged link"
                                                    >Delete</Link>
                                            </span>
                                        </p>

                                        <p className="sugg-ranking">
                                            <span className="rank">{sugg.rank}15</span>

                                            {/* <!-- LIKE DISABLED FOR GUESTS & OWNERS -->
                                            <!--===!? LIKE LIMITED voting!?=== --> */}
                                            <button className="sugg-like-link">
                                                <i
                                                    className="like fa-solid fa-circle-up"
                                                ></i>
                                            </button>
                                        </p>
                                    </div>
                                </li>);
                                // {/* <!-- li end--> */}}
                              })  }
                   
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
                                    {/* {isAuthorized && !isOwner && (
                                        // <Link>ddSuggestion onsuggubmit={onsuggubmit}/>
                                        <Link
                                            to={`/suggestions/${cardId}`}
                                            className='add-sugg-link'
                                        >
                                            Suggest
                                        </Link>
                                    )} */}

                                    {/*------- LATER  */}
                                    {/*  <Link to="/" className="print details">Print</Link> */}
                                    {/*  <Link to="/" className="print email details">Email</Link> */}

                                    {/*------- LATER  */}
                                    {/*  VISIBLE FOR LOGGED OWNER ONLY */}
                                    {/* <p className="countdown-text"><span className="count-end">20</span> days left</p> */}

                                    {/* if POLL ENDED  */}
                                    {/* <p className="countdown-text">Poll ended</p> */}

                                    {/*  VISIBLE FOR OWNER IF NOT TIMED OUT */}
                                    {isAuthorized && isOwner && (
                                        <>
                                            <Link
                                                to={`/cards/${cardId}/edit`}
                                                className='btn-sm card-details edit-card'
                                                // onClick={onEditCard}
                                                disabled={
                                                    navigation.state ===
                                                    'loading'
                                                }
                                            >
                                                {navigation.state === 'loading'
                                                    ? 'Loading...'
                                                    : 'Edit'}
                                            </Link>
                                            <button
                                                to='/'
                                                className='btn-sm card-details delete-card'
                                                onClick={onDelete}
                                                disabled={
                                                    navigation.state ===
                                                    'loading'
                                                }
                                            >
                                                {navigation.state === 'loading'
                                                    ? ':Loading...'
                                                    : 'Delete'}
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </footer>
                    </article>                   
       
                    {/* // //  authorised & NOT owner- ADD SUGGESTION form  */}
                    {(isAuthorized && !isOwner) && (
                        <section className='add-sugg form-wrapper'>
                            {/* ?with or without li?  */}
                            <Form
                                action={'/data/suggestions'}
                                method='post'
                                id='add-form'
                                className='add-sugg form'
                                // onSubmit={handleSubmit}
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
                                        ? 'Submitting...'
                                        : 'Submit'}
                                </button>
                            </Form>                  
                        </section>
                    )}
                </>
            }
        </section>
    );
}
