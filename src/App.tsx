import { useState } from "react"
import style from "./App.module.css"
import Button from "./components/button/Button"
import CheckBox from "./components/checkBox/checkBox"
import DateInput from "./components/dateInput/DateInput"
import SearchInput from "./components/searchInput/searchInput"
import TimeInput from "./components/timeInput/TimeInput"
import CheckOnOff from "./components/customToggle/on/CheckOnOff"
import CountrySelector from "./components/selectors/Country/Selector"

function App() {
  const [extraInput, setExtraInput] = useState<boolean>(false)
  const [isSimpleSearch,setIsSimpleSearch] = useState<boolean>(false)
  const countries = ['Russia', 'USA', 'Ukraine', 'Belorus', 'Moldova', 'Latvia', 'Germany', 'London'];
  const cities = ['Moscow', 'Sankt-Peterbirg', 'Rostow', 'Grozny', 'Voronej', 'Sochi', 'Barnaul', 'Ufa'];
  const locations = ["location 1","location 2","location 3","location 4","location 5","location 6","location 7","location 8"]
  const toggleSimpleSearch = () => {
   setIsSimpleSearch(!isSimpleSearch)
  }
  const showExtraInput = (show : boolean) => {
   setExtraInput(!show)
  }

  return (
    <div className={style.container}>
       <div className={style.wrapper}>
          <div className={style.titleContainer}>
             <h1>
              Аренда автомобилей по всему миру
             </h1>
          </div>
          <div className={style.quickSearch}>
             <p>Обычная форма поиска</p>
             <CheckOnOff toggle={isSimpleSearch} callBack={toggleSimpleSearch}/>         
          </div>
          {isSimpleSearch ? 
            <div className={style.placesContainer}>
              <div className={style.searchCol1}>
                 <p>Место получения</p>
                 <SearchInput placeholder="Город, Место, Код аэропорта"/>
              </div>
              <div className={style.showSearchCol2}>
                 <CheckBox title="Возврат в другом месте?" onlyNumbers={false} isColumnInput={true} 
                           showExtraInput={showExtraInput} checkBoxValue={extraInput} isAge={false}/>
              </div>
              <div className={style.searchCol2}>
                 <p>Место возврата</p>
                 <SearchInput placeholder="Город, Место, Код аэропорта"/>
              </div>
              {
              extraInput ? 
              <div className={style.searchCol2_mob}>
                 <p>Место возврата</p>
                 <SearchInput placeholder="Город, Место, Код аэропорта"/>
              </div>
                       :
              ""
              }
             
           </div>
           :
           <div className={style.placesContainerSelectors}>
               <div className={style.startSelectors}>
                  <p>Место получения</p>
                  <div className={style.startSelectsRow}>
                     <CountrySelector arrayData={countries} placeholder="Страна"/>
                     <CountrySelector arrayData={cities} placeholder="Город"/>
                     <CountrySelector arrayData={locations} placeholder="Локация"/>
                  </div>
                  
               </div>
               <div className={style.showSearchCol2}>
                 <CheckBox title="Возврат в другом месте?" onlyNumbers={false} isColumnInput={true} 
                           showExtraInput={showExtraInput} checkBoxValue={extraInput} isAge={false}/>
              </div>
               <div className={style.finishSelectors}>
                  <p>Место возврата</p>
                  <div className={style.finishSelectsRow}>
                     <CountrySelector arrayData={countries} placeholder="Страна"/>
                     <CountrySelector arrayData={cities} placeholder="Город"/>
                     <CountrySelector arrayData={locations} placeholder="Локация"/>
                  </div>
               </div>
               {
              extraInput ? 
              <div className={style.finishSelectors_mob}>
                  <p>Место возврата</p>
                  <div className={style.finishSelectsRow}>
                     <CountrySelector arrayData={countries} placeholder="Страна"/>
                     <CountrySelector arrayData={cities} placeholder="Город"/>
                     <CountrySelector arrayData={locations} placeholder="Локация"/>
                  </div>
               </div>
                       :
              ""
              }
           </div>
         }
       
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
            <CheckBox title="Возраст 25 - 75 лет?" onlyNumbers={true} isColumnInput={false} checkBoxValue={true} isAge={true}/>
            <CheckBox title="Купон/промо" onlyNumbers={false} isColumnInput={false} checkBoxValue={false} isAge={false}/>
         </div>
         <div className={style.buttonContainer}>
          <Button/>
         </div>
       </div>
    </div>
  )
}

export default App
