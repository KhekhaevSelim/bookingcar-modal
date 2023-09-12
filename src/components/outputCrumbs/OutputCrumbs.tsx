import { OutputCrumsDataType } from "../../entities/OutputCrumsData";
import style from "./outputCrumbs.module.css";
import whiteArrow from "../../assets/icons/whiteArrow.svg";
import backCrumbArrow from "../../assets/icons/backCrumbsArrow.svg";


type OutputCrumbsPropsType = {
    crumbsData : Array<OutputCrumsDataType>
    activeCrumb : string
}


const OutputCrumbs = (props : OutputCrumbsPropsType) => {

    let crumbsPartByMobile = props.crumbsData.filter(c => c.id === props.activeCrumb);

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
        {
            crumbsPartByMobile.length ?
            crumbsPartByMobile.map(c => {
                return (
                <div className={style.crumbsItem_mob} key={c.id}>
                    
                    {
                    c.id !== "search" &&  <img src={backCrumbArrow}
                    className={style.backCrumbArrow}/>
                    }
                     
                    <div className={c.id === "search" ? style.crumbsData_mob : c.id === "options"  ? style.crumbsData_mob__center : c.id === "pay" ? style.crumbsData_mob__right : ""}>
                        <span className={style.title_mob}>{c.title}</span>
                        <span className={style.subTitle_mob}>{c.subTitle}</span>
                    </div>
                        
                    {
                    c.id === "search" || c.id === "options" ? <img src={whiteArrow}
                    className={style.doneCrumbArrow}/> : ""
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