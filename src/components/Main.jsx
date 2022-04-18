import Form from './Form'
import DisplayResults from './DisplayResults'
import {useState, useEffect} from 'react'
import '../sass/Main.scss'

const Main = () => {
    const [cityForecastValue, setCityForecastValue] = useState([])
    const [photo, setPhoto] = useState()

    const LSKEY = "weatherApp"
    const savedCity = localStorage.getItem({LSKEY} + '.city')
    const [cityvalue, setCityvalue] = useState(savedCity? JSON.parse(savedCity):[])
    useEffect(() => {
          window.localStorage.setItem({LSKEY} + '.city', JSON.stringify(cityvalue))
      },[cityvalue]) 
      

    return(
        <div className="main">
            <Form cityForecastValue={cityForecastValue} setCityForecastValue={setCityForecastValue} photo={photo} setPhoto={setPhoto} cityvalue={cityvalue} setCityvalue={setCityvalue}/>   
            <DisplayResults cityForecastValue={cityForecastValue} photo={photo} cityvalue={cityvalue}/>
        </div>
    )
}
export default Main