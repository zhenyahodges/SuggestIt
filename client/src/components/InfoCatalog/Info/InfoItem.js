import {
    Link,
    useLoaderData,
    useNavigate,
    useNavigation,
} from 'react-router-dom';
import { getInfos, onDeleteInfo } from '../../../utils/service';
import { EmailShareButton } from 'react-share';

let token;
export async function loader({ request, params }) {
    // const cardId = params.infoId;
    const res = await getInfos(params.infoId);
    return res;
}

export default function InfoItem() {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const res = useLoaderData();

    const ownerId = res._ownerId;
    const infoId = res._id;
    const title = res.title;
    const web = res.web;
    const text = res.text;
    // const createdOn = res._createdOn;
    // const updatedOn = res._updatedOn;

    //  console.log( ownerId+'ownerId'+cardId,title,web,text,createdOn,updatedOn);

    const user = JSON.parse(localStorage.getItem('user'));

    let userId;

    if (user) {
        ({ token, userId } = user);
        //  console.log('USER=='+userId+'==TOKEN=='+token);
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
        if (window.confirm('Are you sure you want to submit?')) {
            await onDeleteInfo(infoId, token);
            navigate('/infos');
        }
    };

    function onPrint(e) {
        e.preventDefault();
        window.print();
        return false;
    }

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
                                <div className='card-footer-links-wrapper'>
                                    {/*------- LATER  */}
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
