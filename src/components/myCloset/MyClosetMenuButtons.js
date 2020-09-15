import React from "react"
import {Link} from "react-router-dom"

export const MyClosetMenuButtons = ({history}) => {
    return (
        <>
        <h2>My Closet</h2>
        <button onClick={() => history.push("/myCloset/create")}>
                +Item
        </button>
        <ul className="myClosetMenu">
            <li className="myClosetMenu__item">
                <Link className="myClosetMenu__link" to="/myCloset/tops">Tops</Link>
            </li>
            <li className="myClosetMenu__item">
                <Link className="myClosetMenu__link" to="/myCloset/bottoms">Bottoms</Link>
            </li>
            <li className="myClosetMenu__item">
                <Link className="myClosetMenu__link" to="/myCloset/onePieces">One Pieces</Link>
            </li>
            <li className="myClosetMenu__item">
                <Link className="myClosetMenu__link" to="/myCloset/jackets">Jackets</Link>
            </li>
            <li className="myClosetMenu__item">
                <Link className="myClosetMenu__link" to="/myCloset/shoes">Shoes</Link>
            </li>
            <li className="myClosetMenu__item">
                <Link className="myClosetMenu__link" to="/myCloset/accessorys">Accessories</Link>
            </li>
        </ul>
        </>
    )
}