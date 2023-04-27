import {
    Link,
    useNavigate,
    useOutletContext,
    useRouteLoaderData,
} from 'react-router-dom';
import { onDeleteSuggestion, postLikes } from '../../../../utils/service';
import { useState } from 'react';

export default function SuggestionDetail(props) {
    const navigate = useNavigate();
    const user = useOutletContext();
    const [hasLiked, setHasLiked] = useState(false);

    const ownerId = props._ownerId;
    const suggestion = props.suggestion;
    const likes = props.likes;
    const cardId = props._cardId;
    const createdOn = props._createdOn;
    const updatedOn = props._updatedOn;
    const id = props._id;
    const author = props.author._id;

    // console.log(likes);

    let userId;
    let token;
    if (user) {
        userId = user.userId;
        token = user.token;
    }

    // console.log('suggdetail-userid--' + userId);
    // console.log('suggdetail-tokn--' + token);

    const canLike = userId && author !== userId;

    async function onLike() {
        // console.log('click');
        const res = await postLikes(id, token, userId);
        // remove hasliked?
        !hasLiked && setHasLiked(true);
        
    }

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
        <li className='sugg-item'>
            <div className='sugg-item-wrapper'>
                <p className='sugg-text'>
                    {suggestion}

                    {/* <!-EDIT/DELETE SUGG-IF OWNER & NOT TIMED OUT --> */}
                    {ownerId === userId &&
                        !(new Date() - new Date(createdOn) > 60000) && (
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
                    <span className='rank'>{likes && likes.length}</span>

                    {/* <!-- LIKE DISABLED FOR GUESTS & OWNERS -->
                                <!--===!? LIKE LIMITED voting!?=== --> */}

                    {canLike && !hasLiked && (
                        <span
                            className='sugg-like-link'
                            onClick={() => onLike()}
                            // onClick={() => increase( _id,token, userId)}
                        >
                            <i className='like fa-solid fa-circle-up'></i>
                        </span>
                    )}
                    {canLike && hasLiked && (
                        <span
                            className='sugg-like-link'
                            onClick={() => onLike()}
                        >
                            <i className='fa-solid fa-circle-down'></i>
                        </span>
                    )}
                </p>
            </div>
        </li>
    );
}
