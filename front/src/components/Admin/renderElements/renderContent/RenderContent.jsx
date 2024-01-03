import React, { useState } from "react";
import s from "./RenderContent.module.css"
import { NavLink, Route, Routes } from "react-router-dom";

const RenderContent = () =>{

    const userInfo = {
        photo: "file:///C:/Projects/quest/front/src/images/ellipse-2.svg",
        name: "Івана Прокопенко",
        number: "+380 67 345 42 31",
        email: "ivanaprokopenko@gmail.com",
        type: "Адмін"
    }

    return(
        <div className={s.wrap}>
            <div className={s.in}>
                
                <div className={s.title__in__main}>
                    <h1 className={s.title}>Користувач</h1>
                </div>
                
                <div className={s.content__wrap}>
                    
                    <div className={s.content__image}>
                        <img src={userInfo.photo} alt={userInfo.name} />
                    </div>
                    
                    <div className={s.content__info}>
                        <div className={s.info__wrap}>
                            <div className={s.info__row}>
                                <p>{userInfo.name}</p>
                            </div>
                            <div className={s.info__row}>
                                <p>{userInfo.type}</p>
                            </div>
                        </div>
                        <div className={s.info__wrap}>
                            <div className={s.info__row}>
                                <p>{userInfo.number}</p>
                            </div>
                            <div className={s.info__row}>
                                <p>{userInfo.email}</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
export default RenderContent