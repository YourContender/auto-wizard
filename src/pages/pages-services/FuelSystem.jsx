import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { SelectedService } from '../../components/selected-service/SelectedService'
import { Navigation } from '../../components/navigation/Navigation';

export const FuelSystem = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Ремонт паливної системи" position="Ремонт" secondPosition="Ремонт паливної системи"/>
            <SelectedService title="Паливна система"/>
            <Footer/>
        </div>
    )
}
