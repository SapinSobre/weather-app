import Form from './Form'
import DisplayResults from './DisplayResults'
import {useState} from 'react'
import '../sass/Main.scss'

const Main = () => {
    const [cityForecastValue, setCityForecastValue] = useState([])
    const [photo, setPhoto] = useState()
    const [cityvalue, setCityvalue] = useState([])
    return(
        <div className="section">
            <Form cityForecastValue={cityForecastValue} setCityForecastValue={setCityForecastValue} photo={photo} setPhoto={setPhoto} cityvalue={cityvalue} setCityvalue={setCityvalue}/>   
            <DisplayResults cityForecastValue={cityForecastValue} setCityForecastValue={setCityForecastValue} photo={photo} setPhoto={setPhoto} cityvalue={cityvalue} setCityvalue={setCityvalue}/>
        </div>
    )
}
export default Main