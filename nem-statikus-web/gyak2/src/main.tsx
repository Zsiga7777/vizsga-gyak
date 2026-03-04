import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AllPizzaPage from './pages/AllPizzaPage.tsx'
import { ToastContainer } from 'react-bootstrap'
import CreatePizzaPage from './pages/CreatePizzaPage.tsx'
import CartPage from './pages/CartPage.tsx'
import UpdatePizzaPage from './pages/UpdatePizzaPage.tsx'
import OnePizzaPage from './pages/OnePizzaPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<App/>}/>
      <Route path='/allPizzas' element={<AllPizzaPage/>}/>
      <Route path='/createPizza' element={<CreatePizzaPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/updatePizza/:id' element={<UpdatePizzaPage/>}/>
      <Route path='/onePizza/:id' element={<OnePizzaPage/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer>

    </ToastContainer>
  </StrictMode>,
)
