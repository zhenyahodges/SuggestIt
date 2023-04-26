import {
    Link,
    useNavigate,
    useOutletContext,
    useRouteLoaderData,
} from 'react-router-dom';
import { onDeleteSuggestion } from '../../../utils/service';

export default function SuggestionDetail(props) {
    // const { res, suggestions } = useRouteLoaderData('cardItem');
    const navigate = useNavigate();
    const user = useOutletContext();

    const ownerId = props._ownerId;
    const suggestion = props.suggestion;
     const likes=props.likes;
    const cardId = props._cardId;
    const createdOn = props._createdOn;
    const updatedOn = props._updatedOn;
    const id = props._id;

    // console.log(likes);  

    // console.log('user--'+Object.entries(user));
    const userId = user.userId;
    const token = user.token;
    console.log(userId);
    console.log(token);

    return (
        <li className='sugg-item'>
            <div className='sugg-item-wrapper'>
                <p className='sugg-text'>
                    {suggestion}

                    {/* <!--IF OWNER & NOT TIMED OUT --> */}
                    {ownerId === userId &&
                        !(new Date() - new Date(createdOn) > 100000) && (
                            <span className='user-sug-list'>
                                <Link
                                    to={`/suggestions/${id}`}
                                    className='edit-user-sugged link'
                                >
                                    Edit
                                </Link>
                                <Link
                                    onClick={() => {
                                        if (
                                            window.confirm(
                                                'Are you sure you want to delete?'
                                            )
                                        ) {
                                            onDeleteSuggestion(id, token);
                                            navigate(`/cards/${cardId}`);
                                        }
                                    }}
                                    className='delete-user-sugged link'
                                >
                                    Delete
                                </Link>
                            </span>
                        )}
                </p>

                <p className='sugg-ranking'>
                    <span className='rank'>
                        {/* {rank && rank={Like(_id)}} */}
                        {/* {likes && likes.length} */}
                        {/* {likesSugg.length} */}
                    </span>

                    {/* <!-- LIKE DISABLED FOR GUESTS & OWNERS -->
                                <!--===!? LIKE LIMITED voting!?=== --> */}
                    <button
                        className='sugg-like-link'
                        // onClick={() =>
                        //     increase(
                        //         _id,
                        //         token,
                        //         userId
                        //     )
                        // }
                    >
                        {/* if voted down=>vote up */}
                        <i className='like fa-solid fa-circle-up'></i>
                        {/* if voted up=>vote down */}
                        {/* <i className='fa-solid fa-circle-down'></i> */}
                    </button>
                    <button
                        className='sugg-like-link'
                        //    onClick={()=>decrease(_id,token)}
                    >
                        <i className='fa-solid fa-circle-down'></i>
                    </button>
                </p>
            </div>
        </li>
    );
}