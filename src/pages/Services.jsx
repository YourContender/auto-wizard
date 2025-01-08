import React from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { ListServices } from "../components/list-services/ListServices";
import { GoogleMap } from "../components/google-map/GoogleMap";
import { listServices } from "../data.js";

export const Services = () => {
    return (
        <div>
            <Header/>
            <ListServices list={listServices}/>
            <GoogleMap/>
            <Footer/>    
        </div>
    )
}
