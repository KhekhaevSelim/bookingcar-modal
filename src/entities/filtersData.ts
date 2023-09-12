import AT from "../assets/icons/AT.svg";
import ATact from "../assets/icons/ATact.svg";
import MT from "../assets/icons/MT.svg";
import MTact from "../assets/icons/MTact.svg";
import Climat from "../assets/icons/climat.svg";
import Climatact from "../assets/icons/climatact.svg";
import MiniCar from "../assets/icons/miniCar.svg";
import MiniCaract from "../assets/icons/miniCaract.svg";
import EcoCar from "../assets/icons/economCar.svg";
import EcoCaract from "../assets/icons/economCaract.svg";
import LuxCar from "../assets/icons/luxCar.svg";
import LuxCaract from "../assets/icons/luxCaract.svg";
import UniCar from "../assets/icons/uniCar.svg";
import UniCaract from "../assets/icons/uniCaract.svg";
import MinivanCar from "../assets/icons/minivanCar.svg";
import MinivanCaract from "../assets/icons/minivanCaract.svg";
import JeepCar from "../assets/icons/jeepCar.svg";
import JeepCaract from "../assets/icons/jeepCaract.svg";
import CupeCar from "../assets/icons/cupeCar.svg";
import CupeCaract from "../assets/icons/cupeCaract.svg";
import StandartCar from "../assets/icons/standartCar.svg";
import StandartCaract from "../assets/icons/standartCaract.svg";
import ExclusiveCar from "../assets/icons/exclusiveCar.svg";
import ExclusiveCaract from "../assets/icons/exclusiveCaract.svg";

export type FilterItemType = {
    name : string
    filters : Array<FilterType>
}

export type FilterType = {
    id : string
    title : string
    icon? : string
    iconAct? : string
    rating? : number
} 

export const filtersData : Array<FilterItemType> = [
    {
      name : "Коробка Передач",
      filters : [
        { 
            id : "AT",
            title : "Автоматичекская коробка",
            icon : AT,
            iconAct : ATact

        },
        {
            id : "MT",
            title : "Механическая коробка",
            icon : MT,
            iconAct : MTact
        }
      ]
    },
    {
        name : "Комплектация",
        filters : [
          { 
              id : "Climat",
              title : "Кондиционер",
              icon : Climat,
              iconAct : Climatact
          }
        ]
    },
    {
        name : "Класс авто",
        filters : [
          { 
              id : "Mini",
              title : "Мини",
              icon : MiniCar,
              iconAct : MiniCaract
          },
          { 
            id : "Eco",
            title : "Эконом",
            icon : EcoCar,
            iconAct : EcoCaract
        },
        { 
            id : "Standart",
            title : "Стандарт",
            icon : StandartCar,
            iconAct : StandartCaract
        },
        { 
            id : "Lux",
            title : "Люкс",
            icon : LuxCar,
            iconAct : LuxCaract
        },
        { 
            id : "Uni",
            title : "Уневирсал",
            icon : UniCar,
            iconAct : UniCaract
        },
        { 
            id : "Minivan",
            title : "Минивэн",
            icon : MinivanCar,
            iconAct : MinivanCaract
        },
        { 
            id : "Jeep",
            title : "Внедорожник",
            icon : JeepCar,
            iconAct : JeepCaract
        },
        { 
            id : "Cupe",
            title : "Купэ / Кабрио",
            icon : CupeCar,
            iconAct : CupeCaract
        },
        { 
            id : "Exclusive",
            title : "Особый",
            icon : ExclusiveCar,
            iconAct : ExclusiveCaract
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