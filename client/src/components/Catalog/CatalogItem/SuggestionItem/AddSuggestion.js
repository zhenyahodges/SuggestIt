import { Form, redirect, useNavigation } from 'react-router-dom';
import { requireAuth } from '../../../../utils/requireAuth';
import { addSuggestion } from '../../../../utils/suggestionService';

export async function action({ request, params }) {
    const cardId = params.cardId;
    if (window.confirm('Are you sure you want to submit?')) {
        const { token } = await requireAuth();
        const cardId = params.cardId;

        const formData = await request.formData();
        const suggestion = formData.get('suggestion');

        try {
            if (token) {
                await addSuggestion(token, cardId, suggestion);
                return redirect(`/cards/${cardId}`);
            } else {
                redirect('login');
            }
        } catch (err) {
            return err.message;
        }
        return token;
    } else {
        return redirect(`/cards/${cardId}`);
    }
}

export default function AddSuggestion() {
    const navigation = useNavigation();

    return (
        <section className='add-sugg form-wrapper'>
            <Form method='post' id='add-form' className='add-sugg form'>
                <h2>Add a Suggestion</h2>
                <label htmlFor='suggestion'>Your Suggestion:</label>
                <textarea
                    className='sugg-text-add'
                    id='suggestion'
                    form='add-form'
                    name='suggestion'
                    rows='4'
                    cols='50'
                    minLength='5'
                    maxLength='150'
                    placeholder='Type your suggestion here'
                    required
                ></textarea>
               
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
