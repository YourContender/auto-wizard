import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { ListServices } from '../../components/list-services/ListServices'
import { configService } from '../../data'
import { Navigation } from '../../components/navigation/Navigation'

export const Diagnostic = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Діагностика" position="Діагностика"/>
            <ListServices list={configService} types="diagnostics"/>        
            <Footer/>
        </div>
    )
}
