import { React, useState} from "react";
import s from "./LoginForm.module.css"
import { TextField } from "@mui/material";

const LogineForm = () =>{

    const [email, setEmail] = useState("")
    const validateEmail = function () {
        return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    }

    const [passwordFirst, setPasswordFirst] = useState("")
    const validateFirstPass = function () {
        return passwordFirst.length == 8;
    }
    
    const [resultRequested, setResultRequested] = useState(false);

    const sendData = function (event) {
        event.preventDefault()
        setResultRequested(true)
        if(!validateEmail() || !validateFirstPass()){
            return console.log('EMPTY_DATA');
        }else{
            return console.log( {
                    email: email,
                    passwordFirstTry: passwordFirst,
                })
        }
    }

    const sxStyles = {
        width: '280px!important',
        background: '#D9D9D9',
        borderRadius: '10px',
        color: '#000!important',
        fontSize: '14px'
    }
    const InputPropsStyles = {
        sx: {
            '& fieldset':{
                border: 'none!important',
                borderRadius: '10px',
                transition: 'all .3s',
                fontSize: '14px'
            },
            '&:hover fieldset': {
                border: 'none!important',
                borderRadius: '10px',
                fontSize: '14px'
            },
            '&:focus-within fieldset, &:focus-visible fieldset': {
                border: 'none!important',
                borderRadius: '10px',
                fontSize: '14px'
            },
            input: {
                ':-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 1000px #D9D9D9 inset',
                    borderRadius: '10px',
                },
                '&::placeholder': {
                    color: 'black!important'
                }
            }
        },
    }
    const inputPropsStyles = {
        sx: {
            padding: '10px 15px',    
            color: '#000!important',
        },
    }

    return(
        <div className={s.wrap}>
            <form onSubmit={sendData} className={s.form__wrap}>
                <h1 className={s.form__title}>Авторизація</h1>
                <div className={s.form__in}>
                    <div className={s.form__row}>
                        <TextField 
                            error={!validateEmail() && resultRequested}
                            helperText={(!validateEmail() && resultRequested)&&("Некоректний email")}
                            fullWidth={true}
                            placeholder="Email"
                            size="small"
                            type="email"
                            required
                            variant="outlined"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            sx={{...sxStyles}}
                            inputProps={{...inputPropsStyles}}
                            InputProps={{...InputPropsStyles}} 
                        />
                    </div>
                    <div className={s.form__row}>
                        <TextField 
                            error={!validateFirstPass() && resultRequested}
                            helperText={(!validateFirstPass() && resultRequested)&&("Некоректний пароль")}
                            fullWidth={true}
                            placeholder="Пароль"
                            size="small"
                            type="text"
                            required
                            variant="outlined"
                            value={passwordFirst}
                            onChange={(e)=>{setPasswordFirst(e.target.value)}}
                            sx={{...sxStyles}}
                            inputProps={{...inputPropsStyles}}
                            InputProps={{...InputPropsStyles}} 
                        />
                    </div>
                </div>
                <div className={s.btn__wrap}>
                    <button className={s.btn} onClick={sendData}>Авторизуватися</button>
                </div>
            </form>
        </div>
    )
}

export default LogineForm