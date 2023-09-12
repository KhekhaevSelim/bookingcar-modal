import person from "./img/person.jpg"
import door from "./img/door.jpg"
import suitcase from "./img/suitcase.jpg"
import transmission from "./img/transmission.jpg"
import aircon from "./img/aircon.jpg"
import tire from "./img/tire.jpg"
import email from "./img/email.jpg"
import star from "./img/star.png"
import plane from "./img/plane.jpg"
import fuel from "./img/fuel.jpg"
import document from "./img/document.jpg"
import check from "./img/check.jpg"
import style from "./Card.module.css"
import { useState } from "react"

type dataProps = {
    name: string
    similiar: string
    discount: number
    redprice: number
    price: number
    threedayprice: number
    rating: number
    handleLoading : () => void
}

const Card = (data : dataProps) => {
    const [modalTerms, setModalTerms] = useState(false)
    const [modalTermsContainer, setModalTermsContainer] = useState(false)

    const openTermsModal = () => {
        setModalTerms(true)
        setModalTermsContainer(true)
        // document.getElementById('modal').classList.replace('hide', 'show');
    }

    const closeTermsModal = () => {
        setModalTerms(false)
        setTimeout(() => {
            setModalTermsContainer(false)
        }, 300);
        // document.getElementById('modal').classList.replace('show', 'hide');
    }
    return (
        <>
            <div className={`${modalTermsContainer ? style.modal_terms_container_show : style.modal_terms_container_hide}`}>
                <div id="modal" className={`${style.modal_terms} ${modalTerms ? style.show : style.hide}`}>
                    <div className={style.modal_terms_title}>
                        <span className={style.modal_title_text}>Условия Аренды</span>
                        <span className={style.close} onClick={closeTermsModal}>Х</span>
                    </div>
                    <hr />
                </div>
            </div>
            <div className={style.car_container}>
                <div className={style.car_container_title}>
                    <span>
                    {data.name}
                    </span>
                    <p>
                    {data.similiar}
                    </p>
                    <div className={style.car_title_discount}>
                    Сегодня вы экономите {data.discount}%
                    </div>
                    <div className={style.car_title_discount_mobile}>
                    Вы экономите {data.discount}%
                    </div>
                </div>
                <div className={style.car_container_info}>
                    <div className={style.car_info_img}>
                        <div className={style.car_info_img}>
                        </div>
                        <div className={`${style.car_equipment_quantities} ${style.car_equipment_quantities_mobile}`}>
                            <div className={style.car_equipment_quantity}>
                            <img src={person} alt="" />5
                            </div>
                            <div className={style.car_equipment_quantity}>
                            <img src={door} alt="" />5
                            </div>
                            <div className={style.car_equipment_quantity}>
                            <img src={suitcase} alt="" />1
                            </div>
                        </div>
                    </div>
                    <div className={style.car_info_equipment}>
                        <div className={style.car_equipment_quantities}>
                            <div className={style.car_equipment_quantity}>
                            <img src={person} alt="" />5
                            </div>
                            <div className={style.car_equipment_quantity}>
                            <img src={door} alt="" />5
                            </div>
                            <div className={style.car_equipment_quantity}>
                            <img src={suitcase} alt="" />1
                            </div>
                        </div>
                        <div className={style.car_equipment_transmission}>
                        <img src={transmission} alt="" />Коробка автомат
                        </div>
                        <div className={style.car_equipment_aircon}>
                        <img src={aircon} alt="" />Кондиционер
                        </div>
                        <div className={style.car_equipment_tires}>
                        <img src={tire} alt="" />Зимние Шины
                        </div>
                    </div>
                    <div className={style.car_info_price}>
                        <div className={style.car_price_forday}>
                        Цена за день
                        </div>
                        <div className={style.car_price_discount}>
                        USD {data.redprice}
                        </div>
                        <div className={style.car_price_price}>
                        USD {data.price}
                        </div>
                        <div className={style.car_price_forthreeday}>
                        Цена за 3 дня USD {data.threedayprice}
                        </div>
                        <div className={style.car_price_email}>
                        Отправит на Емайл
                        <img src={email} alt="" />
                        </div>
                    </div>
                </div>
                <hr className={`${style.car_container_hr} ${style.car_container_hr_mobile}`} />
                <div className={style.car_info_equipment_mobile}>
                    <div className={style.car_equipment_transmission}>
                    <img src={transmission} alt="" />Коробка автомат
                    </div>
                    <div className={style.car_equipment_aircon}>
                    <img src={aircon} alt="" />Кондиционер
                    </div>
                    <div className={style.car_equipment_tires}>
                    <img src={tire} alt="" />Зимние Шины
                    </div>
                </div>
                <hr className={`${style.car_container_hr} ${style.car_container_hr_first}`} />
                <div className={style.car_container_second}>
                    <div className={style.car_second_supplierandrating}>
                        <div className={style.car_second_supplier}>
                        </div>
                        {data.rating > 8 ? 
                        <div className={style.car_second_rating} style={{ background: 'var(--Green, #49A01F)' }}>
                            <img src={star} alt="" />{data.rating}
                        </div>
                        : 
                        data.rating > 7 ? 
                        <div className={style.car_second_rating} style={{ background: 'var(--Link-Blue, #1A62CF)' }}>
                            <img src={star} alt="" />{data.rating}
                        </div>
                        :
                        <div className={style.car_second_rating} style={{ background: 'var(--Subtle-Gray, #ACACAC)' }}>
                            <img src={star} alt="" />{data.rating}
                        </div>
                        }
                    </div>
                    <div className={style.car_second_terms}>
                        <div className={style.car_second_term}>
                            <img src={plane} alt="" />
                            Стойка в Терминале
                        </div>
                        <div className={style.car_second_term}>
                            <img src={fuel} alt="" />
                            Полный/Полный
                        </div>
                        <div className={style.car_second_term} onClick={openTermsModal}>
                            <img src={document} alt="" />
                            Условия Аренды
                        </div>
                    </div>
                </div>
                <hr className={`${style.car_container_hr} ${style.car_container_hr_second}`} />
                <div className={style.car_container_third}>
                    <div className={style.car_third_conditions}>
                        <div className={style.car_third_condition}>
                        <img src={check} alt="" />Страховка от Повреждений
                        </div>
                        <div className={style.car_third_condition}>
                        <img src={check} alt="" />Страховка от Третих Лиц
                        </div>
                        <div className={style.car_third_condition}>
                        <img src={check} alt="" />Страховка от Кражы
                        </div>
                        <div className={style.car_third_condition}>
                        <img src={check} alt="" />Страховка от Четвертых Лиц
                        </div>
                        <div className={style.car_third_condition}>
                        <img src={check} alt="" />Бесплатный GPS
                        </div>
                    </div>
                    <button onClick={()=>data.handleLoading()}>ВЫБРАТЬ</button>
                </div>
            </div>
            </>
    );
};

export default Card;