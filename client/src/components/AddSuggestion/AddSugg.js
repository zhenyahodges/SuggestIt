import { Form, redirect, useNavigation, useParams } from 'react-router-dom';
import { addNewSugg } from '../../utils/service';
import { requireAuth } from '../../utils/requireAuth';

// export const create = async (gameId, comment) => {
//     const result = await request.post(baseUrl, { gameId, comment });

//     return result;
// };
export async function action({ request, params }) {
//     console.log(params);
//     const { userId, token } = await requireAuth();
//     const formData = await request.formData();
//     const sugg = formData.get('sugg');

//     try {
//         if (token) {
//             await addNewSugg(token, sugg, userId);
//             // console.log(data);
//             // return null;
//             return redirect(`/users/${userId}`);
//         } else {
//             redirect('login');
//         }
//     } catch (err) {
//         return err.message;
//     }
//     // console.log('here');
//     return null;
//     // const  user=JSON.parse(localStorage.getItem('user'));
//     // const userId=user.userId;
//     // const token=user.token;
//     // const res=await onSuggSubmReq(sugg,cardId,token,userId);
// }

// export const AddSuggestion = () => {
//     const navigation = useNavigation();
//     // const path=useParams();
//     // console.log('PARAA---'+path)

//     return (
//         //  ASK for poll-code auth for suggesting
//         <>
//             {/* <section className="poll-code form-wrapper">
//             <form
//                 action="#"
//                 method="post"
//                 id="poll-code-form"
//                 className="poll-code form"
//             >
//                 <h2>Enter Code</h2>
//                 <input
//                     type="text"
//                     id="poll-code"
//                     name="poll-code"
//                     minLength="6"
//                     maxLength="6"
//                     required
//                 />
//                 <p className="poll-code error-message">
//                     Sorry, this code is incorrect. Please, try again or
//                     obtain a code from your provider first.
//                 </p> */}

//             {/* <span className="poll-code add sugg author" id="add-sugg-author"> 
//             Me
//         </span>  */}
//             {/* <button
//                     // type="submit"
//                     // method="get"
//                     // value="Submit"
//                     className="btn dark subm"
//                     form="poll-code-form"
//                     id="poll-code-btn-form"
//                     disabled
//                 >
//                     Submit
//                 </button>
//             </form>
//         </section> */}

//             {/* //  authorised ADD SUGGESTION form  */}
//             <section className='add-sugg form-wrapper'>
//                 {/*  ?with or without li?  */}
//                 <Form
//                     // action={`/suggestions/${cardId}`}
//                     method='post'
//                     id='add-form'
//                     className='add-sugg form'
//                     name='add-form'
//                 >
//                     <h2>Add a Suggestion</h2>
//                     <p>
//                         <label htmlFor='sugg'>Your Suggestion:</label>
//                     </p>

//                     <textarea
//                         className='sugg-text-add'
//                         id='sugg'
//                         form='add-form'
//                         name='sugg'
//                         rows='4'
//                         cols='50'
//                         maxLength='150'
//                         placeholder='Type your suggestion here'
//                         required
//                     ></textarea>
//                     <span className='add sugg author' id='add-sugg-author'>
//                         Me
//                     </span>
//                     <button
//                         // type="submit"
//                         // method="post"
//                         // value="Submit"
//                         className='add-sugg btn dark subm'
//                         form='add-sugg'
//                         id='btn-add-form'
//                         disabled={navigation.state === 'submitting'}
//                     >
//                         {navigation.state === 'submitting'
//                             ? 'Submitting ...'
//                             : 'Submit'}
//                     </button>
//                 </Form>

//                 {/* SUGG PREVIEW -display for a brief period before confirming ? timed?*/}

//                 {/*  <div className="sugg-item-wrapper">
//                 <p className="sugg-text" placeholder="Suggestion">
//                     <span className="author">
//                         Me
//                     </span>
//                     Another suggestion for you
//                 </p>
//                 <p className="sugg-ranking">
//                     <span className="rank">10</span
//                     ><a className="sugg-like-link"
//                         ><i
//                             className="like fa-solid fa-circle-up"
//                         ></i
//                     ></a>
//                 </p>
//             </div>  */}
//             </section>
//         </>

//         // {/*  END ADD POST  */}
//     );
};
