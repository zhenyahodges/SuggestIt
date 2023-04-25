import { useLoaderData } from 'react-router-dom';
import { requireAuth } from '../../utils/requireAuth';
import { getUserSuggestions } from '../../utils/service';

export async function loader({ request }) {
    const { userId, token } = await requireAuth(request);
    const res = await getUserSuggestions(userId,token);
    return res;
}

export default function UserSuggs() {
    const suggestions = useLoaderData();
    const owner=suggestions._ownerId;
    // console.log('OWNER--'+owner);
       
    return (
        //   {/* <!-- || USER-OWNER SUGGESTIONS --> */}
        <section className='user suggested'>
            <h2 className='user-title'>Suggested</h2>

            <div className='user-sugged-wrapper'>
                <ul className='user-sugged-list'>
                   {suggestions && suggestions.map(({_ownerId,suggestion,cardId,_createdOn,_updatedOn,_id})=>(
                     <li key={_id} id={_id}  className='user-sugged-li-items'>
                        {suggestion}
                        {/* <!-- VIS IF OWNER & NOT TIMED OUT --> */}
                        <span className='user-sug-list'>
                            <a href='/' className='edit-user-sugged link'>
                                Edit
                            </a>
                            <a href='/' className='delete-user-sugged link'>
                                Delete
                            </a>
                        </span>
                    </li>                
                   ))
                    }
                </ul>
            </div>
        </section>
    );
}
