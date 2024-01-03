import React from "react";
import s from "./Burger.module.css"
import { NavLink } from "react-router-dom";

const Burger = ({setActive})=>{
    return(
        <div className={s.main__wrap}>
            <div className={s.close__wrap} onClick={()=>{
                setActive()
            }}></div>    
            <div className={s.wrap}>
                <div className={s.in}>
                    <div className={s.close__image}>
                        <svg className={s.chrest} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" color="#000000" height="25" viewBox="0 0 50 50" onClick={()=>{
                            setActive()
                        }}><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path></svg>    
                    </div>
                    <div className={s.burger__list}>
                        <div className={s.item}>
                            <NavLink className={s.item__link} to="/admin/users">Користувачі</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink className={s.item__link} to="/admin/rooms">Кімнати</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink className={s.item__link} to="/admin/quests">Квести</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink className={s.item__link} to="">Вийти</NavLink>{/*продумати як працюватиме Вийти*/}
                        </div>
                        <div className={s.mobile__wrap}>
                            <a href="tel:+380 66 574 46 81">+380 66 574 46 81</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Burger