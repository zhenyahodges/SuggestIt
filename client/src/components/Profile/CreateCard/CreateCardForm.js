import { Form, useNavigation } from 'react-router-dom';

export default function CreateCardForm(){
    const navigation = useNavigation();
    return(
        <Form
        method='post'
        id='create-card-form'
        className='create-card form'
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
    );
}