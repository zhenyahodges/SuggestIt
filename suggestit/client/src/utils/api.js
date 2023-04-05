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
    console.log(Object.values(data));
    return Object.values(data);
    // return (data);
}
