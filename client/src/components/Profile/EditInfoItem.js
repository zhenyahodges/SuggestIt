import { Form, redirect, useLoaderData, useNavigation } from 'react-router-dom';
import { editInfo, getInfos } from '../../utils/service';
import { requireAuth } from '../../utils/requireAuth';

export async function loader({ request, params }) {
    await requireAuth(request);
    const res = await getInfos(params.infoId);
    return res;
}

export async function action({ request, params }) {
    const { userId, token } = await requireAuth();
    const formData = await request.formData();
    const title = formData.get('title');
    const text = formData.get('text');
    const infoId = params.cardId;
    const info = {
        title,
        text,
    };

    try {
        if (token) {
            await editInfo(token, info, infoId);
            return redirect(`/users/${userId}`);
        } else {
            redirect('login');
        }
    } catch (err) {
        return err.message;
    }
}

export default function EditInfoItem() {
    const navigation = useNavigation();
    const card = useLoaderData();
    const [ownerId, title, text, createdOn, infoId, suggestions] = card;

    return (
        <section className='user create edit'>
            <h2 className='user-title'>Edit</h2>

            <div className='user-create-wrapper'>
                <Form
                    method='put'
                    id='edit-info-form'
                    className='create-card form edit'
                >
                    <div className='wrap card-title'>
                        <label htmlFor='title' className='lbl card-name'>
                            Title
                        </label>
                        <input
                            type='text'
                            className='card-name'
                            name='title'
                            id='title'
                            placeholder='Enter title'
                            minLength='3'
                            maxLength='30'
                            defaultValue={title}
                            required
                        />
                    </div>
                    <div className='wrap info-decsription'>
                        <label htmlFor='text'>Info Description</label>
                        <textarea
                            className='sugg-text-add'
                            id='text'
                            form='edit-info-form'
                            name='text'
                            rows='4'
                            cols='50'
                            maxLength='500'
                            placeholder='Type Info Description Here'
                            required
                        ></textarea>
                    </div>

                    {/* LATER--CODE */}

                    {/* <!-- <div className="wrap card-timeout">
                      <label
                          htmlFor="card-timeout"
                          className="lbl card-timeout"
                          >End Date</label
                      >
                      <input
                          type="date"
                          className="card-timeout"
                          name="card-timeout"
                          id="card-timeout"
                          min="2023-03-20"
                          max="2023-06-20"
                        //   value="2023-03-01"
                          required
                      />
                  </div> --> */}

                    <button
                        // type='submit'
                        // method='post'
                        // value='Create'
                        className='create btn dark subm'
                        form='edit-info-form'
                        id='btn-edit-form'
                        disabled={navigation.state === 'submitting'}
                    >
                        {navigation.state === 'submitting'
                            ? 'Submitting ...'
                            : 'Submit'}
                    </button>
                </Form>
                {/* AFTER SUBMISSION REDIRECT TO Info FOR EDIT VIEW? */}
            </div>
        </section>
    );
}
