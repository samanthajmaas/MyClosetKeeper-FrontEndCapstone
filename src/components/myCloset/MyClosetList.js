import React, { useContext, useEffect } from "react"
import { MyClosetContext } from "./MyClosetProvider"
import { ClothingItem } from "./ClosetItem"
import { Link } from "react-router-dom"

export const MyTopsList = (props) => {
    const { closetItems, getClosetItems } = useContext(MyClosetContext)

    useEffect(() => {
        getClosetItems()
    }, [])

    const filteredClosetItems = closetItems.filter(closetItem => closetItem.userId === parseInt(localStorage.getItem("closet__user"))) || {}

    return (
        <>
            <Link className="navbar__link" to="/MyCloset">Back to My Closet</Link>
            <h1> Tops </h1>

            <div className="closetItems">
                {
                    filteredClosetItems.map(closetItem => {
                        if (closetItem.categoryId === 1) {
                            return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                        }
                    })
                }
            </div>

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
            <Link className="navbar__link" to="/MyCloset">Back to My Closet</Link>
            <h1> Bottoms </h1>

            <div className="closetItems">
                {
                    filteredClosetItems.map(closetItem => {
                        if (closetItem.categoryId === 2) {
                            return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                        }
                    })
                }
            </div>
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
            <Link className="navbar__link" to="/MyCloset">Back to My Closet</Link>
            <h1> One-Pieces </h1>

            <div className="closetItems">
                {
                    filteredClosetItems.map(closetItem => {
                        if (closetItem.categoryId === 3) {
                            return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                        }
                    })
                }
            </div>
        </>
    )
}

export const MyJacketsList = (props) => {
    const { closetItems, getClosetItems } = useContext(MyClosetContext)

    useEffect(() => {
        getClosetItems()
    }, [])

    const filteredClosetItems = closetItems.filter(closetItem => closetItem.userId === parseInt(localStorage.getItem("closet__user"))) || {}

    return (
        <>
            <Link className="navbar__link" to="/MyCloset">Back to My Closet</Link>
            <h1> Jackets </h1>

            <div className="closetItems">
                {
                    filteredClosetItems.map(closetItem => {
                        if (closetItem.categoryId === 4) {
                            return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                        }
                    })
                }
            </div>
        </>
    )
}

export const MyShoesList = (props) => {
    const { closetItems, getClosetItems } = useContext(MyClosetContext)

    useEffect(() => {
        getClosetItems()
    }, [])

    const filteredClosetItems = closetItems.filter(closetItem => closetItem.userId === parseInt(localStorage.getItem("closet__user"))) || {}


    return (
        <>
            <Link className="navbar__link" to="/MyCloset">Back to My Closet</Link>
            <h1> Shoes </h1>


            <div className="closetItems">
                {
                    filteredClosetItems.map(closetItem => {
                        if (closetItem.categoryId === 5) {
                            return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                        }
                    })
                }
            </div>
        </>
    )
}

export const MyAccessoriesList = (props) => {
    const { closetItems, getClosetItems } = useContext(MyClosetContext)

    useEffect(() => {
        getClosetItems()
    }, [])

    const filteredClosetItems = closetItems.filter(closetItem => closetItem.userId === parseInt(localStorage.getItem("closet__user"))) || {}


    return (
        <>
            <Link className="navbar__link" to="/MyCloset">Back to My Closet</Link>
            <h1> Accessories </h1>

            <div className="closetItems">
                {
                    filteredClosetItems.map(closetItem => {
                        if (closetItem.categoryId === 6) {
                            return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                        }
                    })
                }
            </div>
        </>
    )
}