import React from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Contact } from '../components/contact/Contact';
import { Navigation } from '../components/navigation/Navigation';

export const ContactPage = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Контакти" position="Контакти"/>
            <Contact/>
            <Footer/>
        </div>
    )
}
