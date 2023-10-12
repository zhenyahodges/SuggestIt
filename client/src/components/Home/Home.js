import { useNavigate, useNavigation } from 'react-router-dom';
import Welcome from './Welcome/Welcome';

export default function Home() {
    const navigate = useNavigate();
    const navigation = useNavigation();

    return (
        <section className='welcome window'>
            <Welcome />

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
