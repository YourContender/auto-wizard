import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { SelectedService } from '../../components/selected-service/SelectedService'
import { Navigation } from '../../components/navigation/Navigation'

export const BrakeSystem = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Гальмівна система" position="Ремонт" secondPosition="Гальмівна система"/>
            <SelectedService title="Гальмівна система"/>
            <Footer/>
        </div>
    )
}
