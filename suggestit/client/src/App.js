import { AddSuggestion } from './components/AddSuggestion/AddSuggestion';
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import Root from './components/Root/Root';
import ProfileLayout from './components/Profile/ProfileLayout';
import UserCards from './components/Profile/UserCards';
import UserSuggs from './components/Profile/UserSuggs';
import CreateCard from './components/Profile/CreateCard';
import Register, {
    action as registerAction,
} from './components/Register/Register';
import Catalog, { loader as cardsLoader } from './components/Catalog/Catalog';
import Login, { action as loginAction } from './components/Login/Login';
import CardItem, {
    loader as cardLoader,
} from './components/Catalog/Card/CardItem';

// import { CardItem } from './components/Card/CardItem';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Home />} />
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
            />

            <Route 
            path='login' 
            element={<Login />} 
            action={loginAction} />

            <Route
                path='register'
                element={<Register />}
                action={registerAction}
            />

            {/* PROFILE */}
            <Route path='users/:userId' 
            element={<ProfileLayout />}>
                <Route 
                path='.' 
                element={<UserCards />}
                loader={async()=>{return null}}
                 />
                <Route 
                path='suggested' 
                element={<UserSuggs />}
                loader={async()=>{return null}} />
                <Route 
                path='create' 
                element={<CreateCard />}
                loader={async()=>{return null}} />
            </Route>

            <Route path='*' element={<NotFound />} />
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;