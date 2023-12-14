import React, { useState } from "react";
import s from './Rooms.module.css'
import Header from "../Header/Header";
import Modal from "../elements/Modal";
import Burger from "../modules/Burger/Burger";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const Rooms = () =>{
    const [activeMenu, setActiveMenu] = useState(false)
    const contentItemsRooms = [
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-2.svg',
            name: "Містичний замок"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-1.svg',
            name: "Піратський корабель"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Фантастичний лабіринт"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Космічна станція"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-2.svg',
            name: "Містичний замок"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-1.svg',
            name: "Піратський корабель"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Фантастичний лабіринт"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Космічна станція"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-2.svg',
            name: "Містичний замок"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-1.svg',
            name: "Піратський корабель"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Фантастичний лабіринт"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Космічна станція"
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
                            contentItemsRooms.map((item, index)=>{
                                return(
                                    <div className={s.item__row} key={index}>
                                        <div className={s.item__row__in}>
                                            <div className={s.item__image}>
                                                <img src={item.photo} alt={item.name} />
                                                {/* абсолютні посилання для фото */}
                                            </div>
                                            <div className={s.item__title}>
                                                <NavLink className={s.item__title__in} to="/admin/room">{item.name}</NavLink>
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
export default Rooms