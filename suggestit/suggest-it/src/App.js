import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Profile } from './components/Profile/Profile';
import { AddSuggestion } from './components/Details/AddSuggestion/AddSuggestion';
import { Details } from './components/Details/Details';
import { Catalog } from './components/Catalog/Catalog';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />
            {/* <!-- || MAIN --> */}
            <main className='page main'>
                <section className='page main container'>
                    <Routes>
                    <Route path='/' element={<Home/>} />                        
                    <Route path='/catalog' element={<Catalog/>} />
                    {/* <Route path='/catalog/:cardId' element={<Details />}/> */}
                    <Route path='/addSuggestion' element={<AddSuggestion/>} />                   
                    <Route path='/profile' element={<Profile/>} />                   
                       
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register/>} />
                    </Routes>
                </section>
                {/* <!-- end main section --> */}
            </main>
            <Footer />
        </>
    );
}

export default App;
