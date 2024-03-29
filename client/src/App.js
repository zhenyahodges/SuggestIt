import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import { requireAuth } from './utils/requireAuth';

import Root from './components/Root/Root';
import Home, { loader as homeCardsLoader } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';

// **AUTH**
import Login, {
    action as loginAction,
    loader as loginLoader,
} from './components/Login/Login';
import Register, {
    loader as registerLoader,
    action as registerAction,
} from './components/Register/Register';
import Logout, {
    action as logoutAction,
    loader as logoutLoader,
} from './components/Logout/Logout';
import { CurrentUserProvider } from './context/CurrentUserContext';
import { LoggedProvider } from './context/LoggedContext';

// **CATALOG**
import Catalog, { loader as cardsLoader } from './components/Catalog/Catalog';
import CardDetail, {
    loader as cardLoader,
    // action as likeAction
} from './components/Catalog/CatalogItem/CardDetail/CardDetail';

// SUGGESTION ADD/EDIT
import AddSuggestion, {
    loader as addSuggLoader,
    action as suggestAction,
} from './components/Catalog/CatalogItem/SuggestionItem/AddSuggestion';
import EditSuggestion, {
    loader as editSuggLoader,
    action as editSuggAction,
} from './components/Catalog/CatalogItem/SuggestionItem/EditSuggestion';

// **INFOCATALOG**
import InfoCatalog, {
    loader as infosLoader,
} from './components/InfoCatalog/InfoCatalog';
import InfoDetail, {
    loader as infoLoader,
} from './components/InfoCatalog/InfoItem/InfoDetail/InfoDetail';

// **PROFILE**
import ProfileLayout, {
    loader as userLoader,
} from './components/Profile/ProfileLayout';
import UserCards, {
    loader as userCardsLoader,
} from './components/Profile/UserCards/UserCards';
import UserSuggs, {
    loader as useSuggLoader,
} from './components/Profile/UserSuggs/UserSuggs';

import UserInfos, {
    loader as userInfosLoader,
} from './components/Profile/UserInfos/UserInfos';

// CARD CREATE/EDIT
import CreateCard, {
    action as createCardAction,
} from './components/Profile/CreateCard/CreateCard';
import EditCardItem, {
    loader as editCardLoader,
    action as editCardAction,
} from './components/Catalog/CatalogItem/EditCardItem/EditCardItem';


// INFO CREATE/EDIT
import EditInfoItem, {
    loader as editInfoLoader,
    action as editInfoAction,
} from './components/InfoCatalog/InfoItem/EditInfoItem/EditInfoItem';
import CreateInfo, {
    action as createInfoAction,
} from './components/Profile/CreateInfo/CreateInfo';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path='/'
            element={<Root />}            
            errorElement={<NotFound />}
        >
            <Route
                index
                element={<Home />}
                loader={homeCardsLoader}
                errorElement={<NotFound />}
            />
            <Route
                path='cards'
                element={<Catalog />}
                loader={cardsLoader}
                errorElement={<NotFound />}
            />

            <Route
                path='cards/:cardId'
                element={<CardDetail />}
                loader={cardLoader}
                id='cardItem'
                // action={likeAction}
                errorElement={<NotFound />}
            />
            <Route
                path='cards/:cardId/edit'
                element={<EditCardItem />}
                loader={editCardLoader}
                action={editCardAction}
                errorElement={<NotFound />}
            />
            <Route
                path='cards/:cardId/suggest'
                element={<AddSuggestion />}
                loader={addSuggLoader}
                action={suggestAction}
            />
            <Route
                path='suggestions/:suggestionId'
                element={<EditSuggestion />}
                loader={editSuggLoader}
                action={editSuggAction}
                errorElement={<NotFound />}
            />
            {/* INFOS CATALOG */}
            <Route
                path='infos'
                element={<InfoCatalog />}
                loader={infosLoader}
                errorElement={<NotFound />}
            />

            <Route
                path='infos/:infoId'
                element={<InfoDetail />}
                loader={infoLoader}
                errorElement={<NotFound />}
            />
            <Route
                path='infos/:infoId/edit'
                element={<EditInfoItem />}
                loader={editInfoLoader}
                action={editInfoAction}
                errorElement={<NotFound />}
            />
            {/* AUTH */}
            <Route
                path='login'
                element={<Login />}
                loader={loginLoader}
                action={loginAction}
                id='logindata'
                errorElement={<NotFound />}
            />

            <Route
                path='logout'
                element={<Logout />}
                action={logoutAction}
                loader={logoutLoader}
                id='logoutdata'
                errorElement={<NotFound />}
            />

            <Route
                path='register'
                element={<Register />}
                loader={registerLoader}
                action={registerAction}
                errorElement={<NotFound />}
            />

            {/* PROFILE */}
            <Route
                path='users/:userId'
                element={<ProfileLayout />}
                loader={userLoader}
                errorElement={<NotFound />}
            >
                <Route errorElement={<NotFound />}>
                    <Route
                        index
                        element={<UserCards />}
                        loader={userCardsLoader}
                    />
                    <Route
                        path='suggested'
                        element={<UserSuggs />}
                        loader={useSuggLoader}
                    />
                    <Route
                        path='create'
                        element={<CreateCard />}
                        loader={async ({ request }) =>
                            await requireAuth(request)
                        }
                        action={createCardAction}
                    />
                    <Route
                        path='userInfos'
                        element={<UserInfos />}
                        loader={userInfosLoader}
                    />
                    <Route
                        path='createinfo'
                        element={<CreateInfo />}
                        loader={async ({ request }) =>
                            await requireAuth(request)
                        }
                        action={createInfoAction}
                    />
                </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Route>
    )
);
function App() {
    return (
        <CurrentUserProvider>
            <LoggedProvider>
                <RouterProvider router={router} />
            </LoggedProvider>
        </CurrentUserProvider>
    );
}

export default App;
