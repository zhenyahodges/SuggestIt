import {
    Form,
    // Form,
    Link,
    // NavLink,
    // redirect,
    useLoaderData,
    useNavigate,
    useNavigation,
    // useParams,
    useSubmit,
} from 'react-router-dom';
import {
    // addNewSugg,
    // getCard,
    getCards,
    onDeleteCard,
    // onSuggSubmReq
} from '../../../utils/api';
// import useDirect from '../../../hooks/useDirect';
import { AddSuggestion } from '../../AddSuggestion/AddSuggestion';

let cardId;

export function loader({ params }) {
    // console.log(params);
    cardId = params.cardId;
    return getCards(params.cardId);
}

// export async function action({ request,params }) {
//     console.log('here');
//     console.log(request);
//     console.log(params);
//     return null;
//     // const formData = await request.formData();
//     // console.log(formData);
//     // const sugg=formData.get('sugg');
// }

export default function CardItem() {
    const card = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();
    let submit = useSubmit();

    const [ownerId, brand, createdOn, cardId, suggestions] = card;
    const { token, userId } = JSON.parse(localStorage.getItem('user'));
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

    const onDelete = async () => {
        // const result = confirm(`Are you sure you want to delete this card?`);
        // if (result) {
        await onDeleteCard(cardId, token);
        navigate(-1);
    };

    // const onEdit=async()=>{

    //     // await onEditCard(cardId,token);
    // }

    // const onSuggSubmit=async(e)=>{
    //     const value=e.target.value;
    //     console.log(e.currentTarget.name);
    //     console.log(e.currentTarget.value);
    //     // e.preventDefault();
    // const form = e.target;
    // const data = new FormData(form);
    // const formData= Object.fromEntries(data.entries());
    //     // const formData = await formData();
    //     // const sugg=
    //     // await onSuggestion(cardId,token,sugg);
    // };

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
                                    {isAuthorized && !isOwner && (
                                        // <AddSuggestion onSuggSubmit={onSuggSubmit}/>
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
                            <Form
                                // onChange={(event) => {
                                //     submit(event.currentTarget);
                                // }}
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
                                    type='submit'
                                    method='post'
                                    // value={sugg}
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
