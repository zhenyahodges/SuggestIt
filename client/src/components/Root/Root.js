import { Outlet, useLoaderData } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export async function loader() {
    const user = JSON.parse(localStorage.getItem('user'));
    let userId;
    if (user) {
        return (userId = user.userId);
    } else {
        return null;
    }
}

export default function Root() {
    const userId = useLoaderData();

    return (
        <>
            <Header props={userId} />
            <main className='page main'>
                <section className='page main container'>
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    );
}
