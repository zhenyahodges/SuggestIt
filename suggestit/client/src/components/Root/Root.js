import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import { Header}  from '../Header/Header';
import { Footer } from '../Footer/Footer';

export async function loader() {
    let isLogged = false;
    let whoIsLookin = 'Guest';
    let result = {
        currUser: 'Guest',
        whoIsLookin,
        isLogged,
    };
    
  const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user) {
        result.whoIsLookin = user.email;
        // whoIsLookin = user.email;
        result.isLogged = true;
       
    } else {
        result.whoIsLookin = 'Guest';
        // whoIsLookin = 'Guest';
        // console.log(whoIsLookin);
        // whoIsLookin = user.email;
        result.isLogged = false;
    }
    
    console.log(result);
    // return result;
    return null;
}

export default function Root() {
    const result = useLoaderData();
    console.log(result);

    return(
        <>
        <Header props={result}/>
          <main className='page main'>
            <section className='page main container'>             
                    <Outlet/>
                
            </section>                
        </main>
        <Footer />
    </>
    );
}
