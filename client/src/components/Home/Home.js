import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { getCards } from '../../services/cardService';
import CatalogItem from '../Catalog/CatalogItem/CatalogItem';
import Sample from './Sample/Sample';

export async function loader() {
    const cards = await getCards();
    return cards;
}

export default function Home() {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const cards = useLoaderData();
    const firstCard = cards.length>0? cards.slice(0, 2) : [];
   
    return (
        <section className='welcome window'>
            <Welcome />
            <div className='catalog-wrapper'>
                {firstCard.length>0 ? (
                    firstCard.map((c) => <CatalogItem key={c._id} {...c} />)
                ) : (
                    <Sample />
                )}
            </div>

            <div className='more'>
                <button
                    onClick={() => navigate('cards')}
                    className='btn highlight catalog'
                    id='catalog-btn'
                    disabled={navigation.state === 'loading'}
                >
                    {navigation.state === 'loading' ? 'Loading...' : 'Catalog'}
                </button>
            </div>
        </section>
    );
}
