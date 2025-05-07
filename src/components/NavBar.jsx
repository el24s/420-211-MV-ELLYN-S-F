import React from "react"
import { Link } from "react-router-dom"
import "./navBar.css"

function NavBar() {
    return (
         <nav>
            
            {/* remettre interest et portfolio */}
            <Link to="/interest">  </Link>
            <Link to="/portfolio">  </Link>
        </nav>       
    )
}

export default NavBar

// neutraliser la bordure blache des navigateurs de base