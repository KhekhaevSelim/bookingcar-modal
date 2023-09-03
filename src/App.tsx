import style from "./App.module.css"
import Button from "./components/button/Button"
import CheckBox from "./components/checkBox/checkBox"
import CheckOn from "./components/customToggle/on/CheckOn"
import DateInput from "./components/dateInput/DateInput"
import SearchInput from "./components/searchInput/searchInput"
import TimeInput from "./components/timeInput/TimeInput"

function App() {


  return (
    <div className={style.container}>
       <div className={style.wrapper}>
          <div className={style.titleContainer}>
             <h1>
              Аренда автомобилей по всему миру
             </h1>
          </div>
          <div className={style.quickSearch}>
             <p>Использовать быстрый поиск локаций</p>
             <CheckOn/>
          </div>
          <div className={style.placesContainer}>
            <div className={style.searchCol1}>
             <p>Место получения</p>
             <SearchInput placeholder="Город, Место, Код аэропорта"/>
            </div>
            <div className={style.searchCol2}>
             <p>Место возврата</p>
             <SearchInput placeholder="Город, Место, Код аэропорта"/>
            </div>
         </div>
         <div className={style.dateContainer}>
            <div className={style.dateCol1}>
               <div className={style.DateStart}>
                  <p>Начало аренды</p>
                  <DateInput/>
               </div>
               <div className={style.timeStart}>
                  <TimeInput/>
               </div>
            </div>
            <div className={style.dateCol2}>
               <div className={style.DateFinish}>
                  <p>Завершение аренды</p>
                  <DateInput/>
               </div>
               <div className={style.timeFinish}>
                  <TimeInput/>
               </div>
            </div>
         </div> 
         <div className={style.ageAndCuponContainer}>
            <CheckBox title="Возраст 25 - 75 лет?" onlyNumbers={true}/>
            <CheckBox title="У меня есть скидочный купон" onlyNumbers={false}/>
         </div>
         <div className={style.buttonContainer}>
          <Button/>
         </div>
       </div>
    </div>
  )
}

export default App
