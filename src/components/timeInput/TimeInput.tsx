import { useEffect, useRef, useState } from "react";
import style from "./TimeInput.module.css";
import clock from "../../assets/icons/Clock.png"

const TimeInput = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>('11:00');
  const timeOptions = ['00:00','00:30','01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','07:00','07:30','08:00',
  '08:30','09:00','09:30','10:00','10:30', '11:00','11:30', '12:00','12:30', '13:00','13:30', '14:00','14:30', '15:00','15:30','16:00','16:30','17:00','17:30','18:00',
  '18:30','19:00','19:30','20:00', '20:30','21:00','21:30','22:00','22:30','23:00','23:30'];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const selectTime = (time : string) => {
    setSelectedTime(time);
    setDropdownOpen(false);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const timeInputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ( timeInputRef.current && !timeInputRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

    return (
       <div className={style.timeInpitContainer} ref={timeInputRef}>
          <input type="text" className={style.timeInput}  value={selectedTime}  readOnly
          onClick={toggleDropdown} />
          <label className={style.dateIcon} onClick={toggleDropdown} onBlur={closeDropdown}>
            <img src={clock} alt="time"/> 
          </label>
          {isDropdownOpen && (
         <ul className={style.dropTown}>
          {timeOptions.map((time, index) => (
            <li key={index} onClick={() => selectTime(time)} className={`${style.time} ${time === selectedTime ? style.selectedTime : ""}`}>
              {time}
            </li>
          ))}
         </ul>
         )}
       </div> 
    )
}

export default TimeInput;