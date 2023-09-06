import { useState } from "react";
import Crumbs from "../../components/crumbs/Crumbs";
import Header from "../../components/header/Header";
import style from "./CarList.module.css";
import MobileMenu from "../../components/mobileMenu/MobileMenu";
import Footer from "../../components/footer/Footer";

const CarList = () => {
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

        <Crumbs startCity={fakeData.startCity} startLocation={fakeData.startLocation} startDate={fakeData.startDate} startTime={fakeData.startTime}
                finishCity={fakeData.finishCity} finishLocation={fakeData.finishLocation} finishDate={fakeData.finishDate} finishTime={fakeData.finishTime}/>
         <div className={style.centalBlock}>
            <div className={style.wrapper}>
               <div className={style.left}>
                      <div className={style.filtersContainer}>

                      </div> 
                       <div className={style.phoneContainer}>

                      </div>
              </div>

              <div className={style.right}>
                 <div className={style.outputCrumbs}>

                </div> 

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