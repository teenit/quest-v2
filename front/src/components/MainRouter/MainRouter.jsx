import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginLogic from "../LoginForms/LoginLogic/LoginLogic";
import RegisterForm from "../RegisterForm/RegisterForm";
import MainAdmin from "../Admin/MainAdmin/MainAdmin";
import s from "./MainRouter.module.css"
import Users from "../Admin/Users/Users";
import Rooms from "../Admin/Rooms/Rooms";
import Quests from "../Admin/Quests/Quests";

const MainRouter = () =>{
    return(
        <div className={s.wrap}>
            <Routes>
                <Route path="/*" element="front"/>
                <Route path="/login" element={<LoginLogic />}/>
                <Route path="/admin/*" element={<MainAdmin />}/>
                <Route path="/register" element={<RegisterForm />}/>
                <Route path="/admin/users" element={<Users />}/>
                <Route path="/admin/rooms" element={<Rooms />}/>
                <Route path="/admin/quests" element={<Quests />}/>
            </Routes>
        </div>
    )
}
export default MainRouter