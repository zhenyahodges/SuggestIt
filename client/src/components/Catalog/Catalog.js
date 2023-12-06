import { useLoaderData } from 'react-router-dom';
import { getAllCards } from '../../services/cardService';
import CatalogItem from './CatalogItem/CatalogItem';

export async function loader() {
    const cards = await getAllCards();
    return cards;
}

export default function Catalog() {
    const cards = useLoaderData();

    return (
        <section className='catalog window'>
            <h2 className='catalog title'>Catalog</h2>

            <div className='catalog-wrapper'>
                {cards?.length ? (
                    cards.map((c) => <CatalogItem key={c._id} {...c} />)
                ) : (
                    <h3 style={{ marginLeft: '44%' }}>No articles yet</h3>
                )}
            </div>
        </section>
    );
}
