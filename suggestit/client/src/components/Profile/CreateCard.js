export default function CreateCard() {
    return (
        //   {/* <!-- || sec USER-OWNER CREATE polls --> */}
        <section className='user create'>
            <h2 className='user-title'>Create</h2>

            {/* <!-- LOADER show when fetching --> */}
            {/* <Loader/> */}

            <div className='user-create-wrapper'>
                <form
                    action='#'
                    method='post'
                    id='create-card-form'
                    className='create-card form'
                >
                    <div className='wrap card-title'>
                        <label htmlFor='card-name' className='lbl card-name'>
                            Feedback Form Title
                        </label>
                        <input
                            type='text'
                            className='card-name'
                            name='card-name'
                            id='card-name'
                            placeholder='Enter title'
                            minlength='3'
                            maxlength='30'
                            required
                        />
                    </div>
                    <div className='wrap card-code'>
                        <label htmlFor='card-code' className='lbl card-code'>
                            Create Code
                        </label>
                        {/* <!-- ?!POLL-ID?! --> */}
                        <input
                            type='text'
                            className='card-code'
                            name='card-code'
                            id='card-code'
                            minlength='6'
                            maxlength='6'
                            placeholder='Create form code'
                            required
                        />
                    </div>
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
                          value="2023-03-01"
                          required
                      />
                  </div> --> */}

                    <button
                        type='submit'
                        method='post'
                        value='Create'
                        className='create btn dark subm'
                        form='create-card-form'
                        id='btn-create-form'
                        disabled
                    >
                        Submit
                    </button>
                </form>
                {/* <!-- <article className="create sugg-card catalog private">
                  <header
                      className="card-header  suggestit-brand"
                  >
                      <h5 className="brand">
                          Your Brand
                      </h5>
                  </header>

                  <main className="card-main">
                      <ul className="sugg-list" role="list">
                         
                      </ul>
                  </main>
                  <footer
                      className="card-footer suggs-card foot"
                  >
                      <div className="card-footer-content">
                          <p className="card-footer-text">
                              Thank you for your
                              contributions!
                          </p>
                          <div
                              className="card-footer-links-wrapper"
                          >
                              <a
                                  href="#"
                                  className="details-link"
                                  >Details</a
                              >
                              <a
                                  href="#"
                                  className="add-sugg-link"
                                  >Suggest</a
                              >
                          </div>
                      </div>
                  </footer>
              </article> --> */}
            </div>
        </section>
    );
}
