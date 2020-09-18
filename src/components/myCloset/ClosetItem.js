import React, { useContext } from "react"
import { MyClosetContext } from "./MyClosetProvider"

export const ClothingItem = (props) => {
    const {deleteClosetItem} = useContext(MyClosetContext)
    
    return (
    <section className = "item">
        <img src={props.closetItem.image} style={{width: "100px"}}/>
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
                Delete
            </button>
            <button onClick={() => {
                props.history.push(`/myCloset/edit/${props.closetItem.id}`)
            }}>Edit</button>
    </section>
)
}