import React from "react";
import s from "./RenderMenuItems.module.css"

const RenderMenuItems = ({menuItem}) =>{
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