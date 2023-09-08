import style from "./Rating.module.css";
import whiteStar from "../../assets/icons/whiteStar.svg";
import grayStar from "../../assets/icons/grayStar.svg";
type RatingPropsType = {
    rating : number
}

const Rating = (props : RatingPropsType ) => {

    const normalizeInt = (int : number) => {
        if(int % 2 === 0){
            return `${int}.0`
        }
        return int
    }
    
    const rating = normalizeInt(props.rating)


    return (
        <div className={style.conatiner}>
           {
            props.rating >= 8.2 
            
            ? 
            
            <div className={style.wrapperOk}>
              <img src={whiteStar} alt="whiteStar" loading="lazy"/>
              <span>{rating}</span>
            </div>

            :

            props.rating < 8.2 && props.rating > 7.1 
            
            ? 

            <div className={style.wrapperNorm}>
                <img src={whiteStar} alt="whiteStar" loading="lazy"/>
                <span>{rating}</span>
            </div>

            :

            <div className={style.wrapperBad} >
                <img src={grayStar} alt="grayStar" loading="lazy"/>
                <span style={{color : "#ACACAC"}}>{rating}</span>
            </div>
           }
        </div>
    )
}

export default Rating;