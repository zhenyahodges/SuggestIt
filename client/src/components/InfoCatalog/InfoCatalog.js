import { useLoaderData} from 'react-router-dom';
import { getInfos } from '../../utils/service';
import InfoItem from './InfoItem/InfoItem';

export async function loader() {
    const infos = await getInfos();
    console.log(infos);

    return infos;
}

export default function InfosCatalog() {
    const infos = useLoaderData();
    console.log(infos);

    return (
        <section className='catalog window'>
            <h2 className='catalog title'>Infos Catalog</h2>

            <div className='catalog-wrapper'>
                {infos && infos.map((i) => <InfoItem key={i._id} {...i} />)}

                {infos.length === 0 && (
                    <h3 style={{ marginLeft: '44%' }}>No articles yet</h3>
                )}
            </div>
        </section>
    );
}
