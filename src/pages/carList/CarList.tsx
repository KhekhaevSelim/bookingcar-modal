import { useState } from "react";
import Crumbs from "../../components/crumbs/Crumbs";
import Header from "../../components/header/Header";
import style from "./CarList.module.css";
import MobileMenu from "../../components/mobileMenu/MobileMenu";
import Footer from "../../components/footer/Footer";
import filter from "../../assets/icons/filter.svg";
import OutputCrumbs from "../../components/outputCrumbs/OutputCrumbs";
import PriceSlider from "../../components/priceSlider/PriceSlider";
import Card from "../../components/card/Card";
import AT from "../../assets/icons/AT.svg";
import MT from "../../assets/icons/MT.svg";
import FilterItem from "../../components/filterItem/FilterItem";
import Climat from "../../assets/icons/climat.svg";
import MiniCar from "../../assets/icons/miniCar.svg";
import EcoCar from "../../assets/icons/economCar.svg";
import LuxCar from "../../assets/icons/luxCar.svg";
import UniCar from "../../assets/icons/uniCar.svg";
import MinivanCar from "../../assets/icons/minivanCar.svg";
import JeepCar from "../../assets/icons/jeepCar.svg";
import CupeCar from "../../assets/icons/cupeCar.svg";
import StandartCar from "../../assets/icons/standartCar.svg";
import ExclusiveCar from "../../assets/icons/exclusiveCar.svg";
import PhoneBlock from "../../components/phoneBlock/PhoneBlock";
import ActiveFilters from "../../components/activeFilters/ActiveFilters";


export type FilterItemType = {
    name : string
    filters : Array<FilterType>
}

export type FilterType = {
    id : string
    title : string
    icon? : string
    rating? : number
} 

// export type FilterIdType = "Fox" | "Hertz" | "Dollar" | "Thrifty" | "Europcar" | "Alamo" | "Exclusive" |
//                            "Cupe" | "Jeep" | "Minivan" | "Uni" | "Lux" | "Standart" | "Eco" | "Mini";

export type OutputCrumsDataType = {
id : string 
num : number
title : string
subTitle : string
}

