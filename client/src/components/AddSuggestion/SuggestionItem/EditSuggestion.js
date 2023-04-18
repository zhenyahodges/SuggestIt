import { Form, redirect, useLoaderData, useNavigation } from 'react-router-dom';
import { requireAuth } from '../../../utils/requireAuth';
import {
    addSuggestion,
    editSuggestion,
    getCards,
    getOneSuggestions,
    onEditSuggestion,
} from '../../../utils/service';
import { useState } from 'react';
let cardIds;

export async function loader({ request, params }) {
    const { userId, token } = await requireAuth(request);
    // console.log('params=='+Object.entries(params));
    const suggestionId = params.suggestionId;
    const res = await getOneSuggestions(suggestionId, token);
    // const {_ownerId,suggestion,cardId,_createdOn,_id,author}=res[0];
    // console.log('resedit=='+_ownerId,suggestion,cardId,_createdOn,_id);
    // console.log('resedit=='+Object.entries(res));;
    return res;
}

export async function action({ request, params }) {
    if (window.confirm('Are you sure you want to submit?')) {
        const { userId, token } = await requireAuth();
        console.log(userId, token);
        const formData = await request.formData();
        const suggestion = formData.get('suggestion');
        const suggestionId = params.suggestionId;
        const cardId=cardIds;

        try {
            if (token) {
                await onEditSuggestion(token,cardId, suggestion, suggestionId);
                return redirect(`/cards`);
            } else {
                redirect('login');
            }
        } catch (err) {
            return err.message;
        }
    }
}

export default function EditSuggestion() {
    const navigation = useNavigation();
    const res = useLoaderData();
    const { _ownerId, suggestion, cardId, _createdOn,_updatedOn, _id, author } = res[0];
    // const updatedOn=res._updatedOn;
cardIds=cardId;
    return (
        <section className='add-sugg form-wrapper'>
            <Form method='post' id='add-form' className='add-sugg form'>
                <h2>Edit Suggestion</h2>

                <label htmlFor='suggestion'>Your Suggestion:</label>

                <textarea
                    className='sugg-text-add'
                    id='suggestion'
                    form='add-form'
                    name='suggestion'
                    rows='4'
                    cols='50'
                    maxLength='150'
                    placeholder='Type your suggestion here'
                    required
                    defaultValue={suggestion}
                    autoFocus
                ></textarea>
                {/* <span className='add sugg author' id='add-sugg-author'>
                    Me
                </span> */}
                <button
                    className='add-sugg btn dark subm'
                    form='add-form'
                    id='btn-add-form'
                    disabled={navigation.state === 'submitting'}
                >
                    {navigation.state === 'submitting'
                        ? 'Submitting...'
                        : 'Submit'}
                </button>
            </Form>
        </section>
    );
}
