import { useLoaderData } from 'react-router-dom';
import { getUserCards } from '../../utils/service';
import { requireAuth } from '../../utils/requireAuth';
import CatalogItem from '../Catalog/CatalogItem/CatalogItem';

export async function loader({ request }) {
    const { userId, token } = await requireAuth(request);
    const cards = await getUserCards(userId, token);
    return cards;
}

export default function UserCards() {
    const cards = useLoaderData();
    console.log(cards[0]._id);

    return (
        <section className='user published'>
            <h2 className='user-title'>Published</h2>

            <div className='user-article-wrapper'>
                {cards && cards.map((c) => <CatalogItem key={c._id} {...c} />)}
            </div>
        </section>
    );
}
