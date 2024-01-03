import React, { useState } from "react";
import s from "./Users.module.css"
import Header from "../Header/Header";
import Modal from "../elements/Modal";
import Burger from "../modules/Burger/Burger";
import Footer from "../Footer/Footer";
import AddAdmin from "../modules/Forms/AddAdmin/AddAdmin";
import AddRoom from "../modules/Forms/AddRoom/AddRoom";
import AddQuest from "../modules/Forms/AddQuest/AddQuest";
import AddQuestion from "../modules/Forms/AddQuestion/AddQuestion";
import UserRow from "./UserRow";

const Users = () =>{
    const [activeMenu, setActiveMenu] = useState(false)
    const [showModeretaion, setShowModerition] = useState(false)

    const [showForm, setShowForm] = useState(false)

    const contentItemsUsers = [
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-2.svg',
            name: "Івана Прокопенко",
            id: "1",
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-1.svg',
            name: "Микола Бойко",
            id: "2",
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Катерина Мельник",
            id: "3",
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-2.svg',
            name: "Івана Прокопенко",
            id: "4",
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-1.svg',
            name: "Микола Бойко",
            id: "5",
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Катерина Мельник",
            id: "6",
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-2.svg',
            name: "Івана Прокопенко",
            id: "7",
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-1.svg',
            name: "Микола Бойко",
            id: "8",
        },
        {
            photo: 'file:///C:/Projects/quest/front/src/images/ellipse-3.svg',
            name: "Катерина Мельник",
            id: "9",
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
                            <div className={s.title__in__main}>
                                <h1 className={s.title}>Користувачі</h1>
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
                                        <UserRow item={item} index={index} showModeretaion={showModeretaion}/>
                                    )
                                })
                            }
                        </div>

                        <div className={s.btn__wrap}>
                            <button className={s.btn} onClick={()=>{
                                setShowForm(!showForm)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M23.4375 10.9375H14.0625V1.5625C14.0625 1.1481 13.8979 0.750672 13.6049 0.457646C13.3118 0.16462 12.9144 0 12.5 0C12.0856 0 11.6882 0.16462 11.3951 0.457646C11.1021 0.750672 10.9375 1.1481 10.9375 1.5625V10.9375H1.5625C1.1481 10.9375 0.750672 11.1021 0.457646 11.3951C0.16462 11.6882 0 12.0856 0 12.5C0 12.9144 0.16462 13.3118 0.457646 13.6049C0.750672 13.8979 1.1481 14.0625 1.5625 14.0625H10.9375V23.4375C10.9375 23.8519 11.1021 24.2493 11.3951 24.5424C11.6882 24.8354 12.0856 25 12.5 25C12.9144 25 13.3118 24.8354 13.6049 24.5424C13.8979 24.2493 14.0625 23.8519 14.0625 23.4375V14.0625H23.4375C23.8519 14.0625 24.2493 13.8979 24.5424 13.6049C24.8354 13.3118 25 12.9144 25 12.5C25 12.0856 24.8354 11.6882 24.5424 11.3951C24.2493 11.1021 23.8519 10.9375 23.4375 10.9375Z" fill="white"/>
                                </svg>
                            </button>
                            <p>Додати</p>
                        </div>
                        
                    </div>
                
                    {
                        showForm &&(<Modal children={<AddAdmin setActive={()=>{setShowForm(!showForm)}}/>}/>)
                        // showForm &&(<Modal children={<AddRoom setActive={()=>{setShowForm(!showForm)}}/>}/>)
                        // showForm &&(<Modal children={<AddQuest setActive={()=>{setShowForm(!showForm)}}/>}/>)
                        // showForm &&(<Modal children={<AddQuestion setActive={()=>{setShowForm(!showForm)}}/>}/>)
                    }
                       
                </div>
                <div className={s.footer__wrap}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Users