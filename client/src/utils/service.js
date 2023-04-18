import { Link, redirect } from 'react-router-dom';

const baseUrl = 'http://localhost:3030';
// process.env.NODE_ENV === 'development'
// ? 'http://localhost:3030'
// : 'https: //localhost:3030';

export async function getCards(id) {
    const url = id ? `${baseUrl}/data/cards/${id}` : `${baseUrl}/data/cards`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        console.log('empty');
        return null;
    }
    const data = await res.json();
    return data;
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

export async function getUserCards(userId, token) {
    const uri = `${baseUrl}/data/cards?where=_ownerId LIKE "${userId}"`;
    const encoded = encodeURI(uri);
    // console.log(encoded);
    const res = await fetch(encoded, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
    // console.log(res);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        console.log('empty');
        return null;
    }
    const data = await res.json();
    return data;
}

export async function getUserSuggestions(userId, token) {
    const uri = `${baseUrl}/data/suggestions?where=_ownerId LIKE "${userId}"`;
    const encoded = encodeURI(uri);
    // console.log(encoded);
    const res = await fetch(encoded, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
    // console.log(res);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        console.log('empty');
        return null;
    }
    const data = await res.json();
    // console.log(Object.values(data));
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

export async function editCard(token, brand,cardId) {
    const info={brand};

    const res = await fetch(`${baseUrl}/data/cards/${cardId}`, {
        method: 'PUT',
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

export async function onDeleteCard(id, token) {
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
    return data;
}

export async function onDeleteSuggestion(id, token) {
    const res = await fetch(`${baseUrl}/data/suggestions/${id}`, {
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
    return data;
}

export async function getCardSuggestions(cardId) {
    const searchQuery = encodeURIComponent(`cardId="${cardId}"`);
    const relationQuery = encodeURIComponent('author=_ownerId:users');

   const url = (`${baseUrl}/data/suggestions?where=${searchQuery}&load=${relationQuery}`);
    const res = await fetch(url, {
        method: 'GET',        
    });
    // console.log('getres=='+res);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        console.log('empty');
        return null;
    }
    const data = await res.json();
    // console.log(data);
    // return Object.values(data);
    return (data);
}

export async function addSuggestion(token,cardId,suggestion) {
    // console.log(brand+'======'+token);
    const info = { suggestion,cardId };
    // console.log('tcf----'+token,cardId,suggestion);
    // console.log(''+fo);
    // console.log('INFO---'+info);

    const res = await fetch(`${baseUrl}/data/suggestions`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(info),
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
    // console.log('dataservice--'+data);
    console.log(Object.values(data));
    // return Object.values(data);
    return data;
}

// || 2ND CATALOG

export async function getInfos(id) {
    const url = id ? `${baseUrl}/data/infos/${id}` : `${baseUrl}/data/infos`;
    const res = await fetch(url);
// console.log('RESGETINFOS=='+res);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        console.log('empty');
        return null;
    }
    const data = await res.json();  
    return data;
}

export async function createNewInfo(token, title, web,text, userId) {
    //  check creds!
    const creds = { title, web,text };
    // console.log('CREDS' + creds);
    const res = await fetch(`${baseUrl}/data/infos`, {
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

export async function editInfo(token, title, web,text, infoId) {
    const info={title, web,text,};
    // console.log(info);
    // console.log(infoId);
    // console.log(token);
    const res = await fetch(`${baseUrl}/data/infos/${infoId}`, {
        method: 'PUT',
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

export async function getUserInfos(userId, token) {
    const uri = `${baseUrl}/data/infos?where=_ownerId LIKE "${userId}"`;
    const encoded = encodeURI(uri);
    // console.log(encoded);
    const res = await fetch(encoded, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
    // console.log(res);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {
        console.log('empty');
        return null;
    }
    const data = await res.json();
    return data;
}

export async function onDeleteInfo(infoId, token) {
    // console.log('token=='+token+'id=='+id);

    const res = await fetch(`${baseUrl}/data/infos/${infoId}`, {
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
