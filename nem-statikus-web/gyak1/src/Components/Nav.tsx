import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"

const Nav = () => {
    const navigate = useNavigate()
    return <>
    <div>
        <Button onClick={() => navigate("/allCar")}>Összes autó </Button>
       <Button onClick={() => navigate("/cart")}>Kosár </Button>
       <Button onClick={() => navigate("/createCar")}>Autó hozzáadása </Button>
    </div>
    </>
}

export default Nav