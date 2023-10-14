import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { getCards } from '../../services/cardService';
import CatalogItem from '../Catalog/CatalogItem/CatalogItem';


export async function loader() {
    const cards = await getCards();
    return cards;
}

export default function Home() {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const cards = useLoaderData();
    const firstTwoCards=cards.slice(0,2);
    console.log(firstTwoCards);
    

    return (
        <section className='welcome window'>
            <Welcome />
            <div className='catalog-wrapper'>
                {firstTwoCards?.length ? (
                    firstTwoCards.map((c) => <CatalogItem key={c._id} {...c} />)
                ) : (
                    <h3 style={{ marginLeft: '44%' }}>No articles yet</h3>
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
