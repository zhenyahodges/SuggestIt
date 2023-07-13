import { redirect, useLoaderData } from 'react-router-dom';
import { editCard, getCards } from '../../../../services/cardService';
import { requireAuth } from '../../../../utils/requireAuth';
import EditCardItemForm from './EditCardItemForm';
import { requireOwnerRights } from '../../../../utils/requireOwnerRights';

export async function loader({ request, params }) {
    await requireAuth(request);
    const cardId = params.cardId;

    const cat='card';
    await requireOwnerRights(cardId,cat);
    
    const res = await getCards(cardId);    
    return res;
}

export async function action({ request, params }) {
    const token = JSON.parse(localStorage.getItem('user.token'));
    const cardId = params.cardId;

    if (window.confirm('Are you sure you want to submit?')) {
        const formData = await request.formData();
        const brand = formData.get('brand');

        try {
            if (token) {
                await editCard(token, brand, cardId);
                return redirect(`/cards/${cardId}`);
            } else {
                return redirect('/login?message=You must log in first.');
            }
        } catch (err) {
            return err.message;
        }
    } else {
        return redirect(`/cards/${cardId}`);
    }
}

export default function EditCardItem() {
    const res = useLoaderData();
    const brand = res.brand;

    return (
        <section className='user create edit'>
            <h2 className='user-title'>Edit</h2>

            <div className='user-create-wrapper'>
                <EditCardItemForm brand={brand} />
            </div>
        </section>
    );
}
