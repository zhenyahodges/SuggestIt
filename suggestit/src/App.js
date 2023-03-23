import {AddSuggestion} from './components/Details/AddSuggestion/AddSuggestion'
import { Details } from './components/Details/Details';
import { Catalog } from './components/Catalog/Catalog';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Welcome } from './components/Welcome/Welcome';

function App() {
    return (
        <>
            <Header />
            {/* <!-- || MAIN --> */}
            <main className='page main'>
                <section className='page main container'>
                    <Welcome />
                    <Catalog/>
                    <Details/>
                    <AddSuggestion/>
                    




                </section>
                {/* <!-- end main section --> */}
            </main>
            <Footer />
        </>
    );
}

export default App;
