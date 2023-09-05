import { NavLink } from "react-router-dom";
import style from "./MobileMenu.module.css";
import car from "../../assets/icons/car.svg"
import order from "../../assets/icons/order.svg";
import login from "../../assets/icons/login.svg"
import phone from "../../assets/icons/phone.svg";
import eur from "../../assets/icons/RUS.svg";
import rus from "../../assets/icons/EUR.svg";
import lang from "../../assets/icons/langRUS.svg";
const MobileMenu = () => {

    const mobileNav = [
        {
            path: "/bookingcar-modal",
            svg : car,
            title : "Забронировать Авто"
        },
        {
            path: "/bookingcar-modal",
            svg : order,
            title : "Мои Бронирования"
        },
        {
            path: "/bookingcar-modal",
            svg : login,
            title : "Войти"
        },
        {
            path: "/bookingcar-modal",
            svg : phone,
            title : "Бронируйте по телефону"
        },
    ]
    
    const mobileNavSettings = [
        {
            path: "/bookingcar-modal",
            svg : rus,
            title : "Валюта"
        },
        {
            path: "/bookingcar-modal",
            svg : eur,
            title : "Язык"
        },
        {
            path: "/bookingcar-modal",
            svg : lang,
            title : "Место Проживания"
        },
    ]
        
    const mobileNavUseful = [
        {
            path: "/bookingcar-modal",
            title : "О Нас"
        },
        {
            path: "/bookingcar-modal",
            title : "Контакты"
        },
        {
            path: "/bookingcar-modal",
            title : "Информация"
        },
        {
            path: "/bookingcar-modal",
            title : "Отзывы"
        },
        {
            path: "/bookingcar-modal",
            title : "Вопросы"
        },
    ]

    return (
        <div className={style.container}>
            
           {  mobileNav.length && mobileNav.map(link => {
                    return (
            < NavLink className={style.navItem} to={link.path}>
                    <img src={link.svg} alt="icon" /> 
                    <span>{link.title}</span>             
            </NavLink>
                    )
                })
            }
            <span className={style.settings}>
                Настройки
            </span>
            {  mobileNavSettings.length && mobileNavSettings.map(sets => {
                    return (
            < NavLink className={style.navItem} to={sets.path}>
                    <img src={sets.svg} alt="icon" /> 
                    <span>{sets.title}</span>             
            </NavLink>
                    )
                })
            }
            <span className={style.useful}>
                Полезное
            </span>
            {  mobileNavUseful.length && mobileNavUseful.map(useful => {
                    return (
            < NavLink className={style.navItem} to={useful.path}>
                    <span>{useful.title}</span>             
            </NavLink>
                    )
                })
            }
        </div>
    )
}

export default MobileMenu;