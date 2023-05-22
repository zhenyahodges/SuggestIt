const baseUrl = 
'http://localhost:3030';
// process.env.NODE_ENV === 'development'
// ? 'http://localhost:3030'
// : 'https://localhost:3031';

export async function getCards(id) {
    const url = id ? `${baseUrl}/data/cards/${id}` : `${baseUrl}/data/cards`;
    const res = await fetch(url);

    if (res.status === 404) {
        return null;
    } else if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
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
    // if (res.statusCode === 204) {
    //     return {};
    // }
    const data = await res.json();
    return data;
}

export async function registerUser(creds) {
    const res = await fetch(`${baseUrl}/users/register`, {
        method: 'post',
        body: JSON.stringify(creds),
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
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
        localStorage.clear();
        return {};
    }
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

     if (res.status === 404) {
        return [];
    } else if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    // if (res.status === 204) {
    //     return null;
    // }

    const data = await res.json();

    return data;
}

export async function getUserCards(userId, token) {
    const uri = `${baseUrl}/data/cards?where=_ownerId LIKE "${userId}"`;
    const encoded = encodeURI(uri);
    const res = await fetch(encoded, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
    if (res.status === 404) {
        return null;
    } else if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    const data = await res.json();
    return data;
}

export async function getUserSuggestions(userId, token) {
    const uri = `${baseUrl}/data/suggestions?where=_ownerId LIKE "${userId}"`;
    const encoded = encodeURI(uri);
    const res = await fetch(encoded, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
    if (res.status === 404) {
        return null;
    } else if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    const data = await res.json();
    return data;
}

export async function createNewCard(token, brand) {
    const creds = { brand };
    const res = await fetch(`${baseUrl}/data/cards`, {
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
    // if (res.status === 204) {
    //     return null;
    // }
    const data = await res.json();
    return data;
}

export async function editCard(token, brand, cardId) {
    const info = { brand };

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
    // if (res.status === 204) {
    //     return null;
    // }
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
    // if (res.statusCode === 204) {
    //     return {};
    // }
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
    // if (res.statusCode === 204) {
    //     return {};
    // }
    const data = await res.json();
    return data;
}

export async function getOneSuggestions(suggestionId, token) {
    const searchQuery = encodeURIComponent(`_id="${suggestionId}"`);
    const relationQuery = encodeURIComponent('author=_ownerId:users');

    const url = `${baseUrl}/data/suggestions?where=${searchQuery}&load=${relationQuery}`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    // if (res.status === 204) {
    //     return null;
    // }
    const data = await res.json();
    return data;
}

export async function onEditSuggestion(
    token,
    cardId,
    suggestion,
    suggestionId
) {
    const info = { suggestion, cardId };

    const res = await fetch(`${baseUrl}/data/suggestions/${suggestionId}`, {
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
    // if (res.status === 204) {
    //     return null;
    // }
    const data = await res.json();
    return data;
}

export async function getCardSuggestions(cardId) {
    const searchQuery = encodeURIComponent(`cardId="${cardId}"`);
    const relationQuery = encodeURIComponent('author=_ownerId:users');

    const url = `${baseUrl}/data/suggestions?where=${searchQuery}&load=${relationQuery}`;
    const res = await fetch(url, {
        method: 'GET',
    });
    if (res.status === 404) {
        return null;
    } else if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
   
    const data = await res.json();
    return data;
}

export async function addSuggestion(token, cardId, suggestion) {
    const info = { suggestion, cardId };

    const res = await fetch(`${baseUrl}/data/suggestions`, {
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

export async function postLike(suggestionId, token, userId) {
    const info = { suggestionId, userId };
    const res = await fetch(`${baseUrl}/data/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(info),
    });
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    // if (res.status === 204) {
    //     return null;
    // }
    const data = await res.json();
    return data;
}

export async function getOneLike(suggId, userId) {
    const searchQuery = encodeURIComponent(`suggestionId="${suggId}"`);
    const url = `http://localhost:3030/data/likes?where=${searchQuery}`;
    const res = await fetch(url, {
        method: 'GET',
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    // if (res.status === 204) {
    //     return null;
    // }
    const data = await res.json();
    let likeId;
    if (data) {
        const result = data.find((item) => item.userId === userId);
        likeId = result._id;
    }

    return likeId;
}

export async function deleteLike(likeId, token) {
    const res = await fetch(`${baseUrl}/data/likes/${likeId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    // if (res.status === 204) {
    //     return null;
    // }
    const data = await res.json();
    return data;
}

export async function getSuggestionLikes(suggestionId) {
    const searchQuery = encodeURIComponent(`suggestionId="${suggestionId}"`);
    const relationQuery = encodeURIComponent('author=_ownerId:users');
    const url = `${baseUrl}/data/likes?where=${searchQuery}&load=${relationQuery}`;
    const res = await fetch(url, {
        metod: 'GET',
    });
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    // if (res.status === 204) {
    //     return null;
    // }
    const data = await res.json();
    return data;
}

// || 2ND CATALOG
export async function getInfos(id) {
    const url = id ? `${baseUrl}/data/infos/${id}` : `${baseUrl}/data/infos`;
    const res = await fetch(url);

    if (res.status === 404) {
        return null;
    } else if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    const data = await res.json();
    return data;
}

export async function createNewInfo(token, title, web, text) {
    const creds = { title, web, text };
    const res = await fetch(`${baseUrl}/data/infos`, {
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
    // if (res.status === 204) {
    //     return null;
    // }
    const data = await res.json();
    return data;
}

export async function editInfo(token, title, web, text, infoId) {
    const info = { title, web, text };
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
    // if (res.status === 204) {
    //     return null;
    // }
    const data = await res.json();
    return data;
}

export async function getUserInfos(userId, token) {
    const uri = `${baseUrl}/data/infos?where=_ownerId LIKE "${userId}"`;
    const encoded = encodeURI(uri);
    const res = await fetch(encoded, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
    });
    if(res.status===404){
        return null;
    }else 
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
  
    const data = await res.json();
    return data;
}

export async function onDeleteInfo(infoId, token) {
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
    // if (res.statusCode === 204) {
    //     return {};
    // }
    const data = await res.json();
    return data;
}
