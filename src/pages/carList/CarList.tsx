import { useState } from "react";
import Crumbs from "../../components/crumbs/Crumbs";
import Header from "../../components/header/Header";
import style from "./CarList.module.css";
import MobileMenu from "../../components/mobileMenu/MobileMenu";
import Footer from "../../components/footer/Footer";
import filter from "../../assets/icons/filter.svg";
import OutputCrumbs from "../../components/outputCrumbs/OutputCrumbs";
import PriceSlider from "../../components/priceSlider/PriceSlider";



export type OutputCrumsDataType = {
id : string 
num : number
title : string
subTitle : string
}

const CarList = () => {
    
    const [sliderValue, setSliderValue] = useState<string>("180")
    // меняем при событии onChange вместо со стейтом и значение глобальной CSS переменной - для следования ценника на ползунком
    const handleChangeSliderValue = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(event.target.value)
        document.documentElement.style.setProperty('--slider-value', event.target.value);
    }
    // меняем при событии onChange вместо со стейтом и значение глобальной CSS переменной - для следования ценника на ползунком
    
    // локальный стейк для смены класса хлебных крошек (оставить тут, все ф-ции будут запускаться отсюда скорее всего)
    const [activeCrumb, setActiveCrumb] = useState<string>("search")
    // локальный стейк для смены класса хлебных крошек (оставить тут, все ф-ции будут запускаться отсюда скорее всего)

    const outputCrumsData : Array<OutputCrumsDataType> = [
        {
            id: "search",
            num : 1,
            title : "ПОИСК",
            subTitle : "Выберите машину"
        },
        {
            id: "options",
            num : 2,
            title : "ДЕТАЛИ",
            subTitle : "Выберите опции"
        },
        {
            id: "pay",
            num : 3,
            title : "ОПЛАТА",
            subTitle : "Произведите оплату"
        },
    ]

    // храним снаружи состояние мобильного меню
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    const handleBurgerMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }
    // храним снаружи состояние мобильного меню

    const fakeData = {
        startCity : "Moscow",
        startLocation : "аэропорт Vnukovo (VKO)",
        startDate : "24 Января",
        startTime : "11:00 AM",
        finishCity : "Moscow",
        finishLocation :"аэропорт Vnukovo (VKO)",
        finishDate : "29 Января",
        finishTime : "17:00 AM"
    }
    return (
        <div className={style.container}>
         <Header showMobileMenu={showMobileMenu} callBack={handleBurgerMenu}/>
         {
            showMobileMenu ?
        <MobileMenu/>
        :
        <>
        <Crumbs startCity={fakeData.startCity} startLocation={fakeData.startLocation} 
                startDate={fakeData.startDate} startTime={fakeData.startTime}
                finishCity={fakeData.finishCity} finishLocation={fakeData.finishLocation} 
                finishDate={fakeData.finishDate} finishTime={fakeData.finishTime}/>

        <div className={style.centalBlock}>
            <div className={style.wrapper}>
               <div className={style.left}>
                    <div className={style.filtersContainer}>
                        <div className={style.header}>
                            <img src={filter} alt="filter" />
                            <span>
                            ФИЛЬТРЫ
                            </span>
                        </div>
                        <PriceSlider handleChangeSliderValue={handleChangeSliderValue} max={280} min={30} sliderValue={sliderValue} />
                        
                    </div> 
                    <div className={style.phoneContainer}>

                    </div>
                </div>

                <div className={style.right}>
                    <OutputCrumbs crumbsData={outputCrumsData} activeCrumb={activeCrumb}/>
                    <div className={style.outputInfoAndSort}>

                    </div>

                    <div className={style.carList}>
                     
                    </div>

                </div> 
            </div> 
        </div>
        <Footer/>
         </>
         }
        </div>
    )
}


export default CarList;