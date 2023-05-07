import { useLoaderData } from 'react-router-dom';
import { getUserCards } from '../../../utils/service';
import { requireAuth } from '../../../utils/requireAuth';
import CatalogItem from '../../Catalog/CatalogItem/CatalogItem';

export async function loader({ request }) {
    const { userId, token } = await requireAuth(request);
    const cards = await getUserCards(userId, token);
    return cards;
}

export default function UserCards() {
    const cards = useLoaderData();

    return (
        <section className='user published'>
            <h2 className='user-title'>Published Cards</h2>

            <div className='user-article-wrapper'>
                {cards.length>0&& cards.map((c) => <CatalogItem key={c._id} {...c} />)}
                {cards.length===0 && <h3>No items yet</h3>}

            </div>
        </section>
    );
}
