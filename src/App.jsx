import { Header } from './components/header/Header.jsx';
import { Main } from './components/main/Main.jsx';
import { Shares } from './components/shares/Shares.jsx';
import { Preview } from './components/preview/Preview.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import { items } from './data.js';
import { Feedback } from './components/feedback/Feedback.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home.jsx';

export function App() {   
    return (
        <Router>
            {/* <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
            </ul> */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </Router>
    )
}
