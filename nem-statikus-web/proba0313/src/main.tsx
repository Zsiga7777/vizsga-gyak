import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPizza from './pages/AllPizza';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import OnePizza from './pages/OnePizza';
import { Nav, Navbar } from 'react-bootstrap';
import EditPizza from './pages/EditPizza';
import AddPizza from './pages/AddPizza';
import Cart from './pages/Cart';
import Login from './pages/Login';

createRoot(document.getElementById('root')!).render(
    <>
        <Navbar>
            <Nav>
                <Nav.Link href="/">All Pizza</Nav.Link>
                <Nav.Link href="/add">Add Pizza</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllPizza />} />
                <Route path="/:id" element={<OnePizza />} />
                <Route path="/edit/:id" element={<EditPizza />} />
                <Route path="/add" element={<AddPizza />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
        <ToastContainer theme="colored" limit={5} closeOnClick />
    </>,
);
