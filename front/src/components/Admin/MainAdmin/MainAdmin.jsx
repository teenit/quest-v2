import React, { useState } from "react";
import s from "./MainAdmin.module.css"
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import GroupContent from "../renderElements/GroupContent";
import Burger from "../modules/Burger/Burger";
import Modal from "../elements/Modal";
import Footer from "../Footer/Footer";

const MainAdmin = () =>{
    
    const [activeMenu, setActiveMenu] = useState(false)

    const menuItems = [
        "Адміни","Кімнати","Квести","Завдання"
    ]

    const contentItemsAdmins = [
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-2.svg',
            name: "Івана Прокопенко"
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
            name: "Івана Прокопенко"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-1.svg',
            name: "Микола Бойко"
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Катерина Мельник"
        }
    ]

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

    const contentItemsQuestions = [
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

    // Масив з пунктами меню відображається за допомогою redux (RenderMenuItems)
    // Посилання та заголовок змінюється за допомогою redux (RenderContent)
    // В MainAdmin функції котрі отримують дані для сторінок
    // Зробити функцію котра братиме назву квесту для роутінгу
    
    return(
        <div className={s.wrap}>
            <div className={s.in}>
                <div className={s.header__wrap}>
                    <Header active = {activeMenu} setActive = {()=>{setActiveMenu(!activeMenu)}}/>
                    {activeMenu &&(<Modal children={<Burger setActive = {()=>{setActiveMenu(!activeMenu)}}/>}/>)}
                </div>
                <div className={s.routes__wrap}>
                    <Routes>
                        <Route path="/" element={<GroupContent menuItem={menuItems} content={contentItemsAdmins}/>}/>
                        <Route path="/room" element={<GroupContent menuItem={menuItems} content={contentItemsRooms}/>}/>
                        <Route path="/quest" element={<GroupContent menuItem={menuItems} content={contentItemsQuests}/>}/>
                        <Route path="/question" element={<GroupContent menuItem={menuItems} content={contentItemsQuestions}/>}/>
                    </Routes>
                </div>
                <div className={s.footer__wrap}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default MainAdmin