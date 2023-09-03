import style from "./CheckOn.module.css"
import iconBody from "../../../assets/icons/checkOnBody.png"
import checkCircle from "../../../assets/icons/checkCircle.png"
import whiteCheck from "../../../assets/icons/whiteCheck.png"
const CheckOn = () => {
    return (
        <div className={style.container}>
            <img src={checkCircle} alt="checkCircle" loading="lazy"/>
            <img src={iconBody} alt="iconBody" loading="lazy"/>
            <img src={whiteCheck} alt="whiteCheck" />
        </div>
    )
}

export default CheckOn;