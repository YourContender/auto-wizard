import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { SelectedService } from '../../components/selected-service/SelectedService'
import { Navigation } from '../../components/navigation/Navigation';

export const PendantPage = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Ремонт ходової (підвіски)" position="Ремонт" secondPosition="Ремонт ходової" path="/repair"/>
            <SelectedService title="Підвіска"/>
            <Footer/>
        </div>
    )
}
