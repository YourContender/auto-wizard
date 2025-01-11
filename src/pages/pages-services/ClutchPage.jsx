import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { SelectedService } from '../../components/selected-service/SelectedService'

export const ClutchPage = () => {
    return (
        <div>
            <Header/>
            <SelectedService title="Зчеплення"/>
            <Footer/>
        </div>
    )
}
