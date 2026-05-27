import { StrictMode } from "react";
import { ToastContainer } from "react-bootstrap";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import All from "./pages/All";
import Cart from "./pages/Cart";
import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Header/>
        <BrowserRouter>
        <Routes>
            <Route path="/movies" element={<All/>}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
        </BrowserRouter>
        <ToastContainer/>
    </StrictMode>
)