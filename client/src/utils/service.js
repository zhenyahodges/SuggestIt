import { Link, redirect } from 'react-router-dom';

const baseUrl = 'http://localhost:3030';
// process.env.NODE_ENV === 'development'
// ? 'http://localhost:3030'
// : 'https: //localhost:3030';

export async function getCards(id) {
    const url = id
        ? `${baseUrl}/data/cards/${id}`
        : `${baseUrl}/data/cards`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        console.log('empty');
        return null;
    }
    const data = await res.json();
    return Object.values(data);
}

export async function loginUser(creds) {

    const res = await fetch(`${baseUrl}/users/login`, {
        method: 'post',
        body: JSON.stringify(creds),
    });

    if (!res.ok) {
        throw new Error('Email or password invalid. Please try again.');
    }
    if (res.statusCode === 204) {
        console.log('empty');
        return {};
    }
    const data = await res.json();
    return data;
}

export async function registerUser(creds) {
    // console.log(creds);
    const res = await fetch(`${baseUrl}/users/register`, {
        method: 'post',
        body: JSON.stringify(creds),
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    // if (res.statusCode === 204) {
    //     console.log('empty');
    //     return {};
    // }
    const data = await res.json();
    return data;
}

export async function getUserInfo(token) {
    const res = await fetch(`${baseUrl}/users/me`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        console.log(res.status);
        return null;
    }

    const data = await res.json();

    return data;
}

export async function createNewCard(token, brand, userId) {
 
    const creds = { brand };
    const res = await fetch(`${baseUrl}/data/cards`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(creds),
    });
    // console.log('res--'+res);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        console.log(res.status);
        return null;
    }
    const data = await res.json();
    return data;
}

export async function editCard(token, info, cardId) {
    const res = await fetch(`${baseUrl}/data/cards/${cardId}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(info),
    });
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        return null;
    }
    const data = await res.json();
    return data;
}

export async function getCardSuggestions(id) {
    const url = `${baseUrl}/jsonstore/cards/${id}`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    // if (res.statusCode === 204) {
    //     console.log('empty');
    //     return {};
    // }
    const data = await res.json();
    // console.log(Object.values(data));
    return Object.values(data);
    // return (data);
}

export async function logoutUser(token) {
    const res = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        // localStorage.removeItem('user');
        // localStorage.setItem({});
        localStorage.clear();
        // redirect('/');

        // return (window.location.href = '/');
        return {};
    }
    // return redirect((window.location.href = '/'));
    return res;
}

// export async function onSuggSubmReq(sugg, cardId, token, userId) {
//     const creds = { sugg };
//     // console.log(creds);
//     const res = await fetch(`${baseUrl}/data/cards/${cardId}`, {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Authorization': token,
//         },
//         body: JSON.stringify(creds),
//     });

//     if (!res.ok) {
//         throw new Error(`${res.status} - ${res.statusText}`);
//     }
//     // if (res.statusCode === 204) {
//     //     console.log('empty');
//     //     return {};
//     // }
//     const data = await res.json();
//     // console.log(data);
//     return data;
// }

export async function getUserCards(userId, token) {
    const uri = `${baseUrl}/data/cards?where=_ownerId LIKE "${userId}"`;
    const encoded = encodeURI(uri);
    // console.log(encoded);
    const res = await fetch(encoded,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
            'X-Authorization':token,
        }
    });
    console.log(res);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        console.log('empty');
        return null;
    }
    const data = await res.json();
    return (data);
}

async function onSuggSubmit(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.userId;
    const token = user.token;
    // const res=await onSuggSubmReq(sugg,cardId,token,userId)
}

export async function onDeleteCard(id, token) {
    // console.log('token=='+token+'id=='+id);

    const res = await fetch(`${baseUrl}/data/cards/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.statusCode === 204) {
        console.log('empty');
        return {};
    }
    const data = await res.json();
    // console.log(data);
    return data;
    // return null;
}

export async function addSuggestion(token, sugg, userId) {
    // console.log(brand+'======'+token);
    const creds = { sugg };
    const res = await fetch(`${baseUrl}/data/cards/`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(creds),
    });
    // console.log('res--'+res);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        console.log(res.status);
        return null;
    }
    const data = await res.json();
    // console.log('data--'+data);
    // console.log(Object.values(data));
    // return Object.values(data);
    return data;
}
