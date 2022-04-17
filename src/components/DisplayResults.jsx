import '../sass/DisplayResults.scss'
import React, {useEffect, useState} from 'react'

const DisplayResults = ({cityForecastValue, photo, cityvalue}) => {
   
    const [currentDate, setCurrentDate] = useState()
    const [forecastDaysValues, setForecastDaysValues] = useState([])
    let dayName = ""
    let day = ""
    let month = ""
    let year = ""
   
    useEffect(() => {
        const getDayName = (date) => {
            switch(date.getDay().toString()){
                case "0" : dayName = "Sunday";
                    break;
                case "1" : dayName = "Monday";
                    break;
                case "2" : dayName = "Tuesday";
                    break;
                case "3" : dayName = "Wednesday";
                    break;
                case "4" : dayName = "Thursday";
                    break;
                case "5" : dayName = "Friday";
                    break;
                case "6" : dayName = "Saturday";
                    break;
                default : console.log("This day is not a day??!!")
                    break;
            }
        }

        const getMonth = (date) => {
            switch(date.getMonth().toString()){
                case "0" : month = "january";
                    break;
                case "1" : month = "february";
                    break;
                case "2" : month = "march";
                    break;
                case "3" : month = "april";
                    break;
                case "4" : month = "may";
                    break;
                case "5" : month = "juny";
                    break;
                case "6" : month = "july";
                    break;
                case "7" : month = "augustus";
                    break;
                case "8" : month = "september";
                    break;
                case "9" : month = "october";
                    break;
                case "10" : month = "november";
                    break;
                case "11" : month = "december";
                    break;
                default : console.log("This month is not a month??!!")
                    break;
            }  
        }
      
        const getCurrentDate = (date) => {
            dayName = getDayName(date)
            day = date.getDate().toString()
            month = getMonth(date)
            year = date.getFullYear().toString()
            let dateTab = []
            dateTab.push(dayName)
            dateTab.push(day)
            dateTab.push(month)
            dateTab.push(year) 
            setCurrentDate(dateTab)    
        }

        const getForecastDates = () => { 
            let copyTab = []
            let startDate = new Date(); 
            let day = 60 * 60 * 24 * 1000;
            let forecastDaysTab = [
                new Date(startDate.getTime() + (day)),
                new Date(startDate.getTime() + (2*day)),
                new Date(startDate.getTime() + (3*day)),
                new Date(startDate.getTime() + (4*day)),
                new Date(startDate.getTime() + (5*day))
            ]
            for(let i = 0; i < 5; i++){
                getDayName(forecastDaysTab[i])
                getMonth(forecastDaysTab[i])
                let dayObject = {
                    dayName: dayName,
                    day: forecastDaysTab[i].getDay(),
                    month: month,
                    year: forecastDaysTab[i].getFullYear()
                } 
                copyTab.push(dayObject)
                setForecastDaysValues(copyTab)
            }
        }
        getCurrentDate(new Date())
        getForecastDates()
    }, [cityvalue])   

    return(
        <div className="weather">
            <div className="cityPhotoBox">
                <img className="cityPhoto" src={photo} alt="city view"/>
            </div>            
            <ul className="currentWeather_list">
                <li className="currentWeather_location">{cityvalue.location}</li>
                <h3 className="currentWeather_title">Today</h3>
                <h4 className="currentWeather_title_date">{currentDate}</h4>
                <li className="currentWeather_item">
                    <img className="currentWeather_icon" src={`http://openweathermap.org/img/wn/${cityvalue.icon}@2x.png`} alt="city view"/>
                    <p className="currentWeather_description">{cityvalue.weather}</p>
                </li>
                <li className="currentWeather_item">{`Day temp : ${cityvalue.temp} °`}</li>
                <li className="currentWeather_item">{`Feels like : ${cityvalue.feels} °`}</li>
                <li className="currentWeather_item">{`Humidity : ${cityvalue.humidity}`}</li>
                <li className="currentWeather_item">{`Wind speed : ${cityvalue.wind}`}</li>   
            </ul>
            {cityForecastValue.length > 0 ? (<div className='forecastList'>   
                <ul className="forecastWeather_list">
                    <h3 className="forecastWeather_title">{forecastDaysValues[0].dayName}</h3>
                    <h4 className="forecastWeather_title_date">{`${forecastDaysValues[0].year}, ${forecastDaysValues[0].month} ${forecastDaysValues[0].day}`}</h4>
                    <li className="forecastWeather_item">
                        <img className="forecastWeather_icon" src={`http://openweathermap.org/img/wn/${cityForecastValue[0].icon}@2x.png`} alt="city view"/>
                        <p className="forecastWeather_description">{cityForecastValue[0].description}</p>
                    </li>
                    <li className="forecastWeather_item">{`Day : ${cityForecastValue[0].dayTemp} °`}</li>
                    <li className="forecastWeather_item">{`Night : ${cityForecastValue[0].nightTemp} °`}</li>
                    <li className="forecastWeather_item">{`Humidity : ${cityForecastValue[0].humidity}`}</li>
                    <li className="forecastWeather_item">{`Wind speed : ${cityForecastValue[0].windSpeed}`}</li>
                </ul> 
                <ul className="forecastWeather_list">
                    <h3 className="forecastWeather_title">{forecastDaysValues[1].dayName}</h3>
                    <h4 className="forecastWeather_title_date">{`${forecastDaysValues[1].year}, ${forecastDaysValues[1].month} ${forecastDaysValues[1].day}`}</h4>
                    <li className="forecastWeather_item">
                        <img className="forecastWeather_icon" src={`http://openweathermap.org/img/wn/${cityForecastValue[1].icon}@2x.png`} alt="city view"/>
                        <p className="forecastWeather_description">{cityForecastValue[1].description}</p>
                    </li>
                    <li className="forecastWeather_item">{`Day : ${cityForecastValue[1].dayTemp} °`}</li>
                    <li className="forecastWeather_item">{`Night : ${cityForecastValue[1].nightTemp} °`}</li>
                    <li className="forecastWeather_item">{`Humidity : ${cityForecastValue[1].humidity}`}</li>
                    <li className="forecastWeather_item">{`Wind speed : ${cityForecastValue[1].windSpeed}`}</li>
                </ul>  
                <ul className="forecastWeather_list">
                    <h3 className="forecastWeather_title">{forecastDaysValues[2].dayName}</h3>
                    <h4 className="forecastWeather_title_date">{`${forecastDaysValues[2].year}, ${forecastDaysValues[2].month} ${forecastDaysValues[2].day}`}</h4>
                    <li className="forecastWeather_item">
                        <img className="forecastWeather_icon" src={`http://openweathermap.org/img/wn/${cityForecastValue[2].icon}@2x.png`} alt="city view"/>
                        <p className="forecastWeather_description">{cityForecastValue[2].description}</p>
                    </li>
                    <li className="forecastWeather_item">{`Day : ${cityForecastValue[2].dayTemp} °`}</li>
                    <li className="forecastWeather_item">{`Night : ${cityForecastValue[2].nightTemp} °`}</li>
                    <li className="forecastWeather_item">{`Humidity : ${cityForecastValue[2].humidity}`}</li>
                    <li className="forecastWeather_item">{`Wind speed : ${cityForecastValue[2].windSpeed}`}</li>
                </ul>   
                <ul className="forecastWeather_list">
                    <h3 className="forecastWeather_title">{forecastDaysValues[3].dayName}</h3>
                    <h4 className="forecastWeather_title_date">{`${forecastDaysValues[3].year}, ${forecastDaysValues[3].month} ${forecastDaysValues[3].day}`}</h4>
                    <li className="forecastWeather_item">
                        <img className="forecastWeather_icon" src={`http://openweathermap.org/img/wn/${cityForecastValue[3].icon}@2x.png`} alt="city view"/>
                        <p className="forecastWeather_description">{cityForecastValue[3].description}</p>
                    </li>
                    <li className="forecastWeather_item">{`Day : ${cityForecastValue[3].dayTemp} °`}</li>
                    <li className="forecastWeather_item">{`Night : ${cityForecastValue[3].nightTemp} °`}</li>
                    <li className="forecastWeather_item">{`Humidity : ${cityForecastValue[3].humidity}`}</li>
                    <li className="forecastWeather_item">{`Wind speed : ${cityForecastValue[3].windSpeed}`}</li>
                </ul>   
                <ul className="forecastWeather_list">
                    <h3 className="forecastWeather_title">{forecastDaysValues[4].dayName}</h3>
                    <h4 className="forecastWeather_title_date">{`${forecastDaysValues[4].year}, ${forecastDaysValues[4].month} ${forecastDaysValues[4].day}`}</h4>
                    <li className="forecastWeather_item">
                        <img className="forecastWeather_icon" src={`http://openweathermap.org/img/wn/${cityForecastValue[4].icon}@2x.png`} alt="city view"/>
                        <p className="forecastWeather_description">{cityForecastValue[4].description}</p>
                    </li>
                    <li className="forecastWeather_item">{`Day : ${cityForecastValue[4].dayTemp} °`}</li>
                    <li className="forecastWeather_item">{`Night : ${cityForecastValue[4].nightTemp} °`}</li>
                    <li className="forecastWeather_item">{`Humidity : ${cityForecastValue[4].humidity}`}</li>
                    <li className="forecastWeather_item">{`Wind speed : ${cityForecastValue[4].windSpeed}`}</li>
                </ul>  
            </div> ):null }        
        </div>             
    )
}
export default DisplayResults    