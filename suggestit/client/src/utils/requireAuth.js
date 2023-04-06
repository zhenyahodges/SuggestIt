import { redirect } from 'react-router-dom';

export async function requireAuth({request}) {
    const pathname = new URL(request.url).pathname;

    const isLoggedIn = localStorage.getItem('loggedIn');
    
    if (!isLoggedIn) {
        // throw redirect('/login');
        throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);

    }
}


// export const requestFactory = (token) => {

    // if(!token){
    //     const serializedAuth=localStorage.getItem('auth');
        
    //     if(serializedAuth){
    //         const auth=JSON.parse(serializedAuth);
    //         token=auth.accessToken;
    //     }
    // }
    
    //     return {
    //         // get: request.bind(null, 'GET', token),
    //         // post: request.bind(null, 'POST', token),
    //         // put: request.bind(null, 'PUT', token),
    //         // delete: request.bind(null, 'DELETE', token),
    //         // patch: request.bind(null, 'PATCH', token),
      
    //         get: requester.bind(null, 'GET', token),
    //         post: requester.bind(null, 'POST', token),
    //         put: requester.bind(null, 'PUT', token),
    //         delete: requester.bind(null, 'DELETE', token),
    //         patch: requester.bind(null, 'PATCH', token),
    //     };
    // };
