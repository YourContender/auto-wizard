import React from 'react'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { DropdownTable } from '../components/dropdown-table/DropdownTable'
import { 
    dataTable, 
    titleForDropdownTableInPriceComponent,
    descrForDropdownTableInPriceComponent
} from '../data'

export const Prices = () => {
    return (
        <div>
            <Header/>
            <DropdownTable 
                data={dataTable}
                title={titleForDropdownTableInPriceComponent}   
                descr={descrForDropdownTableInPriceComponent} 
            />
            <Footer/>
        </div>
    )
}
