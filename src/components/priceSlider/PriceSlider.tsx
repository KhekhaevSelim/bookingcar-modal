import style from "./PriceSlider.module.css";
import strokes from "../../assets/icons/strokes.svg";

type PriceSliderPropsType = {
    sliderValue : string
    handleChangeSliderValue : (event : React.ChangeEvent<HTMLInputElement>) => void
    min : number
    max : number

}

const PriceSlider = (props : PriceSliderPropsType) => {
    return (
        <div className={style.priceSlider}>

            <span className={style.priceSlider_title}>
                Ценновая отметка
             </span>

             <div className={style.sliderContainer}>
                <span>USD {props.sliderValue}</span>
                <input className={style.slider} type="range" value={props.sliderValue} onChange={(event) => props.handleChangeSliderValue(event)} min={props.min} max={props.max}/>
                <img src={strokes} alt="strokes" loading="lazy" />
             </div>

             <div className={style.priceRange}>
                <span>
               USD {props.min}
                </span>
                <span>
               USD {props.max}
                </span>
            </div>
            
        </div> 
    )
}

export default PriceSlider;