import React, { useState } from "react";
import s from "./RegisterForm.module.css"
import { TextField } from "@mui/material";

const RegisterForm = () =>{

    const [name, setName] = useState("")
    const validateName = function () {
        return name.length >= 2;
    }

    const [email, setEmail] = useState("")
    const validateEmail = function () {
        return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    }

    const [phone, setPhone] = useState("")
    const validatePhone = function () {
        return phone.replace(/\D/g, '').length === 10 || phone.replace(/\D/g, '').length === 12;
    }

    const [date, setDate] = useState("")

    const [userName, setUserName] = useState("")
    const validateUserName = function () {
        return userName.length >= 2;
    }

    const [passwordFirst, setPasswordFirst] = useState("")
    const validateFirstPass = function () {
        return passwordFirst.length == 8;
    }

    const [passwordSecond, setPasswordSecond] = useState("")
    const validateSecondPass = function () {
        return passwordSecond.length == 8;
    }

    const [resultRequested, setResultRequested] = useState(false);

    const sendData = function (event) {
        event.preventDefault()
        setResultRequested(true)
        if(!validateName() || !validateEmail() || !validatePhone() || !validateUserName() || !validateFirstPass()){
            return console.log('EMPTY_DATA');
        }else{
            return console.log( {
                    name: name,
                    email: email,
                    phone: phone,
                    date: date,
                    username: userName,
                    passwordFirstTry: passwordFirst,
                    passwordSecondTry: passwordSecond
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
            width: '100%!important',
            padding: '10px 15px',    
            color: '#000!important',
        },
    }

    return(
        <div className={s.wrap}>
            <form onSubmit={sendData} className={s.form__wrap}>
                <h1 className={s.form__title}>Реєстрація</h1>
                <div className={s.form__in}>
                    <div className={s.form__row}>
                        <TextField 
                            error={!validateName() && resultRequested}
                            helperText={(!validateName() && resultRequested)&&("Ім'я має бути довше 2 символів")}
                            fullWidth={true}
                            placeholder="ПІБ"
                            size="small"
                            type="text"
                            required
                            variant="outlined"
                            onChange={(e)=>{setName(e.target.value)}}
                            value={name}
                            sx={{...sxStyles}}
                            inputProps={{...inputPropsStyles}}
                            InputProps={{...InputPropsStyles}}    
                        />
                    </div>
                    <div className={s.form__row}>
                        <TextField 
                            error={!validateEmail() && resultRequested}
                            helperText={(!validateEmail() && resultRequested)&&("Некоректний email")}
                            className={s.textfield}
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
                            error={!validatePhone() && resultRequested}
                            helperText={(!validatePhone() && resultRequested)&&("Некоректний телефон")}
                            className={s.textfield}
                            fullWidth={true}
                            placeholder="Номер телефону"
                            size="small"
                            type="phone"
                            required
                            variant="outlined"
                            value={phone}
                            onChange={(e)=>{setPhone(e.target.value)}}
                            sx={{...sxStyles}}
                            inputProps={{...inputPropsStyles}}
                            InputProps={{...InputPropsStyles}} 
                        />
                    </div>
                    <div className={s.form__row}>
                        <TextField 
                            className={s.textfield}
                            fullWidth={true}
                            size="small"
                            type="date"
                            required
                            variant="outlined"
                            value={date}
                            onChange={(e)=>{setDate(e.target.value)}}
                            sx={{...sxStyles}}
                            inputProps={{...inputPropsStyles}}
                            InputProps={{...InputPropsStyles}} 
                        /> 
                    </div>
                    <div className={s.form__row}>
                        <TextField 
                            error={!validateUserName() && resultRequested}
                            helperText={(!validateUserName() && resultRequested)&&("Ім'я користувачів має бути довше 2 символів")}
                            className={s.textfield}
                            fullWidth={true}
                            placeholder="Ім'я користувача"
                            size="small"
                            type="text"
                            required
                            variant="outlined"
                            value={userName}
                            onChange={(e)=>{setUserName(e.target.value)}}
                            sx={{...sxStyles}}
                            inputProps={{...inputPropsStyles}}
                            InputProps={{...InputPropsStyles}} 
                        />
                    </div>
                    <div className={s.form__row}>
                        <TextField 
                            error={!validateFirstPass() && resultRequested}
                            helperText={(!validateFirstPass() && resultRequested)&&("Некоректний пароль")}
                            className={s.textfield}
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
                    <div className={s.form__row}>
                        <TextField 
                            error={!validateSecondPass() && resultRequested}
                            helperText={(passwordFirst !== passwordSecond)&&("Некоректний пароль")}
                            className={s.textfield}
                            fullWidth={true}
                            placeholder="Новий пароль"
                            size="small"
                            type="text"
                            required
                            variant="outlined"
                            value={passwordSecond}
                            onChange={(e)=>{setPasswordSecond(e.target.value)}}
                            sx={{...sxStyles}}
                            inputProps={{...inputPropsStyles}}
                            InputProps={{...InputPropsStyles}} 
                        />
                    </div>
                </div>
                <div className={s.btn__wrap}>
                    <button className={s.btn} onClick={sendData}>Зареєструватися</button>
                </div>
            </form>
        </div>
    )
}
export default RegisterForm