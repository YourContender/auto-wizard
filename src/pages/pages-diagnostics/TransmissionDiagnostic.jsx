import React from 'react'
import { Header } from '../../components/header/Header';
import { SelectedService } from '../../components/selected-service/SelectedService';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/navigation/Navigation';

export const TransmissionDiagnostic = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Діагностика коробки передач" position="Діагностика" secondPosition="Діагностика КПП"/>
            <SelectedService title="Діагностика коробки передач"/>
            <Footer/>
        </div>
    )
}
