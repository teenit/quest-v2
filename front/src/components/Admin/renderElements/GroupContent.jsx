import React from "react";
import s from "./GroupContent.module.css"
import RenderContent from "./renderContent/RenderContent";
import RenderMenuItems from "./renderMenuItems/RenderMenuItems";

const GroupContent = ({menuItem, content}) =>{
    return(
        <div className={s.wrap}>
            <div className={s.in}>
                <RenderMenuItems menuItem={menuItem}/>
                <RenderContent content={content}/>
            </div>
        </div>
    )
}
export default GroupContent