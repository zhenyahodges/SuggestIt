import {
    Link,
    useFetcher,
    useLoaderData,
    useNavigate,
    useNavigation,
} from 'react-router-dom';
import {
    getCardSuggestions,
    getCards,
    onDeleteCard,
    onDeleteSuggestion,
} from '../../../utils/service';
import { useEffect, useState } from 'react';
import { EmailShareButton } from 'react-share';

let cardId;

export async function loader({ params }) {
    cardId = params.cardId;
    const res = await getCards(cardId);
    const suggestions = await getCardSuggestions(cardId);
    // console.log('suggs=='+suggestions);
    const result = { res, suggestions };
    // console.log('result==>'+result);
    return result;
}

export default function CardItem() {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const { res, suggestions } = useLoaderData();
    // console.log('result==>' + suggestions);

    // console.log('res=='+res,'sugg=='+suggs);

    const [suggs, setSuggs] = useState([]);
    // const [likes, setLikes] = useState([]);

    const ownerId = res._ownerId;
    const cardId = res._id;
    const brand = res.brand;
    const createdOn = res._createdOn;
    const updatedOn = res._updatedOn;
    // const suggested = suggs;
    // console.log('sgged=='+suggested);

    useEffect(() => {
        suggestions && setSuggs(suggestions);
    }, [setSuggs, suggestions]);
    // console.log('suggs--' + suggs);
  
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

    return (
        <section className='details-view container'>
            <h2>Details</h2>
            {
                <>
                    <article className='sugg-card details detailed-card'>
                        <header className='card-header details-header'>
                            <h5 className='brand'>{brand}</h5>
                        </header>

                        <main className='card-main'>
                            <p>HERE GO THE SUGGESTIONS</p>
                            <ul className='sugg-list'>
                                {/* SUGGESTIONS */}
                                {suggs &&
                                    suggs.map(
                                        ({
                                            _ownerId,
                                            suggestion,
                                            _cardId,
                                            _createdOn,
                                            _updatedOn,
                                            _id,
                                        }) => {
                                            return (
                                                <li
                                                    className='sugg-item'
                                                    key={_id}
                                                    id={_id}
                                                >
                                                    <div className='sugg-item-wrapper'>
                                                        <p className='sugg-text'>
                                                            {suggestion}

                                                            {/* <!--IF OWNER & NOT TIMED OUT --> */}
                                                            <span className='user-sug-list'>
                                                                <Link
                                                                    to={`/suggestions/${_id}`}
                                                                    className='edit-user-sugged link'
                                                                >
                                                                    Edit
                                                                </Link>
                                                                <Link
                                                                    onClick={() => {
                                                                        if (window.confirm('Are you sure you want to delete?')) {
                                                                            onDeleteSuggestion(_id, token);
                                                                            navigate(`/cards/${cardId}`);
                                                                        }
                                                                    }}
                                                                    className='delete-user-sugged link'
                                                                >
                                                                    Delete
                                                                </Link>
                                                            </span>
                                                        </p>

                                                        <p className='sugg-ranking'>
                                                            <span className='rank'>
                                                                {/* {sugg.rank} */}
                                                                15
                                                            </span>

                                                            {/* <!-- LIKE DISABLED FOR GUESTS & OWNERS -->
                                            <!--===!? LIKE LIMITED voting!?=== --> */}
                                                            <button className='sugg-like-link'>
                                                                {/* if voted down=>vote up */}
                                                                <i className='like fa-solid fa-circle-up'></i>
                                                                {/* if voted up=>vote down */}
                                                                <i className='fa-solid fa-circle-down'></i>
                                                            </button>
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                            // {/* <!-- li end--> */}}
                                        }
                                    )}
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
