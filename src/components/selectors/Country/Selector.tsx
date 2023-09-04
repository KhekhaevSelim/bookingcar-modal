import { useEffect, useRef, useState } from "react";
import style from "./Selector.module.css"
import arrow from "../../../assets/icons/Arrow.png"

type SelectorPropsType = {
  arrayData : Array<string>
  placeholder : string
}
const Selector = (props: SelectorPropsType) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const options = props.arrayData;
  

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const selectCountry = (time : string) => {
    setSelectedOption(time);
    setDropdownOpen(false);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const optionSelectorRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ( optionSelectorRef.current && !optionSelectorRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
    return (
        <div className={style.container} ref={optionSelectorRef}>
           <input type="text" className={style.select}  value={selectedOption} placeholder={props.placeholder} readOnly
           onClick={toggleDropdown} />
             <label className={style.icon} onClick={toggleDropdown} onBlur={closeDropdown}>
                <img src={arrow} alt="arrow"/> 
             </label>
            {isDropdownOpen && (
            <ul className={style.dropTown}>
            {options.map((option, index) => (
              <li key={index} onClick={() => selectCountry(option)} className={`${style.place} ${option === selectedOption ? style.selectedPlace : ""}`}>
                {option}
              </li>
            ))}
            </ul>
            )}
        </div>
    )
}

export default Selector;