import Form from './Form'
import DisplayResults from './DisplayResults'
import {useState} from 'react'
import '../sass/Main.scss'

const Main = () => {
    const [cityvalue, setCityvalue] = useState([])
    return(
        <div className="section">
            <Form cityvalue={cityvalue} setCityvalue={setCityvalue}/>   
            <DisplayResults cityvalue={cityvalue} setCityvalue={setCityvalue}/>
        </div>
    )
}
export default Main