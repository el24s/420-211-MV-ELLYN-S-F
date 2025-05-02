import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <Link to="/interest"> Interest </Link>
            <Link to="/portfolio"> Portfolio </Link>
        </nav>
    )
}

export default NavBar

// neutraliser la bordure blache des navigateurs de base