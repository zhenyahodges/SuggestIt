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

    const data = await makeRequest(baseUrl, `/${suggestionId}`, 'PUT', info, {
        'X-Authorization': token,
    });
    return data;
}

export async function getCardSuggestions(cardId) {
    const searchQuery = encodeURIComponent(`cardId="${cardId}"`);
    const relationQuery = encodeURIComponent('author=_ownerId:users');
    const url = `${baseUrl}?where=${searchQuery}&load=${relationQuery}`;
    const data = await makeRequest(url, '', 'GET', null, null);
    return data;
}

export async function addSuggestion(token, cardId, suggestion) {
    const info = { suggestion, cardId };

    return await makeRequest(baseUrl, '', 'POST', info, {
        'X-Authorization': token,
    });
}
