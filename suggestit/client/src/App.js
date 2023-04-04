import { Register } from './components/Register/Register';
import { AddSuggestion } from './components/AddSuggestion/AddSuggestion';
import { Details } from './components/Catalog/Card/Details';
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';
import {
    // BrowserRouter,
    // Routes,
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
import Catalog from './components/Catalog/Catalog';
import Login from './components/Login/Login';

// import { CardItem } from './components/Card/CardItem';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Home />} />
            <Route path='catalog' element={<Catalog />} />
            <Route path='catalog/:cardId' element={<Details />} />
            <Route
                path='catalog/:cardId/:suggestionId'
                element={<AddSuggestion />}
            />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

            {/* PROFILE */}
            <Route path='profile/:userId' element={<ProfileLayout />}>
                <Route index element={<UserCards />} />
                <Route path='create' element={<UserSuggs />} />
                <Route path='suggest' element={<CreateCard />} />
            </Route>

            <Route path='*' element={<NotFound />} />
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
