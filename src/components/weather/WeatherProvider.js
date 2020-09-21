import React, { useState } from "react"

export const WeatherContext = React.createContext()

export const WeatherProvider = (props) => {
    const [weather, setWeather] = useState([])

    const getWeather = (zip) => {
        return fetch(`api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=b691da30b2e61fbe87065cf7cc3812ca`)
            .then(res => res.json())
            .then(res => {
                setWeather(res.list)
            }
            )
    }

    return (
        <WeatherContext.Provider value={{
            weather, getWeather
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}