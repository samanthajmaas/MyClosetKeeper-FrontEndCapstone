import React from "react"
import { Link } from "react-router-dom"
import { ButtonToggle } from "reactstrap"
import "./MainPage.css"


export const MainPageLinks = (props) => {
    return (
        <>
        <h2 className="mainPage__welcome">Welcome  </h2>
        <section className="mainPage">
            <ButtonToggle className="mainPageButton" ><Link className="mainPage__link" to="/myCloset">My Closet</Link></ButtonToggle >{' '}
            <ButtonToggle className="mainPageButton"> <Link className="mainPage__link" to="/outfits">Outfits</Link> </ButtonToggle>{' '}
            <ButtonToggle className="mainPageButton"> <Link className="mainPage__link" to="/suitcases">Suitcase</Link> </ButtonToggle>{' '}
        </section>
        </>
    )
}