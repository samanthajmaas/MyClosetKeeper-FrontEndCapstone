import React from "react"
import { Link, Route } from "react-router-dom"
import {  MyTopsList, MyBottomsList, MyOnePiecesList, MyJacketsList, MyShoesList, MyAccessoriesList } from "./myCloset/MyClosetList"
import { MyClosetProvider } from "./myCloset/MyClosetProvider"
import { MainPageLinks } from "./mainPage/MainPage"
import { MyClosetMenuButtons } from "./myCloset/MyClosetMenuButtons"


export const ApplicationViews = (props) => {
    return (
        <>  

            <Route exact path = "/myCloset" render={props => <MyClosetMenuButtons {...props} />} />

            {/* This is what makes it so the main menu is not a nav bar but it is a menu that leads you to other pages */}
            <Route exact path = "/" render={props => <MainPageLinks {...props} />} />
            <Link className="navbar__link" to="/">Home</Link>

            {/* Renders my closet list. Has all different functions depending on the category due to the different routes.*/}
            <MyClosetProvider>
                <Route exact path="/myCloset/tops">
                    <MyTopsList />
                </Route>

                <Route exact path="/myCloset/bottoms">
                    <MyBottomsList />
                </Route>

                <Route exact path="/myCloset/onePieces">
                    <MyOnePiecesList />
                </Route>

                <Route exact path="/myCloset/jackets">
                    <MyJacketsList />
                </Route>

                <Route exact path="/myCloset/shoes">
                    <MyShoesList />
                </Route>

                <Route exact path="/myCloset/accessories">
                    <MyAccessoriesList  />
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