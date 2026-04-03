import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';

import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;