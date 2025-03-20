import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { SelectedService } from '../../components/selected-service/SelectedService';
import { Navigation } from '../../components/navigation/Navigation';

export const RepairKPP = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Ремонт КПП" position="Ремонт" secondPosition="Ремонт КПП" path="/repair"/>
            <SelectedService title="КПП"/>
            <Footer/>
        </div>
    )
}
