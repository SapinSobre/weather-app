import React, {useRef, useState} from 'react'
import '../sass/Form.scss'

const Form = ({photo, setPhoto, cityvalue, setCityvalue}) => { 
    const axios = require('axios')
    const inputRef = useRef()    
    
    const appid = 'f413a0a53cce0f97a3a962ac05dd5c73'
    const appidUnsplash = 'sTlQ_vujC-LpbG-Fm6rF3UWiVV3MDSSBmXc373cErUw'
    const [city, setCity] = useState()

    const fetchInputValue = (event) => {  

        if(event.key === 'Enter'){

            setCity(inputRef.current) 
            let cityval = city.value 
            
            axios.get(`https://api.unsplash.com/search/photos?client_id=${appidUnsplash}&page=1&query=${cityval}`)
            .then((im) => {               
                setPhoto(im.data.results[0].urls.regular)                                      
            })
         
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=${appid}`) 
            .then((cit) => { 
                const newCityObject = {
                    location : cit.data.name,
                    temp : cit.data.main.temp.toFixed(),
                    weather: cit.data.weather[0].main,
                    feels : cit.data.main.feels_like.toFixed(),
                    humidity : cit.data.main.humidity,
                    wind : cit.data.wind.speed.toFixed(),
                    img : photo
                }               
                setCityvalue(newCityObject)                   
            }) 
           
                 
        };
    } 

    return(
        <div className="form">
            <input 
                ref={inputRef}
                className="form_cityInput"
                onKeyUp={(e) => fetchInputValue(e)}
                type="text"
                placeholder="Veuillez entrer le nom d'une ville."/>
        </div>
    )
}
export default Form