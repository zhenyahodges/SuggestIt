import { Outlet, useLoaderData } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { useState } from 'react';

export async function loader() {
    const user = JSON.parse(localStorage.getItem('user'));
    // let userId;
    if (user) {
        // return (userId = user.userId);
        return user;
    } else {
        return null;
    }
}

export default function Root() {
    // const [user,setUser]=useState([]);
    const user= useLoaderData();
    // setUser(res);
    const userId=user.userId;
    // console.log(userId);

    return (
        <>
            <Header props={userId} />
            <main className='page main'>
                <section className='page main container'>
                    <Outlet context={user}/>
                </section>
            </main>
            <Footer />
        </>
    );
}
