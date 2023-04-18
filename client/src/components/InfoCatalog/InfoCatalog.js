import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { getInfos } from '../../utils/service';

export async function loader() {
    const infos = await getInfos();

    // if (infos) {
    return infos;
    // }
    //    return {};
}

export default function InfosCatalog() {
    const infos = useLoaderData();
    const navigation = useNavigation();

    return (
        <section className='catalog window'>
            <h2 className='catalog title'>Infos Catalog</h2>

            <div className='catalog-wrapper'>
                {infos &&
                    infos.map(
                        ({ title, web, text, _createdOn, _id, _ownerId }) => (
                            <article
                                key={_id}
                                className='sugg-card details catalog-view-card'
                                id={_id}
                            >
                                <header className='card-header'>
                                    <h5 className='brand'>{title}</h5>
                                </header>

                                <main className='card-main catalog-view-card'>
                                    <p>{web}</p>
                                    <p>{text}</p>
                                </main>
                                <footer className='card-footer suggs-card foot'>
                                    <div className='card-footer-content'>
                                        {/* <p className='card-footer-text'>
                                        Some text
                                    </p> */}
                                        <div className='card-footer-links-wrapper'>
                                            <Link
                                                to={_id}
                                                className='details-link'
                                                disabled={
                                                    navigation.state ===
                                                    'loading'
                                                }
                                            >
                                                {navigation.state === 'loading'
                                                    ? 'Loading...'
                                                    : 'Details'}
                                            </Link>
                                        </div>
                                    </div>
                                </footer>
                            </article>
                        )
                    )}
            </div>
        </section>
    );
}
