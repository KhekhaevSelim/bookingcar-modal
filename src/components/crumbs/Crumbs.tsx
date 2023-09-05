import style from "./Crumbs.module.css";
import crumbsArrow from "../../assets/icons/crumbsArrow.svg";
import changeData from "../../assets/icons/changeData.png"
type CrumbsPropsType = {
    startCity : string
    finishCity : string
    startLocation : string
    finishLocation : string 
    startDate : string
    finishDate : string
    startTime : string
    finishTime : string
}

const Crumbs = (props : CrumbsPropsType) => {
    return (
        <div className={style.container}>

            <div className={style.wrapper}>

                <div className={style.data}>

                    <div className={style.start}>

                     <div className={style.startPointLocation}>
                         <span className={style.startCity}>{props.startCity} </span>
                         <span className={style.startLocation}>{props.startLocation}</span>
                     </div>
                     <div className={style.startPointDate}>
                          <span className={style.startDate}>{props.startDate} </span>
                          <span className={style.startTime}>{props.startTime}</span>
                     </div> 

                     </div>

                    <img src={crumbsArrow} alt="crumbsArrow" className={style.crumbsArrow}/>

                    <div className={style.finish}>

                        <div className={style.finishPointLocation}>
                            <span className={style.finishCity}>{props.finishCity} </span>
                            <span className={style.finishLocation}>{props.finishLocation}</span>
                        </div>   

                        <div className={style.finishPointDate}>
                             <span className={style.finishtDate}>{props.finishDate} </span>
                             <span className={style.finishTime}>{props.finishTime}</span>
                        </div> 

                    </div>

                </div>   

                <button className={style.btn}>
                    <img src={changeData} alt="changeData" />
                    <span>Изменить</span>
                </button>

            </div>
           
             <div className={style.wrapper_mob}>

                <div className={style.data_mob}>

                    <span className={style.startPointLocation_mob}>{props.startCity} {props.startLocation}</span>
                    <span className={style.finishPointLocation_mob}>{props.finishCity} {props.finishLocation}</span>
                    <span className={style.fullDate_mob}>{props.finishDate} {props.finishTime}</span>

                </div>   

                <button className={style.btn_mob}>
                    <img src={changeData} alt="changeData" />
                </button>

            </div>
            
        </div>
    )
}

export default Crumbs;