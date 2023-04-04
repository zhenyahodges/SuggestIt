import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';


export default function Root() {
    return(
        <>
        <Header />
          <main className='page main'>
            <section className='page main container'>             
                    <Outlet/>
                
            </section>                
        </main>
        <Footer />
    </>
    );
}
