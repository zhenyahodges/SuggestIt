import {
    Link,
    useFetcher,
    useLoaderData,
    useNavigate,
    useNavigation,
} from 'react-router-dom';
import { getCards, onDeleteCard } from '../../../utils/service';
import { useEffect, useState } from 'react';
import { EmailShareButton } from 'react-share';

let cardId;

export async function loader({ params }) {
    cardId = params.cardId;
    const res = await getCards(cardId);
    // const suggestions=await getSuggestions(cardId)
    return res;
}

export default function CardItem() {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const res = useLoaderData();
    const fetcher = useFetcher();
    const [suggestions, setSuggestions] = useState([]);
    const [likes, setLikes] = useState([]);
    // const { register, handleSubmit, formState: { errors } } = useForm();

    const ownerId = res._ownerId;
    const cardId = res._id;
    const brand = res.brand;
    const createdOn = res._createdOn;
    const updatedOn = res._updatedOn;
    const suggested = res._suggestions;

    useEffect(() => {
        suggested && setSuggestions(suggested);
    }, [setSuggestions, suggested]);

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

    const onDelete = async () => {
        if (window.confirm('Are you sure you want to delete?')) {
            await onDeleteCard(cardId, token);
            navigate(`/users/${userId}`);
        }
    };

    function onPrint(e) {
        e.preventDefault();
        window.print();
        return false;
    }
    // function onSubmit(data) {
    //     console.log(data);
    // }

    // const onSuggSubmit=async(values)=>{
    // const res=await addSuggestion(token,cardId,values.suggestion);
    // console.log('res');

    // return null;
    // };

    // function handleSuggChange(e){
    //     // console.log('e--'+e);
    //     const {name,value} = e.target;
    //     // console.log('here'+name,value);
    //     setFormData((prev) => {
    //         return {
    //             ...prev,
    //             [name]: value,
    //         };
    //     });
    // };

    // async function onSubmitHandler(e){
    //     e.preventDefault();
    //     // const {token}=await requireAuth();
    //     console.log(formData);
    //     return null;
    //     // const res=await addSuggestion(token,cardId,formData);
    //     // console.log('res==='+res);
    // }

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
                                {/* SUGGESTIONS */}
                                {suggestions &&
                                    suggestions.map((sugg) => {
                                        return (
                                            <li
                                                className='sugg-item'
                                                key={sugg._id}
                                            >
                                                <div className='sugg-item-wrapper'>
                                                    <p className='sugg-text'>
                                                        {sugg.text}
                                                        SUGG TEXT
                                                        {/* <!--IF OWNER & NOT TIMED OUT --> */}
                                                        <span className='user-sug-list'>
                                                            <Link
                                                                to='#'
                                                                className='edit-user-sugged link'
                                                            >
                                                                Edit
                                                            </Link>
                                                            <Link
                                                                to='#'
                                                                className='delete-user-sugged link'
                                                            >
                                                                Delete
                                                            </Link>
                                                        </span>
                                                    </p>

                                                    <p className='sugg-ranking'>
                                                        <span className='rank'>
                                                            {sugg.rank}
                                                            15
                                                        </span>

                                                        {/* <!-- LIKE DISABLED FOR GUESTS & OWNERS -->
                                            <!--===!? LIKE LIMITED voting!?=== --> */}
                                                        <button className='sugg-like-link'>
                                                            {/* if voted down=>vote up */}
                                                            <i className='like fa-solid fa-circle-up'></i>
                                                            {/* if voted up=>vote down */}
                                                            <i class='fa-solid fa-circle-down'></i>
                                                        </button>
                                                    </p>
                                                </div>
                                            </li>
                                        );
                                        // {/* <!-- li end--> */}}
                                    })}
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
                                        // <Link>ddSuggestion onsuggubmit={onsuggubmit}/>
                                        <Link
                                            to={`/cards/${cardId}/suggest`}
                                            className='add-sugg-link'
                                        >
                                            Suggest
                                        </Link>
                                    )}

                                    {/*------- EMAIL&P PRINT */}
                                    {isAuthorized && isOwner && (
                                        <>
                                            <Link
                                                to='/'
                                                className='print details'
                                                onClick={onPrint}
                                            >
                                                Print
                                            </Link>
                                            <EmailShareButton>
                                                <span className='print details'>
                                                    Email
                                                </span>
                                            </EmailShareButton>
                                        </>
                                    )}

                                    {/*------- LATER  */}
                                    {/*  VISIBLE FOR LOGGED OWNER ONLY */}
                                    {/* <p className="countdown-text"><span className="count-end">20</span> days left</p> */}

                                    {/* if POLL ENDED  */}
                                    {/* <p className="countdown-text">Poll ended</p> */}

                                    {/* EDIT/DELETE VISIBLE FOR OWNER IF NOT TIMED OUT */}
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
                </>
            }
        </section>
    );
}
