import { makeRequest } from './makeRequest';

const baseUrl = 'http://localhost:3030/data/likes';

export async function postLike(suggestionId, token, userId) {
    const info = { suggestionId, userId };
    const data = await makeRequest(baseUrl, '', 'POST', info, {
        'X-Authorization': token,
    }); 
    return data;
}

export async function getOneLike(suggId, userId) {
    const searchQuery = encodeURIComponent(`suggestionId="${suggId}"`);
    const url = `${baseUrl}?where=${searchQuery}`;
    const data = await makeRequest(url, '', 'GET', null);

    if (data) {
        const likeId = data.find((item) => item.userId === userId)?._id;
        return likeId;
    }
    return null;
}

export async function deleteLike(likeId, token) {
    const data = await makeRequest(baseUrl, `/${likeId}`, 'DELETE', null, {
        'X-Authorization': token,
    });
    return data;
}

export async function getSuggestionLikesCount(suggestionId) {
    const searchQuery = encodeURIComponent(`suggestionId="${suggestionId}"`);
    const url = `${baseUrl}?where=${searchQuery}&count`;
    const data = await makeRequest(url, '', 'GET', null);
    return data;
}
