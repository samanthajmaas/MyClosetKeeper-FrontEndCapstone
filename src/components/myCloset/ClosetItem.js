import React, { useContext } from "react"
import { MyClosetContext } from "./MyClosetProvider"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
import "./MyCloset.css"

export const ClothingItem = (props) => {
    const {deleteClosetItem} = useContext(MyClosetContext)
    
    return (
    <section className = "item">
        <Card className="closetItemCard">
            <CardBody className="closetItemCardBody">
                <CardImg src={props.closetItem.image} style={{width: "100px"}}/>
                <CardTitle className="item__type">{props.closetItem.type}</CardTitle>
                    <div className="item__color">{props.closetItem.color}</div>
                        <CardText className="item__size">{props.closetItem.size}</CardText>
                        <CardText className="item__material">{props.closetItem.material}</CardText>
                        <CardText className="item__purchased">{props.closetItem.placeOfPurchase}</CardText>
                        <Button onClick={
                            () => {
                                deleteClosetItem(props.closetItem.id)
                                    .then(() => {
                                        props.history.push(`/myCloset`)
                                    })
                            }
                        }>
                            Delete
                        </Button>
                        <Button onClick={() => {
                            props.history.push(`/myCloset/edit/${props.closetItem.id}`)
                        }}>
                            Edit
                        </Button>
            </CardBody>
        </Card>
    </section>
)
}