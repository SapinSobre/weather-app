import '../sass/DisplayResults.scss'
import React, {useEffect} from 'react'

const DisplayResults = ({cityForecastValue, setCityForecastValue, photo, setPhoto, cityvalue, setCityvalue}) => {
   
    useEffect(() => {
        console.log(cityvalue)
    }, [cityvalue])   
   
    return(
        

        <div className="displayBox">
            <ul style={{backgroundImage: `url(${photo})`}} className="cityValuesBox">
                <li className="cityValuesBox_val">{cityvalue.location}</li>
                <li className="cityValuesBox_val">{cityvalue.temp}</li>
                <li className="cityValuesBox_val">
                    <img src={`http://openweathermap.org/img/wn/${cityvalue.icon}@2x.png`} alt="city view"/>
                    {cityvalue.weather}
                </li>
                <li className="cityValuesBox_val">{cityvalue.feels}</li>
                <li className="cityValuesBox_val">{cityvalue.humidity}</li>
                <li className="cityValuesBox_val">{cityvalue.wind}</li>               
            </ul>
            <div>
                <ul>
                    <li className="cityValuesBox_val">{cityForecastValue.dayTemp}</li>
                    <li className="cityValuesBox_val">{cityForecastValue.nightTemp}</li>
                    <li className="cityValuesBox_val">{cityvalue.location}</li>
                    <li className="cityValuesBox_val">{cityvalue.temp}</li>
                    <li className="cityValuesBox_val">{cityvalue.weather}</li>
                    <li className="cityValuesBox_val">{cityvalue.feels}</li>
                    <li className="cityValuesBox_val">{cityvalue.humidity}</li>
                    <li className="cityValuesBox_val">{cityvalue.wind}</li>
                    <li className="cityValuesBox_val">{cityvalue.humidity}</li>
                    <li className="cityValuesBox_val">{cityvalue.lon}</li>
                </ul>
                <ul>
                    <li className="cityValuesBox_val">{cityvalue.location}</li>
                    <li className="cityValuesBox_val">{cityvalue.temp}</li>
                    <li className="cityValuesBox_val">{cityvalue.weather}</li>
                    <li className="cityValuesBox_val">{cityvalue.feels}</li>
                    <li className="cityValuesBox_val">{cityvalue.humidity}</li>
                    <li className="cityValuesBox_val">{cityvalue.wind}</li>
                    <li className="cityValuesBox_val">{cityvalue.humidity}</li>
                    <li className="cityValuesBox_val">{cityvalue.lon}</li>
                </ul>
                <ul>
                    <li className="cityValuesBox_val">{cityvalue.location}</li>
                    <li className="cityValuesBox_val">{cityvalue.temp}</li>
                    <li className="cityValuesBox_val">{cityvalue.weather}</li>
                    <li className="cityValuesBox_val">{cityvalue.feels}</li>
                    <li className="cityValuesBox_val">{cityvalue.humidity}</li>
                    <li className="cityValuesBox_val">{cityvalue.wind}</li>
                    <li className="cityValuesBox_val">{cityvalue.humidity}</li>
                    <li className="cityValuesBox_val">{cityvalue.lon}</li>
                </ul>
            </div>
        </div>             
    )
}
export default DisplayResults    