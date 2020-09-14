import React from "react"

export const ClothingItem = ({closetItem}) => (
    <section className = "item">
        {/* <img></img> */}
        <div className="item__type">{closetItem.type}</div>
        <div className="item__color">{closetItem.color}</div>
        <div className="item__size">{closetItem.size}</div>
        <div className="item__material">{closetItem.material}</div>
        <div className="item__purchased">{closetItem.placeOfPurchase}</div>
    </section>
)