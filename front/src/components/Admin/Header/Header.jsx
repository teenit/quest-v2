import React, { useState } from "react";
import s from "./Header.module.css"
import logoImage from "../../../images/logo.png"
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = ({active, setActive}) =>{
    return(
        <div className={s.wrap}>
            <div className={s.in}>
                <div className={s.logo__wrap}>
                    <NavLink className={s.logo__link} to="/admin">
                        <img src={logoImage} alt="Логотип" />
                    </NavLink>
                </div>
                <div className={s.help__burger__wrap}>
                    <div className={s.help__wrap}>
                        <NavLink className={s.help__link} to="/support">Допомога ?</NavLink>
                    </div>
                    <div className={`${s.burger__wrap} ${active &&(s.burger__wrap__large)}`}>
                        <BurgerMenu active={active} setActive={setActive}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header