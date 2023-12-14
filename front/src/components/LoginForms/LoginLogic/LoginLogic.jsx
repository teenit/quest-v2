import React, { useState } from "react";
import s from "./LoginLogic.module.css"
import RegisterForm from "../../RegisterForm/RegisterForm";
import LogineForm from "../LoginForm/LoginForm";
import RestoreForm from "../RestoreForm/RestoreForm";

const LoginLogic = () =>{
    const [state, setState] = useState({
        register: true,
        login: false,
        restore: false
    })

    const logIn = ()=>setState({
        login: true,
        register:false,
        restore:false
    })
    const regIn = ()=>setState({
        login: false,
        register:true,
        restore:false
    })
    const resIn = ()=>setState({
        login: false,
        register:false,
        restore:true
    })

    return(
        <div className={s.wrap}>
            <div className={s.wrap__in}>
                <div className={s.in}>
                    {state.register &&( 
                        <div className={s.in}>
                            <RegisterForm />
                        </div> 
                    )}
                    {state.login &&( 
                        <div className={s.in}>
                            <LogineForm />
                        </div> 
                    )}
                    {state.restore &&( 
                        <div className={s.in}>
                            <RestoreForm />
                        </div> 
                    )}
                </div>
                <div className={s.in__ways}>
                    {   
                        state.login &&(
                            <div className={s.in__ways__in}>
                                <p className={s.way__expain}>Забули пароль - <span className={s.way__pass} onClick={resIn}>відновити</span></p>
                                <p className={s.way__expain}>Ще не маєте акаунту - <span className={s.too} onClick={regIn}>зареєструватися</span></p>
                            </div> 
                    )}
                    {
                        state.register &&(
                            <div className={s.in__ways__in}>
                                <p className={s.way__expain}>Забули пароль - <span className={s.too} onClick={resIn}>відновити</span></p>
                                <p className={s.way__expain}>Увійти в акаунт - <span className={s.too} onClick={logIn}>авторизуватися</span></p> 
                            </div> 
                    )}
                    {
                        state.restore &&(
                            <div className={s.in__ways__in}>
                                <p className={s.way__expain}>Увійти в акаунт - <span className={s.too} onClick={logIn}>авторизуватися</span></p> 
                                <p className={s.way__expain}>Ще не маєте акаунту - <span className={s.too} onClick={regIn}>зареєструватися</span></p>
                            </div> 
                    )}
                </div>
            </div>
        </div>
    )
}
export default LoginLogic