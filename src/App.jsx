import { Header } from './components/header/Header.jsx';
import { Main } from './components/main/Main.jsx';
import { Shares } from './components/shares/Shares.jsx';
import { Preview } from './components/preview/Preview.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import { items } from './data.js';
import './App.css';

export function App() {
    
    return (
        <>
            <Header/> 
            <Main/>
            <Shares/>
            <Preview/>
            <Carousel items={items} />
        </>
    )
}
