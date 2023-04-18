export default function SuggestionItem() {
    <li className='sugg-item'>
        <div className='sugg-item-wrapper'>
            <p id='suggestion' className='sugg-text'>
                {/* <span className='author-nickname'>Me</span> */}
                {/* {suggestion}                */}
                {/*  EDIT & DELETE (BTNS )IF OWNER & NOT TIMED OUT */}
                {/* {(isAuthorized && !isOwner) && <span className='user-sug-list'>
                    <a href='/' className='edit-user-sugged link'>Edit</a>
                    <a href='/' className='delete-user-sugged link'>Delete</a>
                </span>} */}
                This is the text in the SuggestionItem File
            </p>

            <p className='sugg-ranking'>
                <span className='sm-ital'>Votes:</span>
                {/* LIKES */}
                <span id='likes' className='rank'>
                    15
                </span>

                {/*  LIKE DISABLED FOR GUESTS & OWNERS */}
                {/*  ===!? LIKE LIMITED voting!?=== */}
                {/* {(isAuthorized && !isOwner) && } */}
                <a href='/' className='sugg-like-link'>
                    <i className='like fa-solid fa-circle-up'></i>
                </a>
            </p>
        </div>
    </li>;
}
