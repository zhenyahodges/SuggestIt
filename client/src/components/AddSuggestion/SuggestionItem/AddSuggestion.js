import { Form, redirect, useNavigation } from 'react-router-dom';
import { requireAuth } from '../../../utils/requireAuth';
import { addSuggestion, getCards } from '../../../utils/service';
import { useState } from 'react';

export async function action({ request, params }) {
    if (window.confirm('Are you sure you want to submit?')) {
        const { userId, token } = await requireAuth();
        // console.log(userId, token);
        // console.log('params--' + params, 'req--' + request);
           const cardId = params.cardId;
        // const res = await getCards(cardId);
        console.log('yes');
        // console.log('cardid--'+cardId);

        const formData = await request.formData();
        const suggestion = formData.get('suggestion');
        // console.log('suggestion--'+suggestion);

        try {
            if (token) {
                await addSuggestion(token,cardId,suggestion);
                return redirect(`/cards/${cardId}`);
            } else {
                redirect('login');
            }
        } catch (err) {
            return err.message;
        }
        return token;
    }
}

export default function AddSuggestion() {
    const navigation = useNavigation();


    return (
        <section className='add-sugg form-wrapper'>
            {/* ?with or without li?  */}
            <Form
                // action='/suggestions'
                method='post'
                id='add-form'
                className='add-sugg form'
            >
                <h2>Add a Suggestion</h2>

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
                    // value={formData.suggestion}
                    // onChange={handleSuggChange}
                ></textarea>
                {/* <span className='add sugg author' id='add-sugg-author'>
                    Me
                </span> */}
                <button
                    // type='submit'
                    // method='post'
                    // onSubmit={onSubmitHandler}
                    className='add-sugg btn dark subm'
                    form='add-form'
                    id='btn-add-form'
                    // onSubmit={onSubmit}
                    // onClick={addSuggestion(token,)}
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
