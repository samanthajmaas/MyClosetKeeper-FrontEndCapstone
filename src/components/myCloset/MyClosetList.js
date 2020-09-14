import React, {useState, useContext, useEffect} from "react"
import {MyClosetContext} from "./MyClosetProvider"
import {ClothingItem} from "./ClosetItem"

export const MyTopsList = ({history}) => {
    const {closetItems, getClosetItems} = useContext(MyClosetContext)
    
    useEffect(()=> {
        getClosetItems()
    }, [])

    return (
        <>
        <h1> My Closet</h1>

        <div className="closetItems">
            {
                closetItems.map(closetItem => {
                    if (closetItem.categorieId === 1) {
                    return <ClothingItem key={closetItem.id} closetItem={closetItem} />
                }})
            }
        </div>
        </>
    )
}

export const MyBottomsList = ({history}) => {
    const {closetItems, getClosetItems} = useContext(MyClosetContext)
    
    useEffect(()=> {
        getClosetItems()
    }, [])

    return (
        <>
        <h1> My Closet</h1>

        <div className="closetItems">
            {
                closetItems.map(closetItem => {
                    if (closetItem.categorieId === 2) {
                    return <ClothingItem key={closetItem.id} closetItem={closetItem} />
                }})
            }
        </div>
        </>
    )
}

export const MyOnePiecesList = ({history}) => {
    const {closetItems, getClosetItems} = useContext(MyClosetContext)
    
    useEffect(()=> {
        getClosetItems()
    }, [])

    return (
        <>
        <h1> My Closet</h1>

        <div className="closetItems">
            {
                closetItems.map(closetItem => {
                    if (closetItem.categorieId === 3) {
                    return <ClothingItem key={closetItem.id} closetItem={closetItem} />
                }})
            }
        </div>
        </>
    )
}

export const MyJacketsList = ({history}) => {
    const {closetItems, getClosetItems} = useContext(MyClosetContext)
    
    useEffect(()=> {
        getClosetItems()
    }, [])

    return (
        <>
        <h1> My Closet</h1>

        <div className="closetItems">
            {
                closetItems.map(closetItem => {
                    if (closetItem.categorieId === 4) {
                    return <ClothingItem key={closetItem.id} closetItem={closetItem} />
                }})
            }
        </div>
        </>
    )
}

export const MyShoesList = ({history}) => {
    const {closetItems, getClosetItems} = useContext(MyClosetContext)
    
    useEffect(()=> {
        getClosetItems()
    }, [])

    return (
        <>
        <h1> My Closet</h1>

        <div className="closetItems">
            {
                closetItems.map(closetItem => {
                    if (closetItem.categorieId === 5) {
                    return <ClothingItem key={closetItem.id} closetItem={closetItem} />
                }})
            }
        </div>
        </>
    )
}

export const MyAccessoriesList = ({history}) => {
    const {closetItems, getClosetItems} = useContext(MyClosetContext)
    
    useEffect(()=> {
        getClosetItems()
    }, [])

    return (
        <>
        <h1> My Closet</h1>

        <div className="closetItems">
            {
                closetItems.map(closetItem => {
                    if (closetItem.categorieId === 6) {
                    return <ClothingItem key={closetItem.id} closetItem={closetItem} />
                }})
            }
        </div>
        </>
    )
}