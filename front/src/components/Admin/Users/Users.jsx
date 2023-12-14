import React, { useState } from "react";
import s from "./Users.module.css"
import Header from "../Header/Header";
import Modal from "../elements/Modal";
import Burger from "../modules/Burger/Burger";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const Users = () =>{
    const [activeMenu, setActiveMenu] = useState(false)
    const [showModeretaion, setShowModerition] = useState(false)
    const contentItemsUsers = [
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-2.svg',
            name: "Івана Прокопенко",
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-1.svg',
            name: "Микола Бойко"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Катерина Мельник"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-2.svg',
            name: "Івана Прокопенко",
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-1.svg',
            name: "Микола Бойко"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Катерина Мельник"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-2.svg',
            name: "Івана Прокопенко",
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-1.svg',
            name: "Микола Бойко"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Катерина Мельник"
        },
        
    ]
    const userTypes = [{
        value:"saxon",
        title:"Супер Адмін",
    },
    {
        value:"user",
        title:"Користувач",
    },
    {
        value:"saxon-junior",
        title:"Адмін",
    },
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
                        <div className={s.title__wrap}>
                            <div className={s.title}>
                                <h1>Користувачі</h1>
                            </div>
                            <div className={s.item__moderation__show} onClick={()=>{
                                    setShowModerition(!showModeretaion)
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M16.9568 0.000535732C16.1787 0.0110896 15.4351 0.323366 14.8828 0.871525L0.878997 14.8753C0.319431 15.4376 0.00612733 16.1991 0.00800789 16.9923L8.03281e-06 20.9943C-0.000521006 21.1263 0.0250867 21.2571 0.0753544 21.3791C0.125622 21.5012 0.199555 21.612 0.29289 21.7054C0.386224 21.7987 0.497113 21.8726 0.619161 21.9229C0.741209 21.9732 0.872002 21.9988 1.004 21.9983L5.00594 21.9903C5.39872 21.9912 5.78785 21.9148 6.15109 21.7654C6.51432 21.6159 6.84456 21.3964 7.12292 21.1193L21.1267 7.11545C21.6849 6.55022 21.9979 5.78784 21.9979 4.99347C21.9979 4.1991 21.6849 3.43672 21.1267 2.8715L19.1268 0.871525C18.8419 0.58838 18.503 0.365375 18.1302 0.215753C17.7574 0.0661304 17.3584 -0.00705727 16.9568 0.000535732ZM16.9868 1.99251C17.2568 1.98851 17.5168 2.09651 17.7088 2.28751L19.7108 4.28948C19.8053 4.38095 19.8805 4.4905 19.9318 4.61162C19.9831 4.73273 20.0096 4.86293 20.0096 4.99447C20.0096 5.12602 19.9831 5.25622 19.9318 5.37733C19.8805 5.49844 19.8053 5.60799 19.7108 5.69946L18.4158 6.99245L15.0058 3.58249L16.2988 2.28751C16.4808 2.10369 16.7282 1.9979 16.9868 1.99251ZM13.5918 4.99647L17.0018 8.40643L6.41393 18.9943L3.00397 15.5843L13.5918 4.99647ZM1.99998 17.4083L4.58795 19.9963H1.99998V17.4083Z" fill="#D9D9D9"/>
                                    </svg>
                            </div>
                        </div>
                        <div className={s.items__wrap}>
                            {
                                contentItemsUsers.map((item, index)=>{
                                    return(
                                        <div className={s.item__row} key={index}>
                                            <div className={s.item__row__in}>
                                                <div className={s.item__image}>
                                                    <img src={item.photo} alt={item.name} />
                                                    {/* абсолютні посилання для фото */}
                                                </div>
                                                <div className={s.item__title}>
                                                    <p className={s.item__title__in}>{item.name}</p>
                                                    {/* <NavLink className={s.item__title__in} to="/admin/room">{item.name}</NavLink> */}
                                                    {/* проставити посилання в залежності від роуту */}
                                                </div>
                                            </div>
                                            {
                                                showModeretaion &&(
                                                    <div>
                                                        <select className={s.select} name="" id=""> 
                                                            {
                                                                userTypes.map((item)=>{
                                                                    return(
                                                                        <option className={s.option} key={item.value} value={item.value}>{item.title}</option>
                                                                    )
                                                                })
                                                            }
                                                            </select>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={s.footer__wrap}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Users