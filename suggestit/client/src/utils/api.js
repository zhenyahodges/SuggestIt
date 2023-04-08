const baseUrl = 'http://localhost:3030';

export async function getCards(id) {
    const url = id
        ? `${baseUrl}/jsonstore/cards/${id}`
        : `${baseUrl}/jsonstore/cards`;
    const res = await fetch(url);
    // console.log(res);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) {        
        return null;
    }
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
    if (res.statusCode === 204) {
        console.log('empty');
        return {};
    }
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

// export async function getUserCards(token) {
//           // console.log(token);
        
//         const res = await fetch(`${baseUrl}/users/me`, {
//         method: 'get',
//         headers:{
//             // 'Content-Type': 'application/json',
//             'X-Authorization:': token,
//         }       
//     });
  
//     if (!res.ok) {
//         throw new Error(`${res.status} - ${res.statusText}`);
//     }
//     // if (res.statusCode === 204) {
//     //     console.log('empty');
//     //     return {};
//     // }
//     const data = await res.json();
//     console.log('data--'+data);
//     console.log('obj--'+Object.values(data));
//     // return Object.values(data);
//     return null;
// }

export async function createNewCard(token,brand,userId) { 
    // console.log(brand+'======'+token); 
    const creds={brand};
    const res = await fetch( `${baseUrl}/data/cards`,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(creds)
    });
    // console.log('res--'+res);
    if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
    }
    if (res.status === 204) { 
        console.log(res.status);
        return null;
    }
    const data = await res.json();
    // console.log('data--'+data);
    // console.log(Object.values(data));
    // return Object.values(data);
    return (data);
}
    
// export async function updateCard(ownerId,id,token,data) {  
//     const res = await fetch( `${baseUrl}/jsonstore/cards/${id}`,{
//         method: 'put',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Authorization': token,
//         },
//         body: JSON.stringify(data)
//     });
//     // console.log(res);
//     if (!res.ok) {
//         throw new Error(`${res.status} - ${res.statusText}`);
//     }
//     if (res.status === 204) {        
//         return null;
//     }
//     const data = await res.json();
//     // console.log(Object.values(data));
//     // return Object.values(data);
//     return (data);
// }

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

// export async function logoutUser(token,userId){
//     const creds={userId};
//     const res=await fetch('http://localhost:3030/users/logout', {
//         method: 'get',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Authorization': token,
//         }, 
//         body: JSON.stringify(creds)
//     });
//     if (!res.ok) {
//         throw new Error(`${res.status} - ${res.statusText}`);
//     }
//     if (res.status === 204) { 
//         console.log(res.status);
//         return null;
//     }
//     localStorage.clear();
//     console.log(res);
//     // console.log(Object.values(data));
//     // return Object.values(data);
//     return res;
// }