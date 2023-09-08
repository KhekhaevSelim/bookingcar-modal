import { useState } from "react";
import style from "./FilterCheckBox.module.css";
import filterChecked from "../../assets/icons/filterChecked.svg";
const FilterCheckBox = () => {
    const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false);
    const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckBoxValue(e.target.checked)
       }
    return (
        <div className={style.container}>
              <input type="checkbox" className={style.hiddenCheckbox} checked={checkBoxValue} onChange={(e)=>handleChangeCheckBox(e)}/>
              <span className={style.customCheckbox}>
                { checkBoxValue && <img src={filterChecked} alt="checked" loading="lazy"/> }
              </span>
        </div>
    )
}

export default FilterCheckBox;