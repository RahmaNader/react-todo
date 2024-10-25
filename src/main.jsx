import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// the etire appplication is injected into the root div that is in the index.html file
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
     {/* the app comes form APP.jsx */}
  </StrictMode>,
)
