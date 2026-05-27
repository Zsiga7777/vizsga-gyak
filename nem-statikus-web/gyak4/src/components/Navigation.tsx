import { Container,  Nav,  Navbar } from "react-bootstrap"

const Navigation = () => {
    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand className="text-white">
                    Filmek
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/movies" className="text-white">
                        Filmek listája
                    </Nav.Link>
                    <Nav.Link href="/cart" className="text-white">
                        Kosár
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation