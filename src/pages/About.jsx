import React from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { AboutUs } from '../components/about-us/AboutUs';
import { Navigation } from '../components/navigation/Navigation';

export const About = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Про нас" position="Про нас"/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}
