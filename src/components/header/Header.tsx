import style from "./Header.module.css";
import BCLogo from "../../assets/icons/BCLogo.png";
import order from "../../assets/icons/order.svg";
import login from "../../assets/icons/login.svg";
import phone from "../../assets/icons/phone.svg";
import langRU from "../../assets/icons/langRUS.svg"
import burger from "../../assets/icons/burger.svg";
import closeBurdger from "../../assets/icons/closeBurger.svg";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
    showMobileMenu : boolean
    callBack : () => void
}

const Header = (props : HeaderPropsType) => {
    

    return (
        <div className={style.container}>
           <div className={style.wrapper}>   
               <img src={BCLogo} alt="logo" loading="lazy" className={style.logo}/>
               <div className={style.nav}>
                   <NavLink to={"/bookingcar-modal"} className={style.myOrder}>
                       <img src={order} alt="order" loading="lazy"/>
                       <span>Мой Заказ</span>
                   </NavLink>
                   <NavLink to={"/bookingcar-modal"} className={style.login}>
                       <img src={login} alt="login" loading="lazy"/>
                       <span>Войти</span>
                   </NavLink>
                   <div className={style.phone}>
                       <img src={phone} alt="phone" loading="lazy"/>
                   </div>
                   <div className={style.chooseLang}>
                       <span>EUR</span>
                       <span>RU</span>
                       <img src={langRU} alt="lang" loading="lazy"/>
                   </div>
               </div>
               <span onClick={props.callBack}>
                  <img src={props.showMobileMenu ? closeBurdger : burger} alt="burger" className={props.showMobileMenu ? style.closeBurdger : style.burger} />
               </span>             
            </div>
        </div>
    )
}

export default Header;