import { redirect } from 'react-router-dom';
import { getCards } from '../services/cardService';

export async function requireOwnerRights(cardId) {
    const res = await getCards(cardId);
    const user = JSON.parse(localStorage.getItem('user'));

    const hasOwnerRights = user.userId === res._ownerId;

    if (hasOwnerRights) {
        return hasOwnerRights;
    } else {
        throw redirect(`/cards/${cardId}?message=You are not authorised!`);
    }
}
