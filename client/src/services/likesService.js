import { makeRequest } from './makeRequest';

const baseUrl = 'http://localhost:3030/data/likes';

export async function postLike(suggestionId, token, userId) {
    const info = { suggestionId, userId };
    const data = await makeRequest(baseUrl,'','POST', info, {
        'X-Authorization': token,
    });
    return data;
}

export async function getOneLike(suggId, userId) {
    const searchQuery = encodeURIComponent(`suggestionId="${suggId}"`);
    const url = `${baseUrl}?where=${searchQuery}`;
    const data = await makeRequest(url,'', 'GET');

    if (data) {
      const likeId = data.find((item) => item.userId === userId)?._id;
      return likeId;
    }
    return null;
}

export async function deleteLike(likeId, token) {
    const res = await fetch(`${baseUrl}/${likeId}`, {
        method: 'DELETE',
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

export async function getSuggestionLikesCount(suggestionId) {
    const searchQuery = encodeURIComponent(`suggestionId="${suggestionId}"`);
    const url = `${baseUrl}?where=${searchQuery}&count`;
    const res = await fetch(url, {
        metod: 'GET',
    });
    if (res.status === 404) {
        return null;
    }
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    const data = await res.json();
    return data;
}
