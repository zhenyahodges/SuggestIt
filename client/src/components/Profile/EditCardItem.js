import { Form, redirect, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import { createNewCard, editCard, getCards } from '../../utils/service';
import { requireAuth } from '../../utils/requireAuth';

export async function loader({params}){   
    const res = await getCards(params.cardId);
    return res;
}

export async function action({request}){
    const {userId,token}=await requireAuth();
    const formData= await request.formData();
    const brand=formData.get('brand');

    try{
      if(token){
         await editCard(token,brand,userId);
           return redirect(`/users/${userId}`);
      } else{
        redirect('login');
      }
    } catch (err) {
        return err.message;
    }
}


export default function EditCardItem() {
    const navigation = useNavigation();
    const card = useLoaderData();
    const [ownerId, brand, createdOn, cardId, suggestions] = card;
  
    // const user = JSON.parse(localStorage.getItem('user'));
    // //  change
    // let userId;
    // let token;
    // if (user) {
    //     ({ token, userId } = user);
    // }

    // let isOwner = false;
    // let isAuthorized = false;

    // if (token) {
    //     isAuthorized = true;
    // }
    // if (ownerId === userId) {
    //     isOwner = true;
    // }

    return (
          <section className='user create edit'>
            <h2 className='user-title'>Edit</h2>

            <div className='user-create-wrapper'>
                <Form
                    // action='/create'
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
                            // defaultValue={}
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
                        form='create-card-form'
                        id='btn-create-form'
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
