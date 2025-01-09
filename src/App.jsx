import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Prices } from './pages/Prices.jsx';
import { Services } from './pages/Services.jsx';
import { About } from './pages/About.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { ScrollToTop } from './helpers/ScrollToTop.jsx';
import './App.css';
import { useState } from 'react';
import { BrakeSystem } from './pages/pages-services/BrakeSystem.jsx';
import { Maintenance } from './pages/pages-services/Maintenance.jsx';
import { RepairKPP } from './pages/pages-services/RepairKPP.jsx';
import { CoolingSystem } from './pages/pages-services/CoolingSystem.jsx';
import { RepairMotor } from './pages/pages-services/RepairMotor.jsx';
import { FuelSystem } from './pages/pages-services/FuelSystem.jsx';

export function App() {   
    const [currentServiceFromList, setCurrentServiceFormList] = useState([]);
    
    return (
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} /> 
                <Route path="/contact" element={<ContactPage />} /> 
                <Route path="/price" element={<Prices />} /> 
                <Route path="/service" element={<Services setCurrService={setCurrentServiceFormList}/>} /> 

                <Route path="/service/halmivna-sistema" element={<BrakeSystem />} /> 
                <Route path="/service/technichne-obslugovuvannya" element={<Maintenance />} /> 
                <Route path="/service/kpp" element={<RepairKPP />} /> 
                <Route path="/service/sistema-oholodzhennya" element={<CoolingSystem />} /> 
                <Route path="/service/dvigun" element={<RepairMotor />} /> 
                <Route path="/service/palivna-sistema" element={<FuelSystem />} /> 
            </Routes>
        </Router>
    )
}
