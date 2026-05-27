import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from './pages/List'
import Cart from './pages/CArt'
import { ToastContainer } from 'react-bootstrap'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <BrowserRouter >
      <Routes>
        <Route path='/movies' element={<List/>}/>
         <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
  </StrictMode>,
)
