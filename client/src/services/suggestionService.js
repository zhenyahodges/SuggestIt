import { makeRequest } from './makeRequest';

const baseUrl = 'http://localhost:3030/data/suggestions';

export async function getUserSuggestions(userId, token) {
    const uri = `${baseUrl}?where=_ownerId LIKE "${userId}"`;
    const encoded = encodeURI(uri);
    const data = await makeRequest(encoded, '', 'GET', null, {
        'X-Authorization': token,
    });
    return data;
}

export async function onDeleteSuggestion(id, token) {
    const data = await makeRequest(baseUrl, `/${id}`, 'DELETE', null, {
        'X-Authorization': token,
    });
    return data;
}

export async function getOneSuggestions(suggestionId, token) {
    const searchQuery = encodeURIComponent(`_id="${suggestionId}"`);
    const relationQuery = encodeURIComponent('author=_ownerId:users');

    const url = `${baseUrl}?where=${searchQuery}&load=${relationQuery}`;
    const data = await makeRequest(url, '', 'GET', null, {
        'X-Authorization': token,
    });

    return data;
}

export async function onEditSuggestion(
    token,
    cardId,
    suggestion,
    suggestionId
) {
    const info = { suggestion, cardId };

    const res = await fetch(`${baseUrl}/${suggestionId}`, {
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

export async function getCardSuggestions(cardId) {
    const searchQuery = encodeURIComponent(`cardId="${cardId}"`);
    const relationQuery = encodeURIComponent('author=_ownerId:users');

    const url = `${baseUrl}?where=${searchQuery}&load=${relationQuery}`;
    const res = await fetch(url, {
        method: 'GET',
    });
    if (res.status === 404) {
        // return null;
        return [];
    } else if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    return data;
}

export async function addSuggestion(token, cardId, suggestion) {
    const info = { suggestion, cardId };

    const res = await fetch(`${baseUrl}`, {
        method: 'post',
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
