import React, { useContext } from "react"
import { MyClosetContext } from "./MyClosetProvider"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
  import EditIcon from '@material-ui/icons/Edit';
  import DeleteIcon from '@material-ui/icons/Delete';
import "./MyCloset.css"

export const ClothingItem = (props) => {
    const {deleteClosetItem} = useContext(MyClosetContext)
    
    return (
    <section className = "item">
        <Card className="closetItemCard">
            <CardBody className="closetItemCardBody">
                <CardImg src={props.closetItem.image} style={{width: "175px"}}/>
                <CardTitle className="item__type"> {props.closetItem.type}</CardTitle>
                    <div className="item__color">Color: {props.closetItem.color}</div>
                        <CardText className="item__size">Size: {props.closetItem.size}</CardText>
                        <CardText className="item__material">Material: {props.closetItem.material}</CardText>
                        <CardText className="item__purchased">Purchased at: {props.closetItem.placeOfPurchase}</CardText>
                        <Button className="deleteIconButton" onClick={
                            () => {
                                deleteClosetItem(props.closetItem.id)
                                    .then(() => {
                                        props.history.push(`/myCloset`)
                                    })
                            }
                        }>
                            <DeleteIcon className="deleteIcon" />
                        </Button>
                        <Button className="editIconButton" onClick={() => {
                            props.history.push(`/myCloset/edit/${props.closetItem.id}`)
                        }}>
                            <EditIcon className="editIcon"/>
                        </Button>
            </CardBody>
        </Card>
    </section>
)
}