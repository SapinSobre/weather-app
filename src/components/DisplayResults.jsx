import '../sass/DisplayResults.scss'

const DisplayResults = ({photo, setPhoto, cityvalue, setCityvalue}) => {
    return(
        <ul style={{backgroundImage: `url(${photo})`}} className="cityValuesBox">
            <li className="cityValuesBox_val">{cityvalue.location}</li>
            <li className="cityValuesBox_val">{cityvalue.temp}</li>
            <li className="cityValuesBox_val">{cityvalue.weather}</li>
            <li className="cityValuesBox_val">{cityvalue.feels}</li>
            <li className="cityValuesBox_val">{cityvalue.humidity}</li>
            <li className="cityValuesBox_val">{cityvalue.wind}</li>
        </ul>        
    )
}
export default DisplayResults    