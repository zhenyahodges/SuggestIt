import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <section className='404 window'>
            <>
                <h2 className='404 title'>Page Not Found</h2>
                <Link to='/'>Home</Link>
            </>
        </section>
    );
};
