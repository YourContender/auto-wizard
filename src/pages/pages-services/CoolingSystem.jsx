import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Navigation } from '../../components/navigation/Navigation'
import { SelectedService } from '../../components/selected-service/SelectedService'

export const CoolingSystem = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Ремонт системи охолодження" position="Ремонт" secondPosition="Ремонт системи охолодження"/>
            <SelectedService title="Системи охолодження"/>
            <Footer/>
        </div>
    )
}
