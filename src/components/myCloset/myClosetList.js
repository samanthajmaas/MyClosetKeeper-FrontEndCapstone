import React, {useState, useContext, useEffect} from "react"
import {MyClosetContext} from "./myClosetProvider"
import {ClothingItem} from "./myClosetItem"

export const MyClosetList = ({history}) => {
    const {closetItems, getClosetItems} = useContext(MyClosetContext)
    
    useEffect(()=> {
        getClosetItems()
    }, [])

    return (
        <>
        <h1> My Closet</h1>

        <div className="closetItems">
            {
                closetItems.map(closetItems => {
                    return <ClothingItem key = {closetItems.id} closetItems = {closetItems} />
                })
            }
        </div>
        </>
    )
}