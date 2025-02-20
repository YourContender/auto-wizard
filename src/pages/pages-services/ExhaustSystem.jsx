import React from 'react';
import { Header } from '../../components/header/Header';
import { SelectedService } from '../../components/selected-service/SelectedService';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/navigation/Navigation';

export const ExhaustSystem = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Ремонт вихлопної системи" position="Ремонт" secondPosition="Ремонт вихлопної системи"/>
            <SelectedService title="Ремонт вихлопної системи"/>
            <Footer/>
        </div>
    )
}
