import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { getUserInfos } from '../../../utils/service';
import { requireAuth } from '../../../utils/requireAuth';

export async function loader({ request }) {
    const { userId, token } = await requireAuth(request);
    const infos = await getUserInfos(userId, token);
    return infos;
}

export default function UserInfos() {
    const infos = useLoaderData();
    const navigation = useNavigation();

    return (
        <section className='user published'>
            <h2 className='user-title'>Published</h2>

            <div className='user-article-wrapper'>
                {infos &&
                    infos.map(({ title, text, _createdOn, _id, _ownerId }) => (
                        <article
                            key={_id}
                            className='sugg-card catalog private'
                            id={_id}
                        >
                            <header className='card-header'>
                                <h5 className='brand'>{title}</h5>
                            </header>

                            <main className='card-main'>
                                <p>{text}</p>
                            </main>
                            <footer className='card-footer suggs-card foot'>
                                <div className='card-footer-content'>                                  
                                    <div className='card-footer-links-wrapper'>
                                        <Link
                                            to={`/infos/${_id}`}
                                            className='details-link'
                                            disabled={
                                                navigation.state === 'loading'
                                            }
                                        >
                                            {navigation.state === 'loading'
                                                ? ':Loading...'
                                                : 'Details'}
                                        </Link>
                                    </div>
                                </div>
                            </footer>
                        </article>
                    ))}
            </div>
        </section>
    );
}
