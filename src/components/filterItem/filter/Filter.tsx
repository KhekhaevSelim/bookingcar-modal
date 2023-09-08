import { FilterType } from "../../../pages/carList/CarList";
import FilterCheckBox from "../../filterCheckBox/FilterCheckBox";
import Rating from "../../ratingIcon/RatingIcon";
import style from "./Filter.module.css";

type FilterPropsType = {
    filter : FilterType
}

const Filter = (props: FilterPropsType) => {
    return (
        <div className={style.container}>
            <div className={style.conatiner_leftPart}>
                <FilterCheckBox/>
                <span className={style.title}>
                {props.filter.title}
                </span>
            </div>
        
             {
                props.filter.icon && <img src={props.filter.icon} alt={props.filter.icon} loading="lazy"/> || props.filter.rating && <Rating rating={props.filter.rating}/>
            }
         
        </div>
    )
}

export default Filter;