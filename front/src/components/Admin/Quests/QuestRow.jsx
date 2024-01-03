import React, { useState } from "react";
import s from "./Quests.module.css"
import { NavLink } from "react-router-dom";

const QuestRow = ({item, index, showModeretaion}) =>{
    const [itemFull, setItemFull] = useState({item})
    const [active, setActive] = useState(true)
    return(
        <div className={s.item__row} key={index}>
            <div className={s.item__row__in}>
                <div className={s.item__image}>
                    <img src={item.photo} alt={item.name} />
                    {/* абсолютні посилання для фото */}
                </div>
                <div className={s.item__title}>
                    <NavLink className={s.item__title__in} to={{
                        pathname: '/admin/quests/quest/',
                        search: '?quest=' + item.id,
                    }}>
                        <input className={s.item__input} type="text" value={item.name} /*{showModeretaion ? disabled : null}*/ onChange={(e)=>{
                            setItemFull({...item, name: e.target.value})
                        }}/>
                    </NavLink>
                    {/* проставити посилання в залежності від роуту*/}
                </div>
            </div>
            {
                showModeretaion &&(
                    <div className={s.item__moderation}>
                        <div className={`${s.status__btn} ${active && (s.status__true)}`} onClick={()=>{
                            setActive(!active)
                        }}></div>
                        <div className={s.moderation__btn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                <path d="M1 5H19M17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M8 10V16M12 10V16" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                )
            }
            {/* посилання мають обиратися через діспатч в залежності від контенту */}
        </div>
    )
}
export default QuestRow