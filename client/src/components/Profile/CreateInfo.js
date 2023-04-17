import { Form, redirect, useNavigation } from 'react-router-dom';
import { createNewInfo } from '../../utils/service';
import { requireAuth } from '../../utils/requireAuth';

export async function action({ request }) {
    if(window.confirm('Are you sure you want to submit?')){
        const { userId, token } = await requireAuth();

        const formData = await request.formData();
        const title = formData.get('title');
        const web = formData.get('web');
        const text = formData.get('text');
        // console.log(title, web);
        // const info={
        //     title,text,web
        // };
    
        try {
            if (token) {
                await createNewInfo(token, title, web,text, userId);
            //    console.log('CREATE=='+token, title, web,text, userId);
                return redirect('/infos');
            } else {
                redirect('login');
            }
        } catch (err) {
            return err.message;
        }
    }
    
}

export default function CreateCard() {
    const navigation = useNavigation();
    return (
        <section className='user create'>
            <h2 className='user-title'>Create</h2>
            <div className='user-create-wrapper'>
                <Form
                    method='post'
                    id='create-info-form'
                    className='create-card form'
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
                            autoFocus
                            required
                        />
                    </div>
                    <div className='wrap card-title'>
                        <label htmlFor='web' className='lbl card-name'>
                            Website
                        </label>
                        <input
                            type='text'
                            className='card-name'
                            name='web'
                            id='web'
                            placeholder='Enter title'
                            minLength='3'
                            maxLength='30'
                            required
                        />
                    </div>
                    <div className='wrap card-title'>
                    <label htmlFor='text' className='lbl card-name'>
                            Text
                        </label>
                    <textarea
                                    className='sugg-text-add'
                                    id='text'
                                    form='create-info-form'
                                    name='text'
                                    rows='4'
                                    cols='50'
                                    maxLength='300'
                                    placeholder='Type your text here'                                  
                                    required
                                ></textarea>
                    </div>
                   

                    {/* LATER--CODE */}
                    {/* <div className='wrap card-code'>
                        <label htmlFor='card-code' className='lbl card-code'>
                            Create Code
                        </label>
                        <!-- ?!POLL-ID?! -->
                        <input
                            type='text'
                            className='card-code'
                            name='card-code'
                            id='card-code'
                            minLength='6'
                            maxLength='6'
                            placeholder='Create form code'
                            required
                        />
                    </div> */}
                    {/* <div className="wrap card-timeout">
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
                          min="2023-04-13"
                        //   max="2023-06-20"
                        //   value="2023-03-01"
                          required
                      />
                  </div> */}

                    <button
                        // type='submit'
                        // method='post'
                        // value='Create'
                        className='create btn dark subm'
                        form='create-info-form'
                        id='btn-info-form'
                        disabled={navigation.state === 'submitting'}
                    >
                        {navigation.state === 'submitting'
                            ? 'Submitting ...'
                            : 'Submit'}
                    </button>
                </Form>
                {/* AFTER SUBMISSION REDIRECT TO CARD FOR EDIT VIEW */}
            </div>
        </section>
    );
}
