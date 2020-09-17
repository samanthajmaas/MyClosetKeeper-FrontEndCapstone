import React from "react"
import { Link, Route } from "react-router-dom"
import { MyTopsList, MyBottomsList, MyOnePiecesList, MyJacketsList, MyShoesList, MyAccessoriesList } from "./myCloset/MyClosetList"
import { MyClosetProvider } from "./myCloset/MyClosetProvider"
import { MainPageLinks } from "./mainPage/MainPage"
import { MyClosetMenuButtons } from "./myCloset/MyClosetMenuButtons"
import { NewClosetItemForm } from "./myCloset/NewClosetItemForm"
import { CategoriesProvider } from "./myCloset/CategoriesProvider"
import { OutfitsProvider } from "./outfits/OutfitsProvider"
import { ClothingItemsOutfitsProvider } from "./outfits/ClothingItemsOutfitsProvider"
import { OutfitsList } from "./outfits/OutfitsList"
import { NewOutfitForm } from "./outfits/OutfitsForm"


export const ApplicationViews = (props) => {
    return (
        <>

            <Route exact path="/myCloset" render={props => <MyClosetMenuButtons {...props} />} />

            {/* This is what makes it so the main menu is not a nav bar but it is a menu that leads you to other pages */}
            <Route exact path="/" render={props => <MainPageLinks {...props} />} />
            <Link className="navbar__link" to="/">Home</Link>

            {/* Renders my closet list. Has all different functions depending on the category due to the different routes.*/}
            <MyClosetProvider>
                <CategoriesProvider>
                    <Route exact path="/myCloset/tops" render={props => <MyTopsList {...props} />}>

                    </Route>

                    <Route exact path="/myCloset/bottoms" render={props => <MyBottomsList {...props} />}>

                    </Route>

                    <Route exact path="/myCloset/onePieces" render={props => <MyOnePiecesList {...props} />}>

                    </Route>

                    <Route exact path="/myCloset/jackets" render={props => <MyJacketsList {...props} />}>

                    </Route>

                    <Route exact path="/myCloset/shoes" render={props => <MyShoesList {...props} />}>

                    </Route>

                    <Route exact path="/myCloset/accessorys" render={props => <MyAccessoriesList {...props} />}>

                    </Route>

                    <Route exact path="/myCloset/create" render={
                        props => <NewClosetItemForm {...props} />
                    } />

                    <Route path="/myCloset/edit/:closetItemId(\d+)" render={
                        props => <NewClosetItemForm {...props} />
                    } />
                </CategoriesProvider>
            </MyClosetProvider>

            <OutfitsProvider>
                <MyClosetProvider>
                    <ClothingItemsOutfitsProvider>
                        <Route exact path="/outfits" render={
                            props => <OutfitsList {...props} />
                        }>
                        </Route>
                        <Route exact path="/outfits/:outfitId(\d+)/create" render={
                            props => <NewOutfitForm {...props} />
                        } />

                        <Route path="/outfits/edit/:outfitId(\d+)" render={
                            props => <NewOutfitForm {...props} />
                        } />

                    </ClothingItemsOutfitsProvider>
                </MyClosetProvider>
            </OutfitsProvider>


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