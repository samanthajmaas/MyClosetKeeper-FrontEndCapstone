import React from "react"
import { Route } from "react-router-dom"
import { MyClosetList } from "./myCloset/myClosetList"
import { MyClosetProvider } from "./myCloset/myClosetProvider"


export const ApplicationViews = (props) => {
    return (
        <>
            <MyClosetProvider>
                <Route exact path="/">
                    <MyClosetList />
                </Route>
            </MyClosetProvider>

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("kennel__customer")
                    props.history.push("/login")
                }
            } />

        </>
    )
}