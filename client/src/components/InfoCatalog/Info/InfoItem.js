import {
    Link,
    useLoaderData,
    useNavigate,
    useNavigation,
} from 'react-router-dom';
import { getInfos, onDeleteInfo } from '../../../utils/service';
import { requireAuth } from '../../../utils/requireAuth';

export async function loader({ params }) {
    //    let infoId = params.infoId;
    const res = await getInfos(params.infoId);
    return res;
}
export async function action({ request, params }) {
    const { userId, token } = await requireAuth();
    const formData = await request.formData();
    console.log(formData);
    const data = Object.entries(formData);
    console.log(data);

    return null;
}

export default function InfoItem() {
    const info = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();

    const [ownerId, title, text, web,createdOn, infoId] = info;
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
        // const result = confirm('Are you sure you want to delete this card?');
        // if (result) {
        await onDeleteInfo(infoId, token);
        // navigate(-1);
        // }
    };

    return (
        //  DETAILS vis for all
        <section className='details-view container'>
            <h2>Details</h2>
            {
                // TODO:!!! Hide overflow!!!from Details?! or SHOW ONLY FIRST N sugg
                <>
                    <article className='sugg-card details detailed-card'>
                        <header className='card-header details-header'>
                            <h5 className='brand'>{title}</h5>
                        </header>

                        <main className='card-main'>
                            <p>{web}</p>
                            <p>{text}</p>
                           
                        </main>

                        <footer className='card-footer sugg-card foot'>
                            <div className='card-footer-content'>
                                {/* <p className='card-footer-owner'>Owner</p> */}
                                {/* <p className='card-footer-text'>
                                    Thank you for your contributions!
                                </p> */}

                                <div className='card-footer-links-wrapper'>
                                    {/* ADD-SUGGESTION LINK: visible for LOGGED (NOT OWNERS?) */}
                                    {/* {isAuthorized && !isOwner && (
                                        // <AddSuggestion onsuggubmit={onsuggubmit}/>
                                        <Link
                                            to={`/suggestions/${cardId}`}
                                            className='add-sugg-link'
                                        >
                                            Suggest
                                        </Link>
                                    )} */}

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
                                            <Link
                                                to={`/infos/${infoId}/edit`}
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
