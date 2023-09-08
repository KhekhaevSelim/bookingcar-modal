import { FilterItemType } from "../../pages/carList/CarList";
import style from "./FilterItem.module.css";
import Filter from "./filter/Filter";

type FilterItemPropsType = {
    filterItem : FilterItemType
}

const FilterItem = (props : FilterItemPropsType) => {
    return (
        <div className={style.filterItem}>
            <span className={style.title}>
            {props.filterItem.name}
            </span>
            {
                props.filterItem.filters.length ?
                props.filterItem.filters.map( f => {
                    return (
                        <Filter filter={f} key={f.id}/>
                    )
                })
                :
                ""
            }
        </div>
    )
}

export default FilterItem;