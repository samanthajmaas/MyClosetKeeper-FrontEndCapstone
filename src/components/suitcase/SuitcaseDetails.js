import React from "react"
// import { WeatherList } from "../weather/WeatherList"

export const SuitcaseDetails = (props) => {
    
    return (
        <>
            <div className="suitcase__tripName">{props.suitcase.tripName}</div>
            <div className="suitcase__outfits">
                {
                    props.findOutfits.map(outfit => {
                        return (<img src={outfit.image} style={{ width: "100px" }} />)
                    })

                }
            </div>
            <div className="suitcase__closetItems">
                {
                    props.findClosetItems.map(closetItem => {
                        return (<img src={closetItem.image} style={{ width: "100px" }} />)
                    })

                }
            </div>
            {/* <div>
            <WeatherList key ={props.suitcase.id} suitcase={props.suitcase} {...props}/>
            </div> */}
            <div className="suitcase__description">{props.suitcase.description}</div>
            <button onClick={() => {
                props.history.push(`/suitcases/edit/${props.suitcase.id}`)
            }}>Edit</button>
        </>
    )
}