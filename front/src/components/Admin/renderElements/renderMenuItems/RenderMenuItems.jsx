import React, { useState } from "react";
import s from "./RenderMenuItems.module.css"
import { Route, Routes } from "react-router";

const RenderMenuItems = ({menuItem}) =>{
    const [state, setState] = useState({
        adminShow:['Адміни'],
        roomShow:['Адміни','Кімнати'],
        questShow:['Адміни','Кімнати','Квести'],
        questionShow:['Адміни','Кімнати','Квести','Завдання'],
    })
    return(
        <div className={s.wrap}>
            <div className={s.in}>
                {
                    menuItem.map((item, index)=>{
                        return(
                            <div className={s.item} key={index}>{item}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default RenderMenuItems