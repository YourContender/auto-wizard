import React from 'react';
import { Header } from '../../components/header/Header';
import { SelectedService } from '../../components/selected-service/SelectedService';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/navigation/Navigation';

export const CompucterDiagnostic = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Комп'ютерна діагностика" position="Діагностика" secondPosition="Комп'ютерна діагностика"/>
            <SelectedService title="Комп’ютерна діагностика"/>
            <Footer/>
        </div>
    )
}
