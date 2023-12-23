import { Outlet} from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';

export default function Root() {
    return (
        <>
            <Header />
            <main className='page main'>
                <section className='page main container'>
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    );
}
