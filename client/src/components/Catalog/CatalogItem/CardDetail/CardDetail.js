import {
    Link,
    useLoaderData,
    useNavigate,
    useNavigation,
    useOutletContext,
} from 'react-router-dom';
import { getCards, onDeleteCard } from '../../../../services/cardService';
import SuggestionDetail from '../SuggestionItem/SuggestionDetail';
import { useEffect, useState } from 'react';
import { getCardSuggestions } from '../../../../services/suggestionService';
import { useCurrentUser } from '../../../../hooks/useCurrentUser';
import PrintButton from '../../../Buttons/PrintButton/PrintButton';
import EmailBtn from '../../../Buttons/EmailBtn/EmailBtn';

export async function loader({ request, params }) {
    const cardId = params.cardId;
    const res = await getCards(cardId);
    // const user = JSON.parse(localStorage.getItem('user'));

    const suggestions = await getCardSuggestions(cardId);
    const message = new URL(request.url).searchParams.get('message');
    const result = {
        res,
        suggestions,
        message,
        // user,
    };
    return result;
}

export default function CardDetail() {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const { res, suggestions, message } = useLoaderData();
    const { currentUser } = useCurrentUser();
    const { email, userId, token } = useOutletContext();

    // console.log('DATA=='+email,userId,token)

    const ownerId = res._ownerId;
    const cardId = res._id;
    const brand = res.brand;
    const createdOn = res._createdOn;
    // const updatedOn = res._updatedOn;
    const [isTimedOut, setIsTimedOut] = useState(false);
    // const [isExpired,setIsExpired]=useState(false);

    // owner can edit card only within 1min period
    useEffect(() => {
        const timer = setInterval(() => {
            const timePassed = new Date() - new Date(createdOn) > 60000;

            if (timePassed) {
                setIsTimedOut(true);
                clearInterval(timer);
            } else {
                setIsTimedOut(false);
            }
        }, 10);
    }, [createdOn]);

    // let userId;
    // let token;

    let isAuthorized = false;
    let isOwner = false;
    let canEditCard = false;

    if (token) {
        // userId = user.userId;
        // token = user.token;
        isAuthorized = true;
        isOwner = ownerId === userId;
        canEditCard = ownerId === userId && !isTimedOut;
        console.log('DATA==' + isAuthorized, isOwner, canEditCard,token);
    }

    const onDelete = async () => {
        if (window.confirm('Are you sure you want to delete?')) {
            await onDeleteCard(cardId, token);
            navigate('/cards');
        }
    };

    return (
        <section className='details-view container'>
            <h2>Details</h2>
            {message && <h3 style={{ color: 'red' }}>{message}</h3>}

            {
                <article className='sugg-card details detailed-card'>
                    <header className='card-header details-header'>
                        <h5 className='brand'>{brand}</h5>
                    </header>

                    <main className='card-main'>
                        <ul className='sugg-list'>
                            {/* SUGGESTIONS */}
                            {suggestions &&
                                suggestions.length !== 0 &&
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
                                        <PrintButton />
                                        <EmailBtn />
                                    </>
                                )}

                                {/*  VISIBLE FOR LOGGED OWNER ONLY */}
                                {/* <p className='countdown-text'>
                                    <span className='count-end'>20</span> days
                                    left
                                </p> */}

                                {/* if POLL ENDED  */}
                                {/* <p className="countdown-text">Poll ended</p> */}

                                {/* EDIT/DELETE CARD VISIBLE FOR OWNER IF NOT TIMED OUT */}
                                {isAuthorized && isOwner && (
                                    <>
                                        {canEditCard && (
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
                                        )}
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
