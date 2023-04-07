const baseUrl = 'http://localhost:3030';

export async function getCards(id) {
    const url = id
        ? `${baseUrl}/jsonstore/cards/${id}`
        : `${baseUrl}/jsonstore/cards`;
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

export async function loginUser(creds) {
    const res = await fetch(`${baseUrl}/users/login`, {
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

export async function getUser(userId,token) {
          // console.log(token);
        
        const res = await fetch(`${baseUrl}/users/me`, {
        method: 'get',
        headers:{
            'Content-Type': 'application/json',
            'X-Authorization:': token,
        }       
    });
  
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    // if (res.statusCode === 204) {
    //     console.log('empty');
    //     return {};
    // }
    const data = await res.json();
    console.log('data--'+data);
    console.log('obj--'+Object.values(data));
    return Object.values(data);
    // return null;
}
