import React from 'react'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { DropdownTable } from '../components/dropdown-table/DropdownTable'
import { 
    configService, 
    titleForDropdownTableInPriceComponent,
    descrForDropdownTableInPriceComponent
} from '../data'
import { Navigation } from '../components/navigation/Navigation'

export const Prices = () => {
    return (
        <div>
            <Header/>
            <Navigation title="Наші ціни" position="Ціни"/>
            <DropdownTable 
                data={configService}
                title={titleForDropdownTableInPriceComponent}   
                descr={descrForDropdownTableInPriceComponent} 
            />
            <Footer/>
        </div>
    )
}
