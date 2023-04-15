import { useLoaderData } from 'react-router-dom';
import { requireAuth } from '../../utils/requireAuth';

export async function loader({ request }) {
    const { userId, token } = await requireAuth(request);
    // const suggs = await getUserSuggs(userId,token);
    // return suggs;
    return null;
}

export default function userSuggs() {
    // const suggs = useLoaderData();

    return (
        //   {/* <!-- || USER-OWNER SUGGESTIONS --> */}
        <section className='user suggested'>
            <h2 className='user-title'>Suggested</h2>

            <div className='user-sugged-wrapper'>
                <ul className='user-sugged-list'>
                    <li className='user-sugged-li-items'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid, ut.
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
                    <li className='user-sugg-li-items'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid, ut.
                    </li>
                </ul>
            </div>
        </section>
    );
}
