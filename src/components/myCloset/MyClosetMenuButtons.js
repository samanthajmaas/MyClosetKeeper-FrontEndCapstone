import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ButtonToggle } from "reactstrap"
import { ClothingItem } from "./ClosetItem"

import "./MyCloset.css"
import { MyClosetContext } from "./MyClosetProvider"

export const MyClosetMenuButtons = (props) => {
    const { closetItems, getClosetItems, searchTerms } = useContext(MyClosetContext)

    const [filteredClosetItems, setFiltered] = useState([])

    useEffect(() => {
        getClosetItems()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = closetItems.filter(closetItem => 
                closetItem.type.toLowerCase().includes(searchTerms.toLowerCase()) || closetItem.color.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else (
            setFiltered([])
        )
    }, [searchTerms, closetItems])

    return (
        <>
            <h2 className="myClosetHeader">My Closet</h2>
            <button className="addClosetItemButton" onClick={() => props.history.push("/myCloset/create")}>
                +Item
            </button>
            {filteredClosetItems.length !== 0 ?
                <div className="searchedClosetItems">
                    {
                        filteredClosetItems.map(closetItem => {
                            return <ClothingItem key={closetItem.id} closetItem={closetItem} {...props} />
                        })
                    }
                </div>
                :
                <section className="myClosetMenu">
                    <ButtonToggle className="myClosetCategoryButton" >
                        <Link className="myClosetMenu__link" to="/myCloset/tops">Tops</Link>
                    </ButtonToggle>
                    <ButtonToggle className="myClosetCategoryButton" >
                        <Link className="myClosetMenu__link" to="/myCloset/bottoms">Bottoms</Link>
                    </ButtonToggle>
                    <ButtonToggle className="myClosetCategoryButton" >
                        <Link className="myClosetMenu__link" to="/myCloset/onePieces">One Pieces</Link>
                    </ButtonToggle>
                    <ButtonToggle className="myClosetCategoryButton" >
                        <Link className="myClosetMenu__link" to="/myCloset/jackets">Jackets</Link>
                    </ButtonToggle>
                    <ButtonToggle className="myClosetCategoryButton" >
                        <Link className="myClosetMenu__link" to="/myCloset/shoes">Shoes</Link>
                    </ButtonToggle>
                    <ButtonToggle className="myClosetCategoryButton" >
                        <Link className="myClosetMenu__link" to="/myCloset/accessorys">Accessories</Link>
                    </ButtonToggle>
                </section>
            }
        </>
    )
}