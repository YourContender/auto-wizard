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
import { ClutchPage } from './pages/pages-services/ClutchPage.jsx';
import { SteeringPage } from './pages/pages-services/SteeringPage.jsx';
import { PendantPage } from './pages/pages-services/PendantPage.jsx';
import { Repair } from './pages/pages-services-list/Repair.jsx';
import { TO } from './pages/pages-services-list/To.jsx';
import { Diagnostic } from './pages/pages-services-list/Diagnostic.jsx';
import { Sale } from './pages/pages-services-list/Sale.jsx';
import { ExhaustSystem } from './pages/pages-services/ExhaustSystem.jsx';
import { CompucterDiagnostic } from './pages/pages-diagnostics/CompucterDiagnostic.jsx';
import { ChassisDiagnostic } from './pages/pages-diagnostics/ChassisDiagnostic.jsx';
import { TransmissionDiagnostic } from './pages/pages-diagnostics/TransmissionDiagnostic.jsx';
import { BeforePurchaseDiagnostic } from './pages/pages-diagnostics/BeforePurchaseDiagnostic.jsx';

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
                <Route path="/repair" element={<Repair/>}/>
                <Route path="/tehobsluzhivanie" element={<TO/>}/>
                <Route path="/diagnostica" element={<Diagnostic/>}/>
                <Route path="/sale" element={<Sale/>}/>

                <Route path="/repair/halmivna-sistema" element={<BrakeSystem />} /> 
                {/* <Route path="/technichne-obslugovuvannya" element={<Maintenance />} />  */}
                <Route path="/repair/kpp" element={<RepairKPP />} /> 
                <Route path="/repair/sistema-oholodzhennya" element={<CoolingSystem />} /> 
                <Route path="/repair/dvigun" element={<RepairMotor />} /> 
                <Route path="/repair/palivna-sistema" element={<FuelSystem />} /> 
                <Route path="/repair/sczeplennya" element={<ClutchPage />} /> 
                <Route path="/repair/ruleve-keruvannya" element={<SteeringPage />} /> 
                <Route path="/repair/pidviska" element={<PendantPage />} /> 
                <Route path="/repair/remont-vyhlopnoj-sistemy" element={<ExhaustSystem />} /> 
                <Route path="/diagnostica/computerna-diagnostica" element={<CompucterDiagnostic />} /> 
                <Route path="/diagnostica/diagnostica-hodovoi" element={<ChassisDiagnostic />} /> 
                <Route path="/diagnostica/diagnostica-kpp" element={<TransmissionDiagnostic />} /> 
                <Route path="/diagnostica/diagnostica-pered-pokupkoi" element={<BeforePurchaseDiagnostic />} /> 
                
            </Routes>
        </Router>
    )
}
