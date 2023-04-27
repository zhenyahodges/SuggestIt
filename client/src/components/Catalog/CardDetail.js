import {
    Link,
    useLoaderData,
    useNavigate,
    useNavigation,
} from 'react-router-dom';
import {
    // getAllLikes,
    getCardSuggestions,
    getCards,
    // getLikes,
    onDeleteCard,
    // postLikes,
} from '../../utils/service';
import { useEffect, useState } from 'react';
import { EmailShareButton } from 'react-share';
import SuggestionDetail from './Suggestion/SuggestionDetail';

let cardId;

export async function loader({ params }) {
    cardId = params.cardId;
    console.log('CARDID--'+cardId);
    const res = await getCards(cardId);
    const suggestions = await getCardSuggestions(cardId);
    const result = {
        res,
        suggestions,
    };
    return result;
}

export default function CardDetail() {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const { res, suggestions } = useLoaderData();

    // const [likesSugg, setLikesSugg] = useState([]);
    // const [voters,setVoters]=useState([]);

    const ownerId = res._ownerId;
    const cardId = res._id;
    const brand = res.brand;
    const createdOn = res._createdOn;
    const updatedOn = res._updatedOn;

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

    const minutes = 100000;
    const timePassed = new Date() - new Date(createdOn) > minutes;

    // let allSuggsLike;
    // async function allSuggsLikesGet(suggestionId, token) {
    //     allSuggsLike = await getAllLikes(suggestionId, token);
    //     console.log('LIKESRES--' + res);
    //     return res;
    // }
    // allSuggsLike.map(async (sugg) => {
    //     const likes = await getLikes(sugg._id);
    //     return likes.length;
    // });

    // async function increase(suggestionId, token, userId) {
    //     console.log('sid--' + suggestionId, 'tok--' + token);
    //     //     console.log(suggestionId,token,userId);
    //     const res = await getLikes(suggestionId);
    //     await postLikes(suggestionId, token, userId);
    //     console.log('reslikesall--' + res);
    //     const rank = res.length;
    //     return rank;
    // }

    // async function decrease() {
    //     // setLikesSugg(prevCount=>prevCount-1);
    // }

    return (
        <section className='details-view container'>
            <h2>Details</h2>
            {
                <article className='sugg-card details detailed-card'>
                    <header className='card-header details-header'>
                        <h5 className='brand'>{brand}</h5>
                    </header>

                    <main className='card-main'>
                        <ul className='sugg-list'>
                            {/* SUGGESTIONS */}
                            {suggestions &&
                                suggestions.map((s) => (
                                    <SuggestionDetail key={s._id} {...s} />
                                ))}
                        </ul>
                    </main>

                    <footer className='card-footer sugg-card foot'>
                        <div className='card-footer-content'>
                            <p className='card-footer-text'>
                                Thank you for your contributions!
                            </p>

                            <div className='card-footer-links-wrapper'>
                                {/* ADD-SUGGESTION LINK: visible for LOGGED (NOT OWNERS?) */}
                                {isAuthorized && !isOwner && (
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

                                {/*  VISIBLE FOR LOGGED OWNER ONLY */}
                                {/* <p className="countdown-text"><span className="count-end">20</span> days left</p> */}

                                {/* if POLL ENDED  */}
                                {/* <p className="countdown-text">Poll ended</p> */}

                                {/* EDIT/DELETE VISIBLE FOR OWNER IF NOT TIMED OUT */}
                                {isAuthorized && isOwner && !timePassed && (
                                    <>
                                        <Link
                                            to={`/cards/${cardId}/edit`}
                                            className='btn-sm card-details edit-card'
                                            disabled={
                                                navigation.state === 'loading'
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
                                                navigation.state === 'loading'
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
            }
        </section>
    );
}
