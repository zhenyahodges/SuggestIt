export async function makeRequest(baseUrl,endpoint, method, body, headers) {
    const res = await fetch(`${baseUrl}${endpoint}`, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers:{
            'Content-Type': 'application/json',
            ...headers,
        }
    });

    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (endpoint === '/logout' && res.status === 204) {
        localStorage.clear();
        return {};
    }
    if(baseUrl==='http://localhost:3030/data/cards' && res.status===404){
    return [];
    }

    const data = await res.json();
    return data;
}