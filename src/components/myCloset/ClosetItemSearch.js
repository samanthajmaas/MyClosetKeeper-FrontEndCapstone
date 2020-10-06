import React, { useContext } from "react"
import "./MyCloset.css"
import { MyClosetContext } from "./MyClosetProvider"

export const ClosetItemSearch = () => {
    const { setTerms } = useContext(MyClosetContext)

    return (
        <>
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setTerms(keyEvent.target.value)
                }
                placeholder="Search for an item... " />
        </>
    )
}