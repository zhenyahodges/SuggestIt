import { redirect } from 'react-router-dom';

// export async function requireAuth({request}) {
    
    export async function requireAuth(request) {
   const pathname=new URL(request.url).searchParams.get('message');
    // console.log(request.url);
    // const url=request.url;
    // const pathname = new URL(url).pathname;
    // console.log(pathname);
    // const url= new URL(request.split('/')[0]);

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
        // throw redirect('/login');
        // throw redirect(`login?redirectTo=${pathname}`);
        throw redirect(
            `/login?message=You must log in first.&redirectTo=${pathname}`
        );
    }

    // throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);
    // throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);

   return result;
}
