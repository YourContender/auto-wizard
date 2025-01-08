import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { SelectedService } from '../../components/selected-service/SelectedService'

export const CoolingSystem = () => {
    return (
        <div>
            <Header/>
            <SelectedService title="Системи охолодження"/>
            <Footer/>
        </div>
    )
}
