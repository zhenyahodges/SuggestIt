export default function SuggestionItem({
    _ownerId,
    suggestion,
    likes,
    _cardId,
    _createdOn,
    _updatedOn,
    _id,}) {
        console.log('DATA--'+_ownerId,
            suggestion,
            likes,
            _cardId,
            _createdOn,
            _updatedOn,
            _id,);
    return (
        <li
            className='sugg-item'            
        
        >
            <div className='sugg-item-wrapper'>
                <p className='sugg-text'>
                    {suggestion}                   
                </p>

                <p className='sugg-ranking'>
                    <span className='rank'>
                        {/* {rank && rank={Like(_id)}} */}
                        {/* 15 */}
                        {likes.length}
                    </span>                    
                </p>
            </div>
        </li>
    );
}
