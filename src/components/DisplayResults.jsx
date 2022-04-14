import '../sass/DisplayResults.scss'

const DisplayResults = ({photo, setPhoto, cityvalue, setCityvalue}) => {
    return(
        <div style={{backgroundImage: `url(${photo})`}} className="cityValuesBox">
            <div className="cityValuesBox_input">{cityvalue.location}</div>
            <div className="cityValuesBox_input">{cityvalue.temp}</div>
            <div className="cityValuesBox_input">{cityvalue.weather}</div>
            <div className="cityValuesBox_input">{cityvalue.feels}</div>
            <div className="cityValuesBox_input">{cityvalue.humidity}</div>
            <div className="cityValuesBox_input">{cityvalue.wind}</div>
        </div>        
    )
}
export default DisplayResults    