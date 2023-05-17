import { useNavigate, useNavigation } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Sample from './Sample/Sample';

export default function Home() {
    const navigate = useNavigate();
    const navigation = useNavigation();

    return (
        <section className='welcome window'>
            {/*  <!-- WELCOME --> */}
            <Welcome />

            {/* <!-- SAMPLE  --> */}
            {/* <section className='sample content'>
                <h4 className='samples-title'>Sample</h4>

                <div className='samples wrapper'>                  
                    <Sample />                    
                </div>
            </section> */}

            <div className='more'>
                <button
                    onClick={() => navigate('cards')}
                    className='btn highlight catalog'
                    id='catalog-btn'
                    disabled={navigation.state === 'loading'}
                >
                    {navigation.state === 'loading' ? ':Loading...' : 'Catalog'}
                </button>
            </div>
        </section>
    );
}
