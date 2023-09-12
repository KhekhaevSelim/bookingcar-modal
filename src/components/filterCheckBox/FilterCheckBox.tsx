import style from "./FilterCheckBox.module.css";
import filterChecked from "../../assets/icons/filterChecked.svg";
import { useEffect, useState } from "react";

type FilterCheckBoxPropsType = {
    addActiveFilter : (filter : string) => void
    filterId : string
    activeFilters : Array<string>
}


const FilterCheckBox = (props : FilterCheckBoxPropsType) => {
    
    const [filterCheckBoxValue, setFilterCheckBoxValue] = useState<boolean>(props.activeFilters.includes(props.filterId));
    const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterCheckBoxValue(e.target.checked)
       }
    useEffect(()=> {
        let isClickRemoveFilter = props.activeFilters.includes(props.filterId);
        if(!isClickRemoveFilter && filterCheckBoxValue){
            setFilterCheckBoxValue(!filterCheckBoxValue)
        }
        
    },[props.activeFilters]) 
    return (
        <div className={style.container}>
              <input type="checkbox" className={style.hiddenCheckbox} checked={filterCheckBoxValue} onChange={(e)=>handleChangeCheckBox(e)} onClick={()=>props.addActiveFilter(props.filterId)}/>
              <span className={filterCheckBoxValue ? style.customCheckboxActive : style.customCheckbox}>
                {filterCheckBoxValue && <img src={filterChecked} alt="checked" loading="lazy" /> }
              </span>
        </div>
    )
}

export default FilterCheckBox;