import { FilterItemType } from "../../entities/filtersData";
import style from "./FilterItem.module.css";
import Filter from "./filter/Filter";

type FilterItemPropsType = {
    filterItem : FilterItemType
    addActiveFilter : (filter : string) => void
    activeFilters : Array<string>
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
                        <Filter filter={f} key={f.id} addActiveFilter={props.addActiveFilter} activeFilters={props.activeFilters}/>
                    )
                })
                :
                ""
            }
        </div>
    )
}

export default FilterItem;