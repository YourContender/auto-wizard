import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Navigation } from '../../components/navigation/Navigation'
import { SelectedService } from '../../components/selected-service/SelectedService'

export const Tech = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Технічне обслуговування" position="TO"/>
            <SelectedService title="ТО"/>        
            <Footer/>
        </div>
    )
}
