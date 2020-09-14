import React, { useContext, useEffect, useState } from "react"
import { MyClosetContext } from "./MyClosetProvider"

export const ClothingItem = (props) => {
    const {deleteClosetItem, getClosetItemById} = useContext(MyClosetContext)
    // const {closetItem, setClosetItem} = useState({category:{}})

    // useEffect(()=> {
    //     const closetItemId = parseInt(props.match.params.closetItemId)
    //     getClosetItemById(closetItemId)
    //         .then(setClosetItem)
    // }, [])

    return (
    <section className = "item">
        {/* <img></img> */}
        <div className="item__type">{props.closetItem.type}</div>
        <div className="item__color">{props.closetItem.color}</div>
        <div className="item__size">{props.closetItem.size}</div>
        <div className="item__material">{props.closetItem.material}</div>
        <div className="item__purchased">{props.closetItem.placeOfPurchase}</div>

        <button onClick={
                () => {
                    deleteClosetItem(props.closetItem.id)
                        .then(() => {
                            props.history.push(`/myCloset`)
                        })
                }
            }>
                Delete Item
            </button>
            <button onClick={() => {
                props.history.push(`/myCloset/edit/${props.closetItem.id}`)
            }}>Edit Item</button>
    </section>
)
}