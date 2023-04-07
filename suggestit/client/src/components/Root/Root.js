import { Outlet, useLoaderData } from 'react-router-dom';
import { Header}  from '../Header/Header';
import { Footer } from '../Footer/Footer';

export async function loader() {
    let isLogged = false;
    let whoIsLookin = 'Guest';
    let result = {      
        whoIsLookin,
        isLogged    
    };

  const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        result.whoIsLookin = user.email;  
        result.isLogged = true;
        result.userId=user.userId;      
    } else {
        result.whoIsLookin = 'Guest';        
        result.isLogged = false;
    }    
    return result;

}

export default function Root() {
    const result = useLoaderData();

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
