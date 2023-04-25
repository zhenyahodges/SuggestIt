import {
    Link,
    // useLoaderData,
    useNavigate,
    useNavigation,
} from 'react-router-dom';


export async function loader({ params }) {
    const cardId = params.cardId;
    // console.log(cardId);
    // const res = await getCards(cardId);
    // const suggestions = await getCardSuggestions(cardId);
    // console.log('suggs==' + suggestions);
    // const result = {
    // res,
    //  suggestions };
    // console.log('result==>'+result);
    // return result;
    // return suggestions;
    return null;
}

export default function CatalogItem({ brand, _createdOn, _id, _ownerId }) {
    const navigation = useNavigation();
    // const navigate = useNavigate();
    // const suggestions = useLoaderData();
    // console.log('suggestions---' + suggestions);

    return (
        <article
            // key={id}
            className='sugg-card details catalog-view-card'
        >
            <header className='card-header'>
                <h5 className='brand'>{brand}</h5>
            </header>

            <main className='card-main catalog-view-card'>
                <ul className='sugg-list'>
                    {/* TODO: MAP SUGGESTIONS */}
                    {/* {suggestions &&
                        suggestions.map((s) => (
                            <SuggestionDetail key={s._id} {...s} />
                        ))} */}
                    {/* {suggestions.length === 0 && <p>No Suggestions Yet</p>} */}
                </ul>
            </main>
            <footer className='card-footer suggs-card foot'>
                <div className='card-footer-content'>
                    <p className='card-footer-text'>
                        Thank you for your contributions!
                    </p>
                    <div className='card-footer-links-wrapper'>
                        <Link
                            to={_id}
                            className='details-link'
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'Details'}
                        </Link>
                    </div>
                </div>
            </footer>
        </article>
    );
}
// [
//     {
//         _ownerId: '30675a27-1129-4277-b43e-fad3a97c13a8',
//         suggestion: 'hhhhhhhhhhhhhh\n',
//         cardId: '3a1735b8-6bf3-4f76-a5f9-18642518ab74',
//         _createdOn: 1682358602767,
//         _id: '00414214-b4b8-4798-b53e-ed1800de592b',
//         author: {
//             fname: 'ddd',
//             lname: 'ddd',
//             email: 'dsdd@ff.hh',
//             password: '123456',
//             _createdOn: 1682352994670,
//             _id: '30675a27-1129-4277-b43e-fad3a97c13a8',
//         },
//     },
//     {
//         _ownerId: '30675a27-1129-4277-b43e-fad3a97c13a8',
//         suggestion: 'kkkkkkkkkkkkkk',
//         cardId: '3a1735b8-6bf3-4f76-a5f9-18642518ab74',
//         _createdOn: 1682358616568,
//         _id: 'e2880cf1-c634-4ac7-843a-9f074c817487',
//         author: {
//             fname: 'ddd',
//             lname: 'ddd',
//             email: 'dsdd@ff.hh',
//             password: '123456',
//             _createdOn: 1682352994670,
//             _id: '30675a27-1129-4277-b43e-fad3a97c13a8',
//         },
//     },
// ];
// [
//     {
//         _ownerId: '30675a27-1129-4277-b43e-fad3a97c13a8',
//         suggestion: 'hhhhhhhhhhhhhh\n',
//         cardId: '3a1735b8-6bf3-4f76-a5f9-18642518ab74',
//         _createdOn: 1682358602767,
//         _id: '00414214-b4b8-4798-b53e-ed1800de592b',
//         author: {
//             fname: 'ddd',
//             lname: 'ddd',
//             email: 'dsdd@ff.hh',
//             password: '123456',
//             _createdOn: 1682352994670,
//             _id: '30675a27-1129-4277-b43e-fad3a97c13a8',
//         },
//     },
//     {
//         _ownerId: '30675a27-1129-4277-b43e-fad3a97c13a8',
//         suggestion: 'kkkkkkkkkkkkkk',
//         cardId: '3a1735b8-6bf3-4f76-a5f9-18642518ab74',
//         _createdOn: 1682358616568,
//         _id: 'e2880cf1-c634-4ac7-843a-9f074c817487',
//         author: {
//             fname: 'ddd',
//             lname: 'ddd',
//             email: 'dsdd@ff.hh',
//             password: '123456',
//             _createdOn: 1682352994670,
//             _id: '30675a27-1129-4277-b43e-fad3a97c13a8',
//         },
//     },
// ];
