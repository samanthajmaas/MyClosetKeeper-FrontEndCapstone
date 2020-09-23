import React from "react"
import {Link} from "react-router-dom"
import { ButtonToggle } from "reactstrap"
import "./MyCloset.css"

export const MyClosetMenuButtons = ({history}) => {
    return (
        <>
        <h2 className="myClosetHeader">My Closet</h2>
        <button className="addClosetItemButton" onClick={() => history.push("/myCloset/create")}>
                +Item
        </button>
        <section className="myClosetMenu">
            <ButtonToggle className="myClosetCategoryButton" >
                <Link className="myClosetMenu__link" to="/myCloset/tops">Tops</Link>
            </ButtonToggle>
            <ButtonToggle className="myClosetCategoryButton" >
                <Link className="myClosetMenu__link" to="/myCloset/bottoms">Bottoms</Link>
            </ButtonToggle>
            <ButtonToggle className="myClosetCategoryButton" >
                <Link className="myClosetMenu__link" to="/myCloset/onePieces">One Pieces</Link>
            </ButtonToggle>
            <ButtonToggle className="myClosetCategoryButton" >
                <Link className="myClosetMenu__link" to="/myCloset/jackets">Jackets</Link>
            </ButtonToggle>
            <ButtonToggle className="myClosetCategoryButton" >
                <Link className="myClosetMenu__link" to="/myCloset/shoes">Shoes</Link>
            </ButtonToggle>
            <ButtonToggle className="myClosetCategoryButton" >
                <Link className="myClosetMenu__link" to="/myCloset/accessorys">Accessories</Link>
            </ButtonToggle>
        </section>
        </>
    )
}