import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/cards';

export const getAllCards = async () => {
    const result = await request.get(baseUrl);
    const cards=Object.values(result);
    return cards;
};

export const createCard=async(cardData) =>{
const result = await request.post(baseUrl,cardData);
// console.log(result);
return result;
};

export const getCard= async (cardId)=>{
    const result = await request.get(`${baseUrl}/${cardId}`);
    return result;
};

export const addSuggestion= async(cardId,data)=>{
    const result=await request.post(`${baseUrl}/${cardId}/suggestions`,data);
    return result;
};