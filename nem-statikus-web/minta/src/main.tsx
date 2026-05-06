import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router'
import All from './pages/All'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/movies' element={<All/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
  </StrictMode>,
)
