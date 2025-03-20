import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { SelectedService } from '../../components/selected-service/SelectedService'
import { Navigation } from '../../components/navigation/Navigation'

export const ClutchPage = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Ремонт та заміна зчеплення" position="Ремонт" secondPosition="Ремонт та заміна зчеплення" path="/repair"/>
            <SelectedService title="Зчеплення"/>
            <Footer/>
        </div>
    )
}
