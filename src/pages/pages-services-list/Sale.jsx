import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { ListServices } from '../../components/list-services/ListServices'
import { configService } from '../../data'

export const Sale = () => {
    return (
        <div>
            <Header/>
            <ListServices list={configService} types="sale"/>        
            <Footer/>
        </div>
    )
}
