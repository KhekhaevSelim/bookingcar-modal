import { FilterType } from "../../../pages/carList/CarList";
import FilterCheckBox from "../../filterCheckBox/FilterCheckBox";
import Rating from "../../ratingIcon/RatingIcon";
import style from "./Filter.module.css";

type FilterPropsType = {
    filter : FilterType
    addActiveFilter : (filter : string) => void
    activeFilters : Array<string>
}

const Filter = (props: FilterPropsType) => {

    let isActiveFilter = props.activeFilters.includes(props.filter.id);


    return (
        <div className={isActiveFilter ? style.containerActive : style.container}>
            <div className={style.conatiner_leftPart}>
                <FilterCheckBox addActiveFilter={props.addActiveFilter} filterId={props.filter.id} activeFilters={props.activeFilters}/>
                <span className={isActiveFilter ? style.titleActive : style.title}>
                {props.filter.title}
                </span>
           
            </div>
        
             {
                props.filter.icon && <img src={isActiveFilter ? props.filter.iconAct : props.filter.icon} alt={props.filter.icon} loading="lazy" 
                className={style.activeIcon}/> 
                || props.filter.rating && <Rating rating={props.filter.rating}/>
            }
         
        </div>
    )
}

export default Filter;