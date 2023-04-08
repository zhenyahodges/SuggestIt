import { redirect } from 'react-router-dom';

// export async function requireAuth({request}) {
    // return new URL(request.url).searchParams.get("message")

// function Login() {
//     const message = useLoaderData()
    // { message && <h2>{message}</h2> }
    // <h1>Login page goes here</h1>
export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname
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
        throw redirect(`login?redirectTo=${pathname}`);
    }

    // throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);
    // throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);

   return result;
}
