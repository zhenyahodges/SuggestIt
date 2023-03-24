import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/suggestions';

export const addSuggestion = async (data) => {
    const result = await request.post(baseUrl, data);
    return result;
};

// RELATIONS!
export const getAllCardSuggestions = async (cardId) => {
    const searchParams= encodeURIComponent(`cardId="${cardId}`);
    const relQuery= encodeURIComponent(`author=_ownerId:users`);

    const result=await request.get(`${baseUrl}?where=${searchParams}&load=${relQuery}`);
const suggestions=Object.values(result);
return suggestions;
};

export const getAllUserSuggestions = async (userId) => {
    const query = encodeURIComponent(`cardId="${userId}`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    const suggestion = Object.values(result);
    return suggestion;
};