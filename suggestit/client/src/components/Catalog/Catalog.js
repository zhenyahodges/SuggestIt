// import { Link } from 'react-router-dom';
// import { Loader } from '../Loader/Loader';

import { CardItem } from './Card/CardItem';

import { useEffect, useState } from 'react';
// import { getCards } from '../../utils/api';
// import { defer, useLoaderData } from 'react-router-dom';

// export function loader() {
//     return defer({ cards: getCards() });
// }

export const Catalog = () => {
    const [cards, setCards] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/cards')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`res.status`);
                }
                if (res.status === 204) {
                console.log('empty');
                // return {};
                // return console.log('empty');
                }
                // console.log('empty');
                // return {};
                return res.json();
            })
            .then((data) => setCards(Object.values(data)))
            .catch((err) => {
                throw new Error(err);
            });

        // async function loadCards() {
        //     setLoading(true);
        // try {
        //     const data = await getCards();
        //     setCards(data);
        // } catch (err) {
        //     // setErr(err);
        //     console.log(err);
        // } finally {
        //     setLoading(false);
        // }
        // }

        // loadCards();
    }, []);

    return (
        <section className='catalog window'>
            <h2 className='catalog title'>Catalog</h2>

            {/* LOADER show when fetching   */}
            {/* <Loader/> */}

            <div className='catalog-wrapper'>
                {cards && cards.map((c) => <CardItem key={c._id} {...c} />)}
            </div>
        </section>
    );
};
