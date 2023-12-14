import React, { useState } from "react";
import s from './Quests.module.css'
import Header from "../Header/Header";
import Modal from "../elements/Modal";
import Burger from "../modules/Burger/Burger";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const Quests = () =>{
    const [activeMenu, setActiveMenu] = useState(false)
    const contentItemsQuests = [
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-2.svg',
            name: "Пошук загубленого спадку"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-1.svg',
            name: "Загадкове прокляття"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Пошук втраченого артефакту"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Втрачений колдунський кристал"
        }
    ]

    return(
        <div className={s.wrap}>
            <div className={s.in}>
                <div className={s.header__wrap}>
                    <Header active = {activeMenu} setActive = {()=>{setActiveMenu(!activeMenu)}}/>
                    {activeMenu &&(<Modal children={<Burger setActive = {()=>{setActiveMenu(!activeMenu)}}/>}/>)}
                </div>
                <div className={s.content__wrap}>
                    <div className={s.content__in}>
                        {
                            contentItemsQuests.map((item, index)=>{
                                return(
                                    <div className={s.item__row} key={index}>
                                        <div className={s.item__row__in}>
                                            <div className={s.item__image}>
                                                <img src={item.photo} alt={item.name} />
                                                {/* абсолютні посилання для фото */}
                                            </div>
                                            <div className={s.item__title}>
                                                <NavLink className={s.item__title__in} to="/admin/quest">{item.name}</NavLink>
                                                 {/* додати id */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={s.footer__wrap}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Quests