import { useLoaderData } from 'react-router-dom';
import { requireAuth } from '../../../utils/requireAuth';
import { getUserSuggestions } from '../../../utils/service';
import SuggestionDetail from '../../Catalog/CatalogItem/SuggestionItem/SuggestionDetail';

export async function loader({ request }) {
    const { userId, token } = await requireAuth(request);

    const res = await getUserSuggestions(userId, token);
    return res;
}

export default function UserSuggs() {
    const suggestions = useLoaderData();
    console.log(suggestions);

    return (
        //   {/* <!-- || USER-OWNER SUGGESTIONS --> */}
        <section className='user suggested'>
            <h2 className='user-title'>Suggested</h2>

            <div className='user-sugged-wrapper'>
                <ul className='user-sugged-list'>
                    {suggestions &&
                        suggestions.map((s) => (
                            <SuggestionDetail key={s._id} {...s} />
                        ))}
                </ul>
            </div>
        </section>
    );
}
