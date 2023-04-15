import { Outlet, useLoaderData } from 'react-router-dom';
import { Header,loader as headerLoader } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { requireAuth } from '../../utils/requireAuth';
import { useAuth } from '../../context/CurrentUserContext';
import { useEffect, useRef } from 'react';

export async function loader({request}) {

// //     let isLogged = false;
// //     let whoIsLookin = 'Guest';
    // let result = {
// //         whoIsLookin,
// //         isLogged
    // };

  const user = JSON.parse(localStorage.getItem('user'));
let userId;
    if (user) {
// //         result.whoIsLookin = user.email;
// //         result.isLogged = true;
        return userId=user.userId;
    } else {
// //         result.whoIsLookin = 'Guest';
// //         result.isLogged = false;
        return null;
   
}
// result=user;
//     return result;
//     }else{
//         return null;
//     }
// // return result;
}

export default function Root() {
    const userId = useLoaderData();
   console.log('USERID++++'+userId)
    // const { isLogged, setIsLogged } = useAuth();
    // coct 
    // const user = JSON.parse(localStorage.getItem('user'));
    // let whoIsLookin = useRef('Guest');

    // useEffect(() => {
    //     if (user) {
    //         setIsLogged(true);
    //         whoIsLookin = user.email;
    //     } else {
    //         setIsLogged(false);
    //         whoIsLookin = 'Guest';
    //     }
    // }, [setIsLogged]);

    return (
        <>
            <Header props={userId} />
            {/* <Header loader={headerLoader}/> */}
            <main className='page main'>
                <section className='page main container'>
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    );
}
