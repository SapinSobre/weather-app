import React, {useRef, useState} from 'react'
import '../sass/Form.scss'

const Form = ({cityForecastValue, setCityForecastValue, photo, setPhoto, cityvalue, setCityvalue}) => { 
    const axios = require('axios')
    const appid = 'f413a0a53cce0f97a3a962ac05dd5c73'
    const appidUnsplash = 'sTlQ_vujC-LpbG-Fm6rF3UWiVV3MDSSBmXc373cErUw'

    const inputRef = useRef("")   
    const [city, setCity] = useState()
    const [lat, setLat] = useState()
    const [lon, setLon] = useState()
    
    const fetchInputValue = (event) => {  
        let forecastTab = []

        if(event.key === 'Enter'){

            setCity(inputRef.current) 
            let cityval = "tokyo"
            
            axios.get(`https://api.unsplash.com/search/photos?client_id=${appidUnsplash}&page=1&query=${cityval}`)
            .then((im) => {               
                setPhoto(im.data.results[0].urls.regular)                                      
            })
         
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=${appid}&units=metric`) 
            .then((cit) => {               

                const newCityObject = {
                    location : cit.data.name,
                    temp : cit.data.main.temp.toFixed(),
                    weather: cit.data.weather[0].main,
                    feels : cit.data.main.feels_like.toFixed(),
                    humidity : cit.data.main.humidity,
                    wind : cit.data.wind.speed.toFixed(),
                    img : photo,
                    lat: cit.data.coord.lat,
                    lon : cit.data.coord.lon,
                    icon: cit.data.weather[0].icon
                }     
                setCityvalue(newCityObject)
                setLat(newCityObject.lat) 
                setLon(newCityObject.lon)                                       
            }) 
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${appid}&units=metric`)
            .then((forecastCit) => {  
                console.log(forecastCit)               
                for(let i = 0; i < 5; i++){
                    let newForecastCityObject = {
                        dayTemp : forecastCit.data.daily[i].temp.day.toFixed(),
                        nightTemp : forecastCit.data.daily[i].temp.night.toFixed(),
                        humidity : forecastCit.data.daily[i].humidity,
                        windSpeed : forecastCit.data.daily[i].wind_speed.toFixed(),
                        icon : forecastCit.data.daily[i].weather[0].icon,
                        description : forecastCit.data.daily[i].weather[0].description
                    }   
                    forecastTab.push(newForecastCityObject)  
                    console.log(forecastTab)     
                }                      
                setCityForecastValue(forecastTab) 
            }) 
            console.log(cityForecastValue)      
        };
    } 

    return(
        <div className="form">
            <label className="form_label">
                City where I am : 
                <input 
                    ref={inputRef}
                    className="form_cityInput"
                    onKeyUp={(e) => fetchInputValue(e)}
                    type="text"
                    placeholder="Enter a city"/>
            </label>
        </div>
    )
}
export default Form