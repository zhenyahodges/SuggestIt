import { Form, redirect, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import {editCard, getCards } from '../../utils/service';
import { requireAuth } from '../../utils/requireAuth';

export async function loader({request,params}){   
    await requireAuth(request);
    const res = await getCards(params.cardId);
    return res;
}

export async function action({request,params}){
    if (window.confirm('Are you sure you want to submit?')) {
        const {userId,token}=await requireAuth();
        console.log(userId,token);
        const formData= await request.formData();
        const brand=formData.get('brand');
        const cardId=params.cardId;
    
        try{
          if(token){
             await editCard(token,brand,cardId);
               return redirect(`/cards/${cardId}`);
          } else{
            redirect('login');
          }
        } catch (err) {
            return err.message;
        }
    }
   
}


export default function EditCardItem() {
    const navigation = useNavigation();
    const res = useLoaderData();
    const ownerId=res._ownerId;
    const cardId=res._id;
    const brand=res.brand;
  
    const createdOn=res._createdOn;
    const updatedOn=res._updatedOn;

    return (
          <section className='user create edit'>
            <h2 className='user-title'>Edit</h2>

            <div className='user-create-wrapper'>
                <Form
                    method='put'
                    id='edit-card-form'
                    className='create-card form edit'
                >
                    <div className='wrap card-title'>
                        <label htmlFor='brand' className='lbl card-name'>
                            Feedback Form Title / Brand
                        </label>
                        <input
                            type='text'
                            className='card-name'
                            name='brand'
                            id='brand'
                            placeholder='Enter title'
                            minLength='3'
                            maxLength='30'
                            defaultValue={brand}
                            autoFocus
                            required
                        />
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
                        form='edit-card-form'
                        id='btn-edit-form'
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
