import React from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { ListServices } from "../components/list-services/ListServices";
import { GoogleMap } from "../components/google-map/GoogleMap";
import { configService } from "../data.js";
import { Navigation } from '../components/navigation/Navigation.jsx';

export const Services = ({ setCurrService }) => {
    return (
        <div>
            <Header/>
            <Navigation title="Послуги з ремонту" position="Ремонт"/>
            <ListServices list={configService} setCurrService={setCurrService}/>
            <GoogleMap width="100%" height="600px"/>
            <Footer/>    
        </div>
    )
}
