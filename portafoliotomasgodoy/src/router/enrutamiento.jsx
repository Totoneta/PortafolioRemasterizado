import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/home'
import Navbar from '../components/navbar/navbar'

export function Enrutamiento() {

  return (
    <BrowserRouter>
    
      <Navbar />

      <Routes>
        <Route path='/' Component={HomePage} />
      </Routes>

    </BrowserRouter>
  )
}
