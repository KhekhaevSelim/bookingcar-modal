import { OutputCrumsDataType } from "../../pages/carList/CarList";
import style from "./outputCrumbs.module.css";
import whiteArrow from "../../assets/icons/whiteArrow.svg";

type OutputCrumbsPropsType = {
    crumbsData : Array<OutputCrumsDataType>
    activeCrumb : string
}

const OutputCrumbs = (props : OutputCrumbsPropsType) => {
    return (

    <div className={style.outputCrumbs}>
        {
            props.crumbsData.length ? 

            props.crumbsData.map(d => {
                return (
            <div className={props.activeCrumb === d.id ? style.crumbsItemActive : style.crumbsItem} key={d.id}>

                <span className={style.crumbsNum}>
                 {d.num}
                </span>

                <div className={style.crumbsData}>
                    <span className={style.title}>{d.title}</span>
                    <span className={style.subTitle}>{d.subTitle}</span>
                </div>
                        
                {
                d.id === "search" || d.id === "options" ? <img src={whiteArrow}
                className={d.id === "search" ? style.firstArrow : style.secondArrow}/> : ""
                }

            </div>
                )
            })
            :
            ""
        }
        
    </div>
    )
}

export default OutputCrumbs; 