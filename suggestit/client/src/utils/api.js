const baseUrl = 'http://localhost:3030';

export async function getCards(id) {
    const url = id
        ? `${baseUrl}/jsonstore/cards/${id}`
        : `${baseUrl}/jsonstore/cards`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.statusCode === 204) {
        return console.log('empty');
    }
    const data = await res.json();
    // console.log(Object.values(data));
    return Object.values(data);
    // return (data);
}

// export async function getCard(id) {
//     const url = id
//         ? `${baseUrl}/jsonstore/cards/${id}`
//         : `${baseUrl}/jsonstore/cards`;
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`${res.status} - ${res.statusText}`);
//     }
//     if (res.statusCode === 204) {
//         return console.log('empty');
//     }
//     const data = await res.json();
//     // console.log(Object.values(data));
//     return Object.values(data);
//     // return (data);
// }

export async function getSuggestions(id) {
    const url = `${baseUrl}/jsonstore/cards/${id}`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.statusCode === 204) {
        return console.log('empty');
    }
    const data = await res.json();
    // console.log(Object.values(data));
    return Object.values(data);
    // return (data);
}

export async function loginUser(creds) {
    const res = await fetch(`${baseUrl}/users/login`, {
        method: 'post',
        body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }

    return data;
}

export async function registerUser(creds) {
    const res = await fetch(`${baseUrl}/users/register`, {
        method: 'post',
        body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }

    return data;
}

export async function getUser(creds) {
    const res = await fetch(`${baseUrl}/users/${creds._id}`, {
        method: 'get',
        body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }

    return data;
}
