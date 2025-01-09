import React from 'react'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { Advantage } from '../components/advantage/Advantage'
import { AboutUs } from '../components/about-us/AboutUs'

export const About = () => {
    return (
        <div>
            <Header/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}
