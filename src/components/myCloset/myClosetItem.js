import React from "react"

export const ClothingItem = ({closetItems}) => (
    <section className = "item">
        {/* <img></img> */}
        <div className="item__type">{closetItems.type}</div>
        <div className="item__color">{closetItems.color}</div>
        <div className="item__size">{closetItems.size}</div>
        <div className="item__material">{closetItems.material}</div>
        <div className="item__purchased">{closetItems.placeOfPurchase}</div>
    </section>
)