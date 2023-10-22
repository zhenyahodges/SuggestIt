import { useEffect, useState } from 'react';
import {
    deleteLike,
    getOneLike,
    getSuggestionLikesCount,
    postLike,
} from '../../../../services/likesService';
import { getCards } from '../../../../services/cardService';
export default function SuggLikesItem({
    userId,
    token,
    ownerId,
    id,
    author,
    cardId,
}) {

    const suggId = id;

    // GET CARD OWNER
    const [cardOwner, setCardOwner] = useState(()=>{
        async function fetchCardOwner() {
            const res = await getCards(cardId);
            setCardOwner(res._ownerId);
        }
        fetchCardOwner();

    });

    // IF LOGGED USER HAS LIKED SUGGESTION OR NOT
    const [hasLiked, setHasLiked] = useState(()=>{
        const searchQuery = encodeURIComponent(`suggestionId="${suggId}"`);
            const url = `http://localhost:3030/data/likes?where=${searchQuery}`;
            fetch(url, {
                method: 'GET',
            })
                .then((res) => {
                    if (res.status === 404) {
                        return setHasLiked(false);
                    }
                    if (!res.ok) {
                        throw new Error(`${res.status} - ${res.statusText}`);
                    }
                    return res.json();
                })
                .then((data) => {
                    if (data) {
                        const result = data.find((item) => item.userId === userId);
                        if (result !== undefined && result !== null) {
                            return setHasLiked(true);
                        } else {
                            return setHasLiked(false);
                        }
                    } else {
                        return setHasLiked(false);
                    }
                })
                .catch((err) => {
                    return console.log(`Error: ${err.message}`);
                });
    });    

    // GET SUGGLIKE COUNT
    const [count, setCount] = useState(()=>{
        async function fetchSuggestionsCount() {
            const res = await getSuggestionLikesCount(suggId);
            setCount(res);
        }
        fetchSuggestionsCount();
    });

    let canLike = false;
    if (token && author !== userId && userId !== cardOwner) {
        canLike = true;
    }

    async function onLike() {
        await postLike(suggId, token, userId);
        setCount(count + 1);
        setHasLiked(true);
    }

    async function onDislike() {
        const likeId = await getOneLike(suggId, userId);
        await deleteLike(likeId, token);

        setCount(count - 1);
        setHasLiked(false);
    }

    return (
        <p className='sugg-ranking'>
            <span className='rank'>{count ? count : 0}</span>

            {/* LIKE DISABLED FOR GUESTS & OWNERS  */}
            {canLike && !hasLiked && (
                <span className='sugg-like-link' onClick={() => onLike()}>
                    <i className='like fa-solid fa-circle-up'></i>
                </span>
            )}
            {/* DISLIKE */}
            {canLike && hasLiked && (
                <span className='sugg-like-link' onClick={() => onDislike()}>
                    <i className='fa-solid fa-circle-down'></i>
                </span>
            )}
        </p>
    );
}
