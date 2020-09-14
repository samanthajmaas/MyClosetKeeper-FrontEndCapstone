import React from "react"
import { Link, Route } from "react-router-dom"
import { MyClosetList } from "./myCloset/myClosetList"
import { MyClosetProvider } from "./myCloset/myClosetProvider"
import { MainPageLinks } from "./nav/MainPage"


export const ApplicationViews = (props) => {
    return (
        <>  
        
            {/* This is what makes it so the main menu is not a nav bar but it is a menu that leads you to other pages */}
            <Route exact path = "/" render={props => <MainPageLinks {...props} />} />
            <Link className="navbar__link" to="/">Home</Link>

            {/* Renders my closet list */}
            <MyClosetProvider>
                <Route exact path="/myCloset">
                    <MyClosetList />
                </Route>
            </MyClosetProvider>


            {/* Used to logout current user and should always be at the bottom of the page */}
            <Link className="navbar__link" to="/logout">Logout</Link>
            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("closet__user")
                    props.history.push("/login")
                }
            } />

        </>
    )
}