import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import { requireAuth } from './utils/requireAuth';

import Root, { loader as headerLoader } from './components/Root/Root';
import Home from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';

import Login, {
    action as loginAction,
    loader as loginLoader,
} from './components/Login/Login';
import Register, {
    action as registerAction,
} from './components/Register/Register';
import Logout, {
    action as logoutAction,
    loader as logoutLoader,
} from './components/Logout/Logout';

import Catalog, { loader as cardsLoader } from './components/Catalog/Catalog';
import CardItem, {
    loader as cardLoader,
    // action as suggestAction,
} from './components/Catalog/Card/CardItem';
import {
    AddSuggestion,
    // action as suggestAction
} from './components/AddSuggestion/AddSuggestion';

import ProfileLayout, {
    loader as userLoader,
} from './components/Profile/ProfileLayout';
import UserCards, {
    loader as userCardsLoader,
} from './components/Profile/UserCards';
import UserSuggs from './components/Profile/UserSuggs';
import CreateCard, {
    action as createCardAction,
} from './components/Profile/CreateCard';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />} loader={headerLoader}>
            <Route index element={<Home />} />
            {/* <AuthContext.Provider value={isLogged}> */}
            <Route path='cards' element={<Catalog />} loader={cardsLoader} />

            <Route
                path='cards/:cardId'
                element={<CardItem />}
                loader={cardLoader}
                // action={suggestAction}
            />

            <Route
                // path='cards/:cardId/:suggestionId'
                path='sugg'
                element={<AddSuggestion />}
                loader={async ({ request }) => await requireAuth(request)}
                // action={suggestAction}
            />

            <Route
                path='login'
                element={<Login />}
                loader={loginLoader}
                action={loginAction}
                id='logindata'
            />

            <Route
                path='logout'
                element={<Logout />}
                action={logoutAction}
                loader={logoutLoader}
                id='logoutdata'
            />

            <Route
                path='register'
                element={<Register />}
                action={registerAction}
            />

            {/* PROFILE */}
            <Route
                path='users/:userId'
                element={<ProfileLayout />}
                loader={userLoader}
                // action={userProfileAction}
            >
                <Route index element={<UserCards />} loader={userCardsLoader} />
                <Route
                    path='suggested'
                    element={<UserSuggs />}
                    loader={async ({ request }) => await requireAuth(request)}
                />
                <Route
                    path='create'
                    element={<CreateCard />}
                    loader={async ({ request }) => await requireAuth(request)}
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
