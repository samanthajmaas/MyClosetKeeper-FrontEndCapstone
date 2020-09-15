import React, { useContext, useEffect } from "react"
import { MyClosetContext } from "./MyClosetProvider"
import { ClothingItem } from "./ClosetItem"

export const MyTopsList = (props) => {
    const { closetItems, getClosetItems } = useContext(MyClosetContext)

    useEffect(() => {
        getClosetItems()
    }, [])

    return (
        <>
            <h1> Tops </h1>

            <div className="closetItems">
                {
                    closetItems.map(closetItem => {
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

    return (
        <>
            <h1> Bottoms </h1>

            <div className="closetItems">
                {
                    closetItems.map(closetItem => {
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

    return (
        <>
            <h1> One-Pieces </h1>

            <div className="closetItems">
                {
                    closetItems.map(closetItem => {
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

    return (
        <>
            <h1> Jackets </h1>

            <div className="closetItems">
                {
                    closetItems.map(closetItem => {
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

    return (
        <>
            <h1> Shoes </h1>

            <div className="closetItems">
                {
                    closetItems.map(closetItem => {
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

    return (
        <>
            <h1> Accessories </h1>

            <div className="closetItems">
                {
                    closetItems.map(closetItem => {
                        if (closetItem.categoryId === 6) {
                            return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                        }
                    })
                }
            </div>
        </>
    )
}