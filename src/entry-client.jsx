import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { App } from './App'

let mainComponent;
if (process.env.NODE_ENV === 'production') {
    mainComponent = <App />;
} else {
    mainComponent = <StrictMode>
        <App />
    </StrictMode>;
}

hydrateRoot(
    document.getElementById('root'),
    <BrowserRouter>
        {mainComponent}
    </BrowserRouter>,
)