import React from "react"
import { Link } from "react-router-dom"


export const MainPageLinks = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/myCloset">My Closet</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/outfits">Outfits</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/suitcases">Suitcase</Link>
            </li>
        </ul>
    )
}