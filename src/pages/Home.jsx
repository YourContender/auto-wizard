import React from 'react'
import { Header } from '../components/header/Header'
import { Main } from '../components/main/Main'
import { Preview } from '../components/preview/Preview'
import Carousel from '../components/carousel/Carousel'
import { Feedback } from '../components/feedback/Feedback'
import { items, carModels } from '../data'
import { GoogleMap } from '../components/google-map/GoogleMap'
import { CarModels } from '../components/car-models/CarModels'
import { Footer } from '../components/footer/Footer'
import { ServicePoints } from '../components/service-points/ServicePoints'
import { Advantage } from '../components/advantage/Advantage'

export const Home = () => {
    return (
        <>
            <Header/> 
            <Main/>
            <ServicePoints/>
            <Preview/>
            <Advantage/>
            <Carousel items={items} />
            <Feedback/>
            <CarModels items={carModels}/>
            <GoogleMap width="100%" height="600px"/> 
            <Footer/>
        </>
    )
}
    