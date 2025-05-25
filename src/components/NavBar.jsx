import { Link } from "react-router-dom"
import "./navBar.css"

function NavBar() {
    return (
         <nav>
            <ul>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/portfolio"> Portfolio </Link> </li>
                <li> <Link to="/project"> Project Form </Link> </li>
                <li> <Link to="/interest"> Interest </Link> </li>
                
            </ul>
        </nav>       
    )
}

export default NavBar
