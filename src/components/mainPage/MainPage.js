import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ButtonToggle } from "reactstrap"
import { UsersContext } from "../auth/UsersProvider"
import "./MainPage.css"

export const MainPageLinks = (props) => {
    
    const userName = localStorage.getItem("closet__user")

    return (
        <>
        <h2 className="mainPage__welcome">Welcome  {userName.name} </h2>
        <section className="mainPage">
            <ButtonToggle className="mainPageButton" ><Link className="mainPage__link" to="/myCloset">My Closet</Link></ButtonToggle >{' '}
            <ButtonToggle className="mainPageButton"> <Link className="mainPage__link" to="/outfits">Outfits</Link> </ButtonToggle>{' '}
            <ButtonToggle className="mainPageButton"> <Link className="mainPage__link" to="/suitcases">Suitcase</Link> </ButtonToggle>{' '}
        </section>
        </>
    )
}