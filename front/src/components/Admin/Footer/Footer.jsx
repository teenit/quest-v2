import React from "react"
import s from "./Footer.module.css"
import { NavLink } from "react-router-dom"

const Footer = () =>{
    return(
        <div className={s.wrap}>
            <div className={s.in}>
                {/* <div className={s.in__row}>
                    <div className={s.help__wrap}>
                        <NavLink className={s.help__link} to="/support">Допомога</NavLink>
                    </div>
                    <div className={s.mobile__wrap}>
                        <a href="tel:+380 66 574 46 81">+380 66 574 46 81</a>
                    </div>
                </div> */}
                <div className={s.in__row}>
                    <NavLink className={s.copyright__link} to="/copyright">Copyright 2023</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Footer