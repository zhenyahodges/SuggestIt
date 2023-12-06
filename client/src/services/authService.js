const baseUrl = 'http://localhost:3030/users';

async function makeRequest(endpoint, method, body, headers) {
    const res = await fetch(`${baseUrl}${endpoint}`, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers,
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (endpoint === '/logout' && res.status === 204) {
        localStorage.clear();
        return {};
    }

    const data = await res.json();
    return data;
}
export async function loginUser(creds) {
    return makeRequest('/login', 'post', creds);
}
export async function registerUser(creds) {
    return makeRequest('/register', 'post', creds);
}

export async function logoutUser(token) {
    return makeRequest('/logout', 'get', null, {
        'Content-Type': 'application/json',
        'X-Authorization': token,
    });
}

export async function getUserInfo(token) {
    return makeRequest('/me', 'get', null, {
        'Content-Type': 'application/json',
        'X-Authorization': token,
    });
}
