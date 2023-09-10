import style from "./ActiveFilters.module.css";
import removeWhite from "../../assets/icons/removeWhite.svg";
import removeBlue from "../../assets/icons/removeBlue.svg";
type ActiveFiltersPropsType = {
    activeFilters : Array<string> | []
    resetFilters : () => void
    removeFilter : (filter : string) => void
}

const ActiveFilters = (props : ActiveFiltersPropsType) => {
    return (
        <div className={props.activeFilters.length ? style.activeFiltersContainer : style.activeFiltersContainerEmpty}>
            {
                props.activeFilters.length ? 
                props.activeFilters.map(f => {
                    return (
                        <div className={style.activeFilter} key={f}>
                              <span>{f}</span>
                              <img src={removeWhite} alt="removeWhite" className={style.removeFilter} onClick={()=>props.removeFilter(f) }/>
                        </div>
                    )
                })
                : 
                ""
            }    
            {
                props.activeFilters.length ? 
                <div className={style.resetFilter}>
                   <span>Сбросить Все</span>
                   <img src={removeBlue} alt="removeBlue" className={style.removeFilter} onClick={()=>props.resetFilters()}/>
                </div>
                :
                ""
            }     
        </div>
    )
}

export default ActiveFilters;