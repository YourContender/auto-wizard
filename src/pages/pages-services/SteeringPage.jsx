import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { SelectedService } from '../../components/selected-service/SelectedService';
import { Navigation } from '../../components/navigation/Navigation';

export const SteeringPage = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Ремонт рульового керування" position="Ремонт" secondPosition="Ремонт рульового керування" path="/repair"/>
            <SelectedService title="Рульове керування"/>
            <Footer/>
        </div>
    )
}
