import Form from './Form'
import DisplayResults from './DisplayResults'
import {useState} from 'react'
import '../sass/Main.scss'

const Main = () => {
    const [photo, setPhoto] = useState()
    const [cityvalue, setCityvalue] = useState([])
    return(
        <div className="section">
            <Form photo={photo} setPhoto={setPhoto} cityvalue={cityvalue} setCityvalue={setCityvalue}/>   
            <DisplayResults photo={photo} setPhoto={setPhoto} cityvalue={cityvalue} setCityvalue={setCityvalue}/>
        </div>
    )
}
export default Main