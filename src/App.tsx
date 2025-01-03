import { Header } from './components/header/Header';

import './App.css';
import { Main } from './components/main/Main';
import { Shares } from './components/shares/Shares';
import { Preview } from './components/preview/Preview';
import Carousel from './components/services/Carousel.jsx';

function App() {
    const items = [
        {
          image: "./images/preview/pexels-19x14-8478249.jpg",
          title: "Заголовок 1",
          description: "Описание 1",
        },
        {
          image: "./images/preview/pexels-autorecords-10126656.jpg",
          title: "Заголовок 2",
          description: "Описание 2",
        },
        {
          image: "./images/preview/pexels-autorecords-10126656.jpg",
          title: "Заголовок 3",
          description: "Описание 2",
        },
        {
          image: "./images/preview/pexels-autorecords-10126656.jpg",
          title: "Заголовок 4",
          description: "Описание 2",
        },
        // Добавьте другие объекты
        {
          image: "./images/preview/pexels-19x14-8478249.jpg",
          title: "Заголовок 1",
          description: "Описание 1",
        },
        {
          image: "./images/preview/pexels-autorecords-10126656.jpg",
          title: "Заголовок 2",
          description: "Описание 2",
        },
        {
          image: "./images/preview/pexels-autorecords-10126656.jpg",
          title: "Заголовок 3",
          description: "Описание 2",
        },
        {
          image: "./images/preview/pexels-autorecords-10126656.jpg",
          title: "Заголовок 4",
          description: "Описание 2",
        },
        // Добавьте другие объекты
      ];
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

export default App
