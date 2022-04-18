import Form from './Form'
import DisplayResults from './DisplayResults'
import {useState, useEffect} from 'react'
import '../sass/Main.scss'

const Main = () => {

    const [cityvalue, setCityvalue] = useState([])
    const [cityForecastValue, setCityForecastValue] = useState([])
    const [photo, setPhoto] = useState()

    const [currentDate, setCurrentDate] = useState()
    const [forecastDates, setForecastDates] = useState([])
    useEffect(() => {
        let dayName = ""
        let day = ""
        let month = ""
        let year = ""
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
                setForecastDates(copyTab)
            }
        }
        getCurrentDate(new Date())
        getForecastDates()
    },[])   
   
   /* const LSKEY = "weatherApp"    

   const weatherCitySaved = localStorage.getItem({LSKEY} + '.cityWeather')
    const [cityvalue, setCityvalue] = useState(weatherCitySaved ? JSON.parse(weatherCitySaved):[])
    useEffect(() => {
            window.localStorage.setItem({LSKEY} + '.cityWeather', JSON.stringify(cityvalue))
    },[cityvalue]) 

    const forecastCitySaved = localStorage.getItem({LSKEY} + '.forecastWeather')
    const [cityForecastValue, setCityForecastValue] = useState(forecastCitySaved ? JSON.parse(forecastCitySaved):[])
    useEffect(() => {
            window.localStorage.setItem({LSKEY} + '.forecastWeather', JSON.stringify(cityForecastValue))
    },[cityForecastValue]) */

 /* const photoSaved = localStorage.getItem({LSKEY} + '.cityPhoto')
    const [photo, setPhoto] = useState(photoSaved ? JSON.parse(photoSaved): [])
    useEffect(() => {
            window.localStorage.setItem({LSKEY} + '.cityPhoto', JSON.stringify(photo))
    },[photo])   */
   
   

   

    return(
        <div className="main">
            <Form cityForecastValue={cityForecastValue} setCityForecastValue={setCityForecastValue} photo={photo} setPhoto={setPhoto} cityvalue={cityvalue} setCityvalue={setCityvalue}/>   
            <DisplayResults currentDate={currentDate} forecastDates={forecastDates} cityForecastValue={cityForecastValue} setCityForecastValue={setCityForecastValue} photo={photo} cityvalue={cityvalue}/>
        </div>
    )
}
export default Main