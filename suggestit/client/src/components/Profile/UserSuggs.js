export default function userOwnerSuggs() {
    return (
        //   {/* <!-- || USER-OWNER SUGGESTIONS --> */}
        <section className='user suggested'>
            <h2 className='user-title'>Suggested</h2>

            {/* <!-- LOADER show when fetching --> */}
            {/* <Loader/> */}

            <div className='user-sugged-wrapper'>
                {/* <!-- ???LIST SHOWS/ANY FUNC?! --> */}
                <ul className='user-sugged-list'>
                    <li className='user-sugged-li-items'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid, ut.
                        {/* <!-- VIS IF OWNER & NOT TIMED OUT --> */}
                        <span className='user-sug-list'>
                            <a href='/' className='edit-user-sugged link'>
                                Edit
                            </a>
                            <a href='/' className='delete-user-sugged link'>
                                Delete
                            </a>
                        </span>
                    </li>
                    <li className='user-sugg-li-items'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid, ut.
                    </li>
                </ul>
            </div>
        </section>
    );
}
