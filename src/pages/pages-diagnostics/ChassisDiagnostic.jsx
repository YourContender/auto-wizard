import React from 'react';
import { Header } from '../../components/header/Header';
import { SelectedService } from '../../components/selected-service/SelectedService';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/navigation/Navigation';

export const ChassisDiagnostic = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Діагностика ходової" position="Діагностика" secondPosition="Діагностика ходової"/>
            <SelectedService title="Діагностика ходової"/>
            <Footer/>
        </div>
    )
}
