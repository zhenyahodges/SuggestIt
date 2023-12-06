import { makeRequest } from './makeRequest';

const baseUrl = 'http://localhost:3030/data/cards';

// get all cards
export async function getAllCards() {
    return makeRequest(baseUrl, '', 'GET');
}

// get a specific card
export async function getCard(id) {
    return makeRequest(baseUrl, `/${id}`, 'GET');
}

export async function getUserCards(userId, token) {
    const encodedURI = encodeURI(`${baseUrl}?where=_ownerId LIKE "${userId}"`);
    return makeRequest(encodedURI,'', 'GET', null, {
        'X-Authorization': token,
      });   
}

export async function createNewCard(token, brand) {
    const creds = { brand };
    const res = await fetch(`${baseUrl}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(creds),
    });
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    return data;
}

export async function editCard(token, brand, cardId) {
    const info = { brand };

    const res = await fetch(`${baseUrl}/${cardId}`, {
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

    const data = await res.json();
    return data;
}

export async function onDeleteCard(id, token) {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    return data;
}
