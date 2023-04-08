import { redirect } from 'react-router-dom';

// export async function requireAuth({request}) {
    
    export async function requireAuth() {
//    const pathname=new URL(request.url).searchParams.get('message');

    let isLogged = false;
    let result = {
        isLogged,
    };

    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        result.isLogged = true;
        result.userId = user.userId;
        result.token=user.token;   
    } else {
        result.isLogged = false;      

        // throw redirect(
        //     `/login?message=You must log in first.&redirectTo=${pathname}`
        // );
        throw redirect(
            `/login?message=You must log in first.`
        );
    }

   return result;
}
