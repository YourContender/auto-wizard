import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Prices } from './pages/Prices.jsx';
import { Services } from './pages/Services.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import './App.css';
import { ScrollToTop } from './helpers/ScrollToTop.jsx';

export function App() {   
    return (
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} /> 
                <Route path="/contact" element={<Contact />} /> 
                <Route path="/price" element={<Prices />} /> 
                <Route path="/service" element={<Services />} /> 
            </Routes>
        </Router>
    )
}
