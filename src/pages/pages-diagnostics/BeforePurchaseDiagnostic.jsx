import React from 'react'
import { Header } from '../../components/header/Header';
import { SelectedService } from '../../components/selected-service/SelectedService';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/navigation/Navigation';

export const BeforePurchaseDiagnostic = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Діагностика авто перед покупкою" position="Діагностика" secondPosition="Діагностика перед покупкою" path="/diagnostica"/>
            <SelectedService title="Діагностика авто перед покупкою"/>
            <Footer/>
        </div>
    )
}
