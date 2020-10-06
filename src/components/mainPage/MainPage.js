import React, { useContext } from "react"
import { Link} from "react-router-dom"
import { ButtonToggle } from "reactstrap"
import "./MainPage.css"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const MainPageLinks = (props) => {
    
    const userName = localStorage.getItem("closet__user")

    return (
        <>
         {/* Used to logout current user and should always be at the bottom of the page */}
         <Link className="logout" to="/logout"><ExitToAppIcon style={{ fontSize: 45 }} className="exitIcon" /></Link>
            
        <h2 className="mainPage__welcome">Welcome  {userName.name} </h2>
        <section className="mainPage">
            <ButtonToggle className="mainPageButton" ><Link className="mainPage__link" to="/myCloset">My Closet</Link></ButtonToggle >{' '}
            <ButtonToggle className="mainPageButton"> <Link className="mainPage__link" to="/outfits">Outfits</Link> </ButtonToggle>{' '}
            <ButtonToggle className="mainPageButton"> <Link className="mainPage__link" to="/suitcases">Suitcases</Link> </ButtonToggle>{' '}
        </section>
        </>
    )
}