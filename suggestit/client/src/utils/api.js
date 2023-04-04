const baseUrl = 'http://localhost:3030/data/cards';

export async function getCards(id) {
    const url = id ? `${baseUrl}/${id}` : `${baseUrl}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`${res.message},${res.status},${res.statusText},${res.headers}`);
    }
    if(res.status===204){
        console.log('NO ITEMS found');
        return {};
    }
    const data = await res.json();
    
    // return data.cards;
    return console.log(data);
}


