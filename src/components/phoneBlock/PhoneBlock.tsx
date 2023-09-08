import style from "./PhoneBlock.module.css";
import phone from "../../assets/icons/greenPhone.svg";
type PhoneBlockPropsType = {
    id : string
}

const PhoneBlock = (props : PhoneBlockPropsType) => {
    return (
        <div className={style.phoneContainer}>
            <div className={style.phoneContainer_title}>
                <span className={style.phoneContainer_title__text}>
                Бронируйте по телефону
                </span>
            </div>

            <div className={style.phoneContainer_icon}>
                <img src={phone} alt="phone" className={style.phoneContainer_icon__img} loading="lazy"/>
            </div>

            <div className={style.phoneContainer_footer}>
                <span className={style.phoneContainer_footer__number}>
                +7 (495) 156-25-45
                </span>
                <span className={style.phoneContainer_footer__id}>
                 ID номер: <span className={style._id}>{props.id}</span>
                </span>
            </div>
        </div>
    )
}

export default PhoneBlock;