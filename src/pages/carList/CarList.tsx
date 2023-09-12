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
import {filtersData} from "../../entities/filtersData";
import {outputCrumsData} from "../../entities/OutputCrumsData";
import FilterItem from "../../components/filterItem/FilterItem";
import PhoneBlock from "../../components/phoneBlock/PhoneBlock";
import ActiveFilters from "../../components/activeFilters/ActiveFilters";
import loadingIcon from "../../assets/icons/loadingIcon.svg";
import OutputInfoAndSort from "../../components/outputInfoAndSort/outputInfoAndSort";



const CarList = () => {
    //стейт для показа фильтров на мобилке
    const [showMobFilters, setShowMobFilters] = useState<boolean>(false);

    const toggleOnMobFilters = () => {
        setShowMobFilters(true)
    }
    const toggleOffMobFilters = () => {
        setShowMobFilters(false)
    }
    //стейт для прелодера
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleLoading = () => {
        setIsLoading(!isLoading);
    }

    if(isLoading){
        document.body.style.overflow = "hidden";
    }else {
        document.body.style.overflow = "auto";
    }
    //стейт для прелодера

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
    console.log(activeFilters)
    //стейт для активных фильтров

    const [sliderValue, setSliderValue] = useState<string>("180");
    // меняем при событии onChange вместо со стейтом и значение глобальной CSS переменной - для следования ценника за ползунком
    const handleChangeSliderValue = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(event.target.value)
        document.documentElement.style.setProperty('--slider-value', event.target.value);
    }
    // меняем при событии onChange вместо со стейтом и значение глобальной CSS переменной - для следования ценника на ползунком
    
    // локальный стейк для смены класса хлебных крошек (оставить тут, все ф-ции будут запускаться отсюда скорее всего)
    const [activeCrumb, setActiveCrumb] = useState<string>("search")
    // локальный стейк для смены класса хлебных крошек (оставить тут, все ф-ции будут запускаться отсюда скорее всего)
    
    // const changeActiveCrumb = (id : string) => {
    //     setActiveCrumb(id)
    // }

   

   
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


    return (
        <>
        {
            //фильтры для мобилки вынесены в отдельный полноценный экран и рендерятся по тернарному условию
            showMobFilters ?
            <div className={style.mobileFilters}>
            <div className={style.mobileFiltersHeader}>
                <span className={style.back} onClick={()=>toggleOffMobFilters()}>Назад</span>
                <span className={style.reset} onClick={()=>resetFilters()}>Сбросить</span>
            </div>
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
            //фильтры для мобилки вынесены в отдельный полноценный экран и рендерятся по тернарному условию
            :
            <div className={style.container}>
             <img src={loadingIcon} alt="loadingIcon" className={isLoading ? style.displayLoad : style.hiddenLoad} loading="lazy"/>
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

             <div className={isLoading ? style.centalBlockLoading : style.centalBlock}>
           
             <div className={style.wrapper}>
               <div className={style.left}>
                    <div className={style.filtersContainer}>
                        <div className={style.header}>
                            <img src={filter} alt="filter" />
                            <span >
                            ФИЛЬТРЫ
                            </span>
                        </div>
                        <ActiveFilters activeFilters={activeFilters} resetFilters={resetFilters} removeFilter={removeFilter} isMobile={false}/>
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

                  <div className={style.right} onClick={()=>setActiveCrumb("sd")}>
                       <OutputCrumbs crumbsData={outputCrumsData} activeCrumb={activeCrumb}/>
                       <OutputInfoAndSort activeFilters={activeFilters} removeFilter={removeFilter} resetFilters={resetFilters} toggleOnMobFilters={toggleOnMobFilters}/>
                    
                    
                    
                     
                       <div className={style.carList}>
                        {FakeDataCar.map((el) => {
                            return (
                            <Card name={el.name} key={el.name} similiar={el.similiar} discount={el.discount} 
                                     redprice={el.redprice} price={el.price} threedayprice={el.threedayprice} rating={el.rating} handleLoading={handleLoading}/>
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
            }


</> 
    )
}


export default CarList;