import style from "./CheckOn.module.css"
import iconBodyOn from "../../../assets/icons/checkOnBody.png"
import checkCircle from "../../../assets/icons/checkCircle.png"
import whiteCheck from "../../../assets/icons/whiteCheck.png"
import iconBodyOff from "../../../assets/icons/checkOffBody.png"

type CheckOnOffPropsType = {
    toggle : boolean
    callBack : () => void
}
const CheckOnOff = (props: CheckOnOffPropsType) => {
    return (
        props.toggle ? 

        <div className={style.containerOn} onClick={props.callBack}>
            <img src={checkCircle} alt="checkCircle" loading="lazy"/>
            <img src={iconBodyOn} alt="iconBodyOn" loading="lazy"/>
            <img src={whiteCheck} alt="whiteCheck" />
        </div>

        :

        <div className={style.containerOff} onClick={props.callBack}>
            <img src={checkCircle} alt="checkCircle" loading="lazy"/>
            <img src={iconBodyOff} alt="iconBodyOff" loading="lazy"/>
        </div>
    )
}

export default CheckOnOff;