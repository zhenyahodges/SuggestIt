import { redirect } from 'react-router-dom';
import { getCards } from '../services/cardService';

export async function ownerRightsNotNeeded(cardId) {
    const res = await getCards(cardId);
    const user = JSON.parse(localStorage.getItem('user'));

    const noOwnerRights = user.userId !== res._ownerId;

    if (noOwnerRights) {
        return noOwnerRights;
    } else {
        throw redirect(`/cards/${cardId}?message=You cannot vote for your own card!`);
    }
}
