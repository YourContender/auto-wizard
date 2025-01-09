import React from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Contact } from '../components/contact/Contact';
import { GoogleMap } from '../components/google-map/GoogleMap';

export const ContactPage = () => {
    return (
        <div>
            <Header/>
            <Contact/>
            <Footer/>
        </div>
    )
}
