import { redirect } from 'react-router-dom';

export async function requireAuth({request}) {
    const pathname = new URL(request.url).pathname;

    const user = localStorage.getItem('user');
    const token = user.token;   
    
    if (!token) {
        throw redirect('/login');
        // throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);
        // throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);

    }
}

