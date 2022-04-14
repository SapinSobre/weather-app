import '../sass/DisplayResults.scss'

const DisplayResults = ({photo, setPhoto, cityvalue, setCityvalue}) => {
    return(
        <div className="">
            <div>{cityvalue.location}</div>
            <div>{cityvalue.temp}</div>
            <div>{cityvalue.weather}</div>
            <div>{cityvalue.feels}</div>
            <div>{cityvalue.humidity}</div>
            <div>{cityvalue.wind}</div>
            <br/>
            <img src={photo} alt="city view"/>
        </div>        
    )
}
export default DisplayResults    