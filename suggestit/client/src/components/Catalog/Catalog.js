// import { Link } from 'react-router-dom';
// import { Loader } from '../Loader/Loader';

import { CardItem } from './Card/CardItem';

import { useEffect, useState } from 'react';
import { getCards } from '../../utils/api';
import { defer, useLoaderData } from 'react-router-dom';

export function loader() {
    return defer({ cards: getCards() });
}

export const Catalog = () => {
    const cards=useLoaderData();
    console.log(cards);

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
