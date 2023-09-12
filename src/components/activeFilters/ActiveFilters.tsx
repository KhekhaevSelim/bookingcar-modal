import style from "./ActiveFilters.module.css";
import removeWhite from "../../assets/icons/removeWhite.svg";
import removeBlue from "../../assets/icons/removeBlue.svg";
type ActiveFiltersPropsType = {
    activeFilters : Array<string> | []
    resetFilters : () => void
    removeFilter : (filter : string) => void
    isMobile : boolean
}

const ActiveFilters = (props : ActiveFiltersPropsType) => {
    console.log(props.isMobile)
    return (
        <div className={props.isMobile ? style.activeFiltersContainer : style.activeFiltersContainerMobile}>
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