import { Link } from 'react-router-dom';
import { CardItem } from '../Card/CardItem';
import { Loader } from '../Loader/Loader';

export const Catalog = () => {
    return (
        <section className='catalog window'>
            <h2 className='catalog title'>Catalog</h2>

            {/* LOADER show when fetching   */}
            {/* <Loader/> */}

            <div className='catalog-wrapper'>

                {/* PUBLIC CATALOG  */}

                {/* TODO: MAP FEEDBACK CARDS */}

                {/* <CardItem /> */}

            </div>
        </section>
    );
};
