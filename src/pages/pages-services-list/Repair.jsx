import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { ListServices } from '../../components/list-services/ListServices'
import { configService } from '../../data'
import { Navigation } from '../../components/navigation/Navigation'

export const Repair = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Послуги з ремонту" position="Ремонт"/>
            <ListServices list={configService} types="repair"/>
            <Footer/>
        </div>
    )
}
