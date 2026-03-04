import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import AllCar from './pages/AllCar.tsx'
import Cart from './pages/Cart.tsx'
import CreateCar from './pages/CreateCar.tsx'
import UpdateCar from './pages/UpdateCar.tsx'
import App from './App.tsx'
import { ToastContainer, Bounce } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<App/>}/>
      <Route path='allCar' element= {<AllCar/>}/>
      <Route path='cart' element= {<Cart/>}/>
      <Route path="createCar" element={<CreateCar/>}/>
      <Route path="updateCar" element={<UpdateCar/>}/>
      <Route path="oneCar" element={<UpdateCar/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer
            limit={3}
            position="top-right"
            autoClose={3000}
            hideProgressBar
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />
  </StrictMode>,
  
)
