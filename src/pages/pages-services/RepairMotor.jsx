import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { SelectedService } from '../../components/selected-service/SelectedService';
import { Navigation } from '../../components/navigation/Navigation';

export const RepairMotor = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Ремонт двигунів" position="Ремонт" secondPosition="Ремонт двигунів"/>
            <SelectedService title="Двигун"/>
            <Footer/>
        </div>
    )
}
