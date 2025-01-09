import React from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { ListServices } from "../components/list-services/ListServices";
import { GoogleMap } from "../components/google-map/GoogleMap";
import { listServices } from "../data.js";

export const Services = ({ setCurrService }) => {
    return (
        <div>
            <Header/>
            <ListServices list={listServices} setCurrService={setCurrService}/>
            <GoogleMap width="100%" height="600px"/>
            <Footer/>    
        </div>
    )
}
