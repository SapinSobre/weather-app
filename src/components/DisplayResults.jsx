import '../sass/DisplayResults.scss'

const DisplayResults = ({currentDate, forecastDates, cityForecastValue, photo, cityvalue}) => {


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
                    <h3 className="forecastWeather_title">{forecastDates[0].dayName}</h3>
                    <h4 className="forecastWeather_title_date">{`${forecastDates[0].year}, ${forecastDates[0].month} ${forecastDates[0].day}`}</h4>
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
                    <h3 className="forecastWeather_title">{forecastDates[1].dayName}</h3>
                    <h4 className="forecastWeather_title_date">{`${forecastDates[1].year}, ${forecastDates[1].month} ${forecastDates[1].day}`}</h4>
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
                    <h3 className="forecastWeather_title">{forecastDates[2].dayName}</h3>
                    <h4 className="forecastWeather_title_date">{`${forecastDates[2].year}, ${forecastDates[2].month} ${forecastDates[2].day}`}</h4>
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
                    <h3 className="forecastWeather_title">{forecastDates[3].dayName}</h3>
                    <h4 className="forecastWeather_title_date">{`${forecastDates[3].year}, ${forecastDates[3].month} ${forecastDates[3].day}`}</h4>
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
                    <h3 className="forecastWeather_title">{forecastDates[4].dayName}</h3>
                    <h4 className="forecastWeather_title_date">{`${forecastDates[4].year}, ${forecastDates[4].month} ${forecastDates[4].day}`}</h4>
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