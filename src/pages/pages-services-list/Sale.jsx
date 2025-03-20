import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { ListServices } from '../../components/list-services/ListServices'
import { configService } from '../../data'
import { Shares } from '../../components/shares/Shares'
import { Navigation } from '../../components/navigation/Navigation'

export const Sale = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Акційні пропозиції" position="Акції"/>
            <Shares />     
            <ListServices list={configService} types="sale"/>   
            <Footer/>
        </div>
    )
}
