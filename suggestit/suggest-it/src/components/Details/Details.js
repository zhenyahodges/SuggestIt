import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

import * as cardService from '../../services/cardService';
import { CardItem } from '../Card/CardItem';

export const Details = () => {
    const { cardId } = useParams();
    const [card, setCard] = useState({});
    const [userName, setUserName] = useState('');
    const [suggestion, setSuggestion] = useState('');

    useEffect(() => {
        cardService.getCard(cardId).then((res) => {
            if (!res.ok) {
                throw new Error(`${res.status}`);
            }
            setCard(res);
        });
    }, [cardId]);

    // ADD SUGGESTIONS
    const onSuggSubmit = async (e) => {
        e.preventDefault();

        const result = await cardService.addSuggestion(cardId, {
            userName,
            suggestion,
        });

        setSuggestion((state) => ({
            ...state,
            suggestions: { ...state.suggestions, [result._id]: result },
        }));

        setUserName('');
        setSuggestion('');
    };

    return (
        //  DETAILS vis for all
        <section className='details-view container'>
            <h2>Details</h2>

            {/*  LOADER show when fetching */}
            {/* <Loader/> */}

            {/*  CARD-DETAILS */}
            {/* TODO TO MAP */}
           {/* <CardItem /> */}
        </section>
    );
};
