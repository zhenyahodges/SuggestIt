import { useLoaderData, useNavigation } from 'react-router-dom';
import { getCards } from '../../utils/service';
import CatalogItem from './CatalogItem/CatalogItem';

export async function loader() {
    const cards = await getCards();
    // if (cards) {
    return cards;
    // }
    // return null;
}

export default function Catalog() {
    const cards = useLoaderData();
    // console.log(Object.entries(cards));
    const navigation = useNavigation();

    return (
        <section className='catalog window'>
            <h2 className='catalog title'>Catalog</h2>

            <div className='catalog-wrapper'>
                {cards && cards.map((c) =>  <CatalogItem key={c._id} {...c} />)}

                {cards.length === 0 && (
                    <h3 style={{ marginLeft: '44%' }}>No articles yet</h3>
                )}
            </div>
        </section>
    );
}
