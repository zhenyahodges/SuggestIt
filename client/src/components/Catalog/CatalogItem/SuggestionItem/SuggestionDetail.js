import {
    Link,
    useNavigate,
    useOutletContext,
    // useRouteLoaderData,
} from 'react-router-dom';
import {

    onDeleteSuggestion,
    
} from '../../../../utils/service';
import SuggLikesItem from './SuggLikesItem';

export default function SuggestionDetail(props) {
    const navigate = useNavigate();
    const user = useOutletContext();

    const ownerId = props._ownerId;
    const suggestion = props.suggestion;
    // const likes = props.likes;
    const cardId = props._cardId;
    const createdOn = props._createdOn;
    // const updatedOn = props._updatedOn;
    const id = props._id;
    let author;
    if( props.author){
        console.log('author--'+props.author);
        author=props.author._id;
    };

    let userId;
    let token;
    if (user) {
        userId = user.userId;
        token = user.token;
    }
    const infos={
        userId,token,ownerId,id,author
    };


    return (
        <li className='sugg-item'>
            <div className='sugg-item-wrapper'>
                <p className='sugg-text'>
                    {suggestion}

                    {/* <!-EDIT/DELETE SUGG-IF OWNER & NOT TIMED OUT --> */}
                    {user &&
                        ownerId === userId &&
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

               <SuggLikesItem {...infos}/>
            </div>
        </li>
    );
}
