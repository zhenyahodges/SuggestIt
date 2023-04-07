import { AddSuggestion } from './components/AddSuggestion/AddSuggestion';
import Home from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';

import Root,{loader as headerLoader} from './components/Root/Root';
import ProfileLayout, {
    loader as userLoader,
    action as userProfileAction,
} from './components/Profile/ProfileLayout';
import UserCards from './components/Profile/UserCards';
import UserSuggs from './components/Profile/UserSuggs';
import CreateCard, {
    action as createCardAction,
    loader as createLoader,
} from './components/Profile/CreateCard';
import Register, {
    action as registerAction,
} from './components/Register/Register';
import Catalog, { loader as cardsLoader } from './components/Catalog/Catalog';
import Login, { action as loginAction } from './components/Login/Login';
import CardItem, {
    loader as cardLoader,
} from './components/Catalog/Card/CardItem';
import { AuthContext } from './utils/authContext';
import { requireAuth } from './utils/requireAuth';

// const user = JSON.parse(localStorage.getItem('user'));
// const token = user.token;
// let isLogged = false;
// if (token) {
//     isLogged = true;
// }
// console.log(isLogged);
// import { CardItem } from './components/Card/CardItem';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'
         element={<Root />} 
         loader={headerLoader}       
         >
            <Route
                index
                element={<Home />}             
            />
            {/* <AuthContext.Provider value={isLogged}> */}
            <Route 
            path='cards' 
            element={<Catalog />} 
            loader={cardsLoader} />

            <Route
                path='cards/:cardId'
                element={<CardItem />}
                loader={cardLoader}
            />

            <Route
                path='cards/:cardId/:suggestionId'
                element={<AddSuggestion />}
                // loader={async () => await requireAuth()}
            />

            <Route
                path='login'
                element={<Login />}
                action={loginAction}
                id='logindata'
            />

            <Route
                path='register'
                element={<Register />}
                action={registerAction}
            />
            {/* </AuthContext.Provider> */}
            {/* <AuthContext.Provider value={userId}> */}

            {/* PROFILE */}
            <Route
                path='users/:userId'
                element={<ProfileLayout />}
                loader={userLoader}
                // action={userProfileAction}             
            >
                <Route
                    index
                    element={<UserCards />}
                    // loader={async () => await requireAuth()}
                />
                <Route
                    path='suggested'
                    element={<UserSuggs />}
                    // loader={async () => await requireAuth()}
                />
                <Route
                    path='create'
                    element={<CreateCard />}
                    // loader={createLoader}
                    action={createCardAction}
                />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
