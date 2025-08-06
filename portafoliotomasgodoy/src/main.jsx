import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { Enrutamiento } from './router/enrutamiento.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Enrutamiento />
  </StrictMode>,
)
