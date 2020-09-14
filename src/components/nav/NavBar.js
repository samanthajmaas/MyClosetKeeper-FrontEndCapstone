import React from "react"
import { Link } from "react-router-dom"


export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">My Closet</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Outfits</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Suitcase</Link>
            </li>
            <li className= "navbar__item">
                <Link className="navbar__link" to="/logout">Logout</Link>
            </li>
        </ul>
    )
}