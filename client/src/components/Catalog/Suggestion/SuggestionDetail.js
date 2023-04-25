import { Link, useNavigate, useOutletContext, useRouteLoaderData } from "react-router-dom";
import { onDeleteSuggestion } from "../../../utils/service";

export default function SuggestionDetail({ _ownerId,
    suggestion,
    likes,
    _cardId,
    _createdOn,
    _updatedOn,
    _id,}) {

        const {res,suggestions}= useRouteLoaderData('cardItem');
        // console.log(Object.entries(suggestons));
     
        // const ownerId = res._ownerId;
        console.log(_ownerId);
        // const cardId = res._id;
        // const brand = res.brand;
        // const createdOn = res._createdOn;
        // const updatedOn = res._updatedOn;

        const user= useOutletContext();
        // console.log('user--'+Object.entries(user));
        const userId=user.userId;
        const token = user.token;
        const navigate=useNavigate();
        console.log(userId);

    return (
        <li
            className='sugg-item'          
        >
            <div className='sugg-item-wrapper'>
                <p className='sugg-text'>
                    {suggestion}

                    {/* <!--IF OWNER & NOT TIMED OUT --> */}
                    {_ownerId === userId &&
                        !(
                            new Date() -
                                new Date(
                                    _createdOn
                                ) >
                            100000
                        ) && (
                            <span className='user-sug-list'>
                                <Link
                                    to={`/suggestions/${_id}`}
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
                                            onDeleteSuggestion(
                                                _id,
                                                token
                                            );
                                            navigate(
                                                `/cards/${_cardId}`
                                            );
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
                        15
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
