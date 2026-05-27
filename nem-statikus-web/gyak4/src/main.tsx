import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListPage from './pages/ListPage'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-bootstrap'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigation/>
    <BrowserRouter>
    <Routes>
      <Route path='/movies' element={<ListPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
  </StrictMode>,
)
