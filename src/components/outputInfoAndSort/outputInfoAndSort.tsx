import style from "./outputInfoAndSort.module.css";
import toggleIcon from "../../assets/icons/Arrow.png";
import { useState } from "react";
import ActiveFilters from "../activeFilters/ActiveFilters";

type OutputInfoAndSortPropsType = {
    activeFilters : Array<string> | []
    resetFilters : () => void
    removeFilter : (filter : string) => void
    toggleOnMobFilters : () => void
}

const OutputInfoAndSort = (props : OutputInfoAndSortPropsType) => {


    //стейт для тоглинга сортировки по цене
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div className={style.container}>
          <div className={style.outputInfoAndSort}>
            <span className={style.resultCount}>
             Мы нашли <span className={style.count}>317</span> автомобилей
            </span>
            <div className={style.sortContainer}>
             <span className={style.sortBy} style={{marginRight: "8px"}}>
             Сортировать по:
             </span>
             <div className={style.sortSelect}>
                <span className={style.sortBy}><span className={style.count}>Цене</span> (низкая-высокая)</span>
                <img src={toggleIcon} alt="toggle" className={toggle ? style.toggleOn : style.toggleOff}/>
             </div>
            </div>
          </div>
          
          <div className={style.filtersBtn} onClick={props.toggleOnMobFilters}>
              ФИЛЬТР
          </div>
          <div className={style.activeFiltersMobContainer}>
          <ActiveFilters activeFilters={props.activeFilters} removeFilter={props.removeFilter} resetFilters={props.resetFilters} isMobile={true}/>
          <span className={style.result}> Мы нашли 317 автомобилей</span>
          </div>
          


        </div>
        
    )
}

export default OutputInfoAndSort ;