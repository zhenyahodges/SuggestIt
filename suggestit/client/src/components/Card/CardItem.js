import { Link } from 'react-router-dom';
import { SuggestionItem } from '../Details/AddSuggestion/SuggestionItem/SuggestionItem';

export const CardItem = ({ _id, brand, createdOn, expiryDate }) => {
    return (
        // TODO:
        // !!! Hide overflow!!!from Details?! or SHOW ONLY FIRST N SUGGS

      <article className='sugg-card details'>
            <header className='card-header card-brand-logo suggestit-brand'>
                <h5 className='brand logo-line'>{brand}</h5>
            </header>

            <main className='card-main'>
                <ul className='sugg-list' role='list'>

                    {/* TODO: MAP SUGGESTIONS */}
                    {/* <SuggestionItem/> */}

                    {/* {card.suggestions &&
                     Object.values(card.suggestions).map((x) => (
                        <li key={x._id} className='sugg-item'>
                             <div className='sugg-item-wrapper'>
                               <p className='sugg-text'>
                                 <span className='author-nickname'>
                                      {x.userName}
                                </span>
                            {/* SUGGESTION */}
                            {/* {x.suggestion} */}


                </ul>
            </main>

            <footer className='card-footer suggs-card foot'>
                <div className='card-footer-content'>
                    {/* <p className='card-footer-owner'>Owner</p> */}
                    <p className='card-footer-text'>
                        Thank you for your contributions!
                    </p>

                    <div className='card-footer-links-wrapper'>                        
                        <Link to={`/catalog/${_id}`} className='details-link'>
                            Details
                        </Link>

                        {/* ADD-SUGGESTION LINK: visible for LOGGED (NOT OWNERS?) */}

                        {/* {(isAuthorized && !isOwner)&&
                        <Link to='/addSuggestion' className='add-sugg-link'>
                        Suggest
                        </Link>} */}

                                    {/*------- LATER  */}
                                    {/*  <a href="/" className="print details">Print</a> */}
                                    {/*  <a href="/" className="print email details"
                                    >Email</a
                                    > */}

                                   {/*------- LATER  */}
                                    {/*  VISIBLE FOR LOGGED OWNER ONLY */}
                                    {/* <p className="countdown-text"><span className="count-end">20</span> days left</p> */}

                                        {/* if POLL ENDED  */}
                                        {/* <p className="countdown-text">Poll ended</p> */}

                        {/*  VISIBLE FOR OWNER IF NOT TIMED OUT */}
                       {/* { (isAuthorized && !isOwner)&&
                       <a href='/' className='card-details edit-card'>
                            Edit
                        </a>
                        <a href='/' className='card-details delete-card'>
                            Delete
                        </a>} */}
                    </div>
                </div>
            </footer>
        </article>       
    );
};