const CarList = () => {
    
    //стейт для активных фильтров
    const [activeFilters, setActiveFilters] = useState<Array<string>>([]);
    
    const addActiveFilter = (filter : string) => {
        let updatedFilters = activeFilters || [];
        if(activeFilters.includes(filter)) {
            updatedFilters = activeFilters.filter(f => f !== filter)
        } else {
            updatedFilters = [...activeFilters, filter]
        }
        setActiveFilters(updatedFilters);        
    }


    const resetFilters = () => {
        setActiveFilters([]);
    }

    const removeFilter = (filter : string) => {
        setActiveFilters([...activeFilters.filter(f => f !== filter)])
    }
    //стейт для активных фильтров

    const [sliderValue, setSliderValue] = useState<string>("180");
    // меняем при событии onChange вместо со стейтом и значение глобальной CSS переменной - для следования ценника на ползунком
    const handleChangeSliderValue = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(event.target.value)
        document.documentElement.style.setProperty('--slider-value', event.target.value);
    }
    // меняем при событии onChange вместо со стейтом и значение глобальной CSS переменной - для следования ценника на ползунком
    
    // локальный стейк для смены класса хлебных крошек (оставить тут, все ф-ции будут запускаться отсюда скорее всего)
    const [activeCrumb, setActiveCrumb] = useState<string>("search")
    // локальный стейк для смены класса хлебных крошек (оставить тут, все ф-ции будут запускаться отсюда скорее всего)
    
    const changeActiveCrumb = (id : string) => {
        setActiveCrumb(id)
    }

    const filtersData : Array<FilterItemType> = [
        {
          name : "Коробка Передач",
          filters : [
            { 
                id : "AT",
                title : "Автоматичекская коробка",
                icon : AT
            },
            {
                id : "MT",
                title : "Механическая коробка",
                icon : MT
            }
          ]
        },
        {
            name : "Комплектация",
            filters : [
              { 
                  id : "Climat",
                  title : "Кондиционер",
                  icon : Climat
              }
            ]
        },
        {
            name : "Класс авто",
            filters : [
              { 
                  id : "Mini",
                  title : "Мини",
                  icon : MiniCar
              },
              { 
                id : "Eco",
                title : "Эконом",
                icon : EcoCar
            },
            { 
                id : "Standart",
                title : "Стандарт",
                icon : StandartCar
            },
            { 
                id : "Lux",
                title : "Люкс",
                icon : LuxCar
            },
            { 
                id : "Uni",
                title : "Уневирсал",
                icon : UniCar
            },
            { 
                id : "Minivan",
                title : "Минивэн",
                icon : MinivanCar
            },
            { 
                id : "Jeep",
                title : "Внедорожник",
                icon : JeepCar
            },
            { 
                id : "Cupe",
                title : "Купэ / Кабрио",
                icon : CupeCar
            },
            { 
                id : "Exclusive",
                title : "Особый",
                icon : ExclusiveCar
            },
            ]
          },
          {
            name : "Прокатчики",
            filters : [
            {
                id : "Alamo",
                title : "Alamo",
                rating : 8.9       
            },
            {
                id : "Europcar",
                title : "Europcar",
                rating : 8.2       
            },
            {
                id : "Thrifty",
                title : "Thrifty",
                rating : 7.8       
            },
            {
                id : "Dollar",
                title : "Dollar",
                rating : 7.2       
            },
            {
                id : "Hertz ",
                title : "Hertz ",
                rating : 4.0       
            },
            {
                id : "Fox",
                title : "Fox Rent A Car Usa",
                rating : 6.5       
            },
            ]
          }
    ]

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

    const FakeDataCar = [
        {
            name: "VolksWagen Golf 1.8 GPS",
            similiar: "or similar Compact (CDMR)",
            discount: 35,
            redprice: 30.00,
            price: 19.50,
            threedayprice: 58.50 ,
            rating: 8.9
        },
        {
            name: "Fiat Panda L",
            similiar: "or similar Compact (CDMR)",
            discount: 35,
            redprice: 32.14,
            price: 32.14,
            threedayprice: 67.50 ,
            rating: 7.8
        },
        {
            name: "VolksWagen Golf 1.8 GPS Model Garanteed*",
            similiar: "or similar Compact (CDMR)",
            discount: 35,
            redprice: 47.29,
            price: 36.42,
            threedayprice: 167.50 ,
            rating: 7.0
        },
    ]

    console.log(activeFilters)
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
                            <span onClick={()=>changeActiveCrumb("asd")}>
                            ФИЛЬТРЫ
                            </span>
                        </div>
                        <ActiveFilters activeFilters={activeFilters} resetFilters={resetFilters} removeFilter={removeFilter}/>
                        <PriceSlider handleChangeSliderValue={handleChangeSliderValue} max={280} min={30} sliderValue={sliderValue} />
                        {
                        filtersData.length ? 
                        filtersData.map(f => {
                            return (
                                <FilterItem filterItem={f} key={f.name} addActiveFilter={addActiveFilter} activeFilters={activeFilters}/>
                            )
                        })
                        
                            :
                        ""
                        }


                    </div> 
                    <PhoneBlock id={"32-332244"}/>
                </div>

                <div className={style.right}>
                    <OutputCrumbs crumbsData={outputCrumsData} activeCrumb={activeCrumb}/>
                    <div className={style.outputInfoAndSort}>

                    </div>

                    <div className={style.carList}>
                    {FakeDataCar.map((el) => {
                        return (
                            <Card name={el.name} key={el.name} similiar={el.similiar} discount={el.discount} 
                                  redprice={el.redprice} price={el.price} threedayprice={el.threedayprice} rating={el.rating} />
                        )
                    })}
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