import style from "./DateInput.module.css"
import calendar from "../../assets/icons/Calendar.png"
import { useRef } from "react";


const DateInput = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        if(inputRef.current){ inputRef.current.focus(); inputRef.current.click()}
    }

    return (
        <div className={style.dateInputContainer}>
          <input type="date" className={style.dateInput} ref={inputRef}/>
          <label className={style.dateIcon} >
            <img src={calendar} alt="calendar" id="icon"  onClick={handleClick}/> 
          </label>
        </div>
    )
}



export default DateInput;