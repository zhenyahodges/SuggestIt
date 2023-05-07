import { useEffect, useState } from 'react';
import { deleteLike, getOneLike, postLike } from '../../../../utils/service';

export default function SuggLikesItem({ userId, token, ownerId, id, author }) {
    const suggId = id;

    const [hasLiked, setHasLiked] = useState(false);
    const [count, setCount] = useState(0);

    // GET SUGGLIKE COUNT
    useEffect(() => {
        const searchQuery = encodeURIComponent(`suggestionId="${suggId}"`);
        const url = `http://localhost:3030/data/likes?where=${searchQuery}&count`;
        fetch(url, {
            method: 'GET',
        })
            .then((res) => {
                if (res.status === 404) {
                    return [];
                } else if (!res.ok) {
                    throw new Error(`${res.status} - ${res.statusText}`);
                }

                if (res.status === 204) {
                    return null;
                }
                return res.json();
            })
            .then((result) => setCount(result))
            .catch((err) => {
                console.log(`Error: ${err.message}`);
            });
    }, [id, setCount, suggId]);

    useEffect(() => {
        const searchQuery = encodeURIComponent(`suggestionId="${suggId}"`);
        const url = `http://localhost:3030/data/likes?where=${searchQuery}`;
        fetch(url, {
            method: 'GET',
        })
            .then((res) => {
                if (res.status === 404) {
                    setHasLiked(false);
                    return null;
                } else if (!res.ok) {
                    throw new Error(`${res.status} - ${res.statusText}`);
                }

                if (res.status === 204) {
                    setHasLiked(false);
                    return null;
                }
                return res.json();
            })
            .then((data) => {
                if (data) {
                    const result = data.find((item) => item.userId === userId);
                    if (result !== undefined && result !== null) {
                        return setHasLiked(true);
                    } else {
                        setHasLiked(false);
                        return null;
                    }
                } else {
                    return setHasLiked(false);
                }
            })
            .catch((err) => {
                console.log(`Error: ${err.message}`);
            });
    }, [suggId, userId]);

    const canLike = userId && author !== userId;

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
            <span className='rank'>{count}</span>

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
