import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"

const NavComponent = () => {
    const navigate = useNavigate()

    return <>
    <div>
            <Button onClick={() => navigate("/allPizzas")}>Összes pizza</Button>
            <Button onClick={() => navigate("/createPizza")}>Pizza létrehozás</Button>
            <Button onClick={() => navigate("/cart")}>Kosár</Button>
        </div></>
}

export default NavComponent