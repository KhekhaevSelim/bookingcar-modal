import style from "./Footer.module.css";
import globalSign from "../../assets/icons/globalSign.svg";
import visa from "../../assets/icons/visa.svg";


const Footer = () => {
    return (
        <div className={style.container}>

            <div className={style.partners}>
                <img src={globalSign} alt="globalSign" />
                <img src={visa} alt="visa" />
            </div>
            
            <div className={style.footer}>
                <span>
                © 2008 - 2021 BookingCar
                </span>
            </div>

        </div>
    )
}

export default Footer;