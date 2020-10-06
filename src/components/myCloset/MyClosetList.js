import React, { useContext, useEffect } from "react"
import { MyClosetContext } from "./MyClosetProvider"
import { ClothingItem } from "./ClosetItem"
import { Link } from "react-router-dom"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./MyCloset.css"

export const MyTopsList = (props) => {
    const { closetItems, getClosetItems, searchTerms} = useContext(MyClosetContext)

    useEffect(() => {
        getClosetItems()
    }, [])

    const filteredClosetItems = closetItems.filter(closetItem => closetItem.userId === parseInt(localStorage.getItem("closet__user"))) || {}

    return (
        <>
            <Link className="navbar__link" to="/MyCloset"><ExitToAppIcon style={{ fontSize: 45 }} className="exitIcon" /></Link>
            <section className="closetItemsList">
                <h1 className="categoryTitle"> Tops </h1>
                <div className="closetItems">
                    {
                        filteredClosetItems.map(closetItem => {
                            if (closetItem.categoryId === 1) {
                                return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                            }
                        }).reverse()
                    }
                </div>
            </section>
        </>
    )
}

export const MyBottomsList = (props) => {
    const { closetItems, getClosetItems } = useContext(MyClosetContext)

    useEffect(() => {
        getClosetItems()
    }, [])

    const filteredClosetItems = closetItems.filter(closetItem => closetItem.userId === parseInt(localStorage.getItem("closet__user"))) || {}

    return (
        <>
            <Link className="navbar__link" to="/MyCloset"><ExitToAppIcon style={{ fontSize: 45 }} className="exitIcon" /></Link>
            <section className="closetItemsList">
                <h1 className="categoryTitle"> Bottoms </h1>
                <div className="closetItems">
                    {
                        filteredClosetItems.map(closetItem => {
                            if (closetItem.categoryId === 2) {
                                return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                            }
                        }).reverse()
                    }
                </div>
            </section>
        </>
    )
}

export const MyOnePiecesList = (props) => {
    const { closetItems, getClosetItems } = useContext(MyClosetContext)

    useEffect(() => {
        getClosetItems()
    }, [])

    const filteredClosetItems = closetItems.filter(closetItem => closetItem.userId === parseInt(localStorage.getItem("closet__user"))) || {}


    return (
        <>
            <Link className="navbar__link" to="/MyCloset"><ExitToAppIcon style={{ fontSize: 45 }} className="exitIcon" /></Link>
            <section className="closetItemsList">
                <h1 className="categoryTitle"> One-Pieces </h1>
                <div className="closetItems">
                    {
                        filteredClosetItems.map(closetItem => {
                            if (closetItem.categoryId === 3) {
                                return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                            }
                        }).reverse()
                    }
                </div>
            </section>
        </>
    )
}


export const MyJacketsList = (props) => {
    const { closetItems, getClosetItems} = useContext(MyClosetContext)

    useEffect(() => {
                getClosetItems()
            }, [])

    const filteredClosetItems = closetItems.filter(closetItem => closetItem.userId === parseInt(localStorage.getItem("closet__user"))) || {}

    return (
            <>
                <Link className="navbar__link" to="/MyCloset"><ExitToAppIcon style={{ fontSize: 45 }} className="exitIcon" /></Link>
                <section className="closetItemsList">
                    <h1 className="categoryTitle"> Jackets </h1>

                    <div className="closetItems">
                        {
                            filteredClosetItems.map(closetItem => {
                                if (closetItem.categoryId === 4) {
                                    return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                                }
                            }).reverse()
                        }
                    </div>
                </section>
            </>
    )
}

export const MyShoesList = (props) => {
    const { closetItems, getClosetItems} = useContext(MyClosetContext)

    useEffect(() => {
                getClosetItems()
            }, [])

    const filteredClosetItems = closetItems.filter(closetItem => closetItem.userId === parseInt(localStorage.getItem("closet__user"))) || {}


    return (
            <>
                <Link className="navbar__link" to="/MyCloset"><ExitToAppIcon style={{ fontSize: 45 }} className="exitIcon" /></Link>
                <section className="closetItemsList">
                    <h1 className="categoryTitle"> Shoes </h1>


                    <div className="closetItems">
                        {
                            filteredClosetItems.map(closetItem => {
                                if (closetItem.categoryId === 5) {
                                    return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                                }
                            }).reverse()
                        }
                    </div>
                </section>
            </>
    )
}

export const MyAccessoriesList = (props) => {
    const { closetItems, getClosetItems} = useContext(MyClosetContext)

    useEffect(() => {
                getClosetItems()
            }, [])

    const filteredClosetItems = closetItems.filter(closetItem => closetItem.userId === parseInt(localStorage.getItem("closet__user"))) || {}


    return (
            <>
                <Link className="navbar__link" to="/MyCloset"><ExitToAppIcon style={{ fontSize: 45 }} className="exitIcon" /></Link>
                <section className="closetItemsList">
                    <h1 className="categoryTitle"> Accessories </h1>

                    <div className="closetItems">
                        {
                            filteredClosetItems.map(closetItem => {
                                if (closetItem.categoryId === 6) {
                                    return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                                }
                            }).reverse()
                        }
                    </div>
                </section>
            </>
    )
}