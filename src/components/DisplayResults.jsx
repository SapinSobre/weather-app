import '../sass/DisplayResults.scss'

const DisplayResults = ({cityvalue, setCityvalue}) => {
    return(
        <div>
            <div>{cityvalue.location}</div>
            <div>{cityvalue.temp}</div>
            <div>{cityvalue.weather}</div>
            <div>{cityvalue.feels}</div>
            <div>{cityvalue.humidity}</div>
            <div>{cityvalue.wind}</div>
        </div>        
    )
  /*  return(
        <div> 
            <div className='location'>
                <h1> {cityvalue.name} </h1>
            </div>        
            <div className='temp'>
                {cityvalue.main ? <h2>{cityvalue.main.temp.toFixed()} °C</h2> : null}
            </div>
            <div className='description'>
                {cityvalue.weather ? <p className='bold'>{cityvalue.weather[0].main}</p> : null}
            </div>
            <div className='feels'>
                <p> Feels like </p>
                {cityvalue.main ? <p className='bold'>{cityvalue.main.feels_like.toFixed()} °C</p> : null}
            </div>
            <div className='humidity'>
                <p> Humidity </p>
                {cityvalue.main ? <p className='bold'>{cityvalue.main.humidity} %</p> : null}
            </div>
            <div className='wind'>
                <p> Wind </p>
                {cityvalue.wind ? <p className='bold'>{cityvalue.wind.speed.toFixed()} km/h</p> : null}  
            </div>
        </div>
    )*/
}
export default DisplayResults    