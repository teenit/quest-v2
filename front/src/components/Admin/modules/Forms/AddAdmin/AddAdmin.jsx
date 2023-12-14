import React, { useState } from "react";
import s from "./AddAdmin.module.css"
import { TextField } from "@mui/material";

const AddAdmin = ({setActive}) =>{

    const [name, setName] = useState("")
    const validateName = function () {
        return name.length >= 2;
    }

    const [resultRequested, setResultRequested] = useState(false);

    const sxStyles = {
        width: '100%',
        height: '56px',
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
            height: '56px',
            padding: '0px 15px',    
            color: '#000!important',
        },
    }

    const sendData = function (event) {
        event.preventDefault()
        setResultRequested(true)
        if(!validateName()){
            return console.log('EMPTY_DATA');
        }else{
            return console.log( {
                    name: name
                })
        }
    }

    return(
        <div className={s.wrap}>
            <form action="" className={s.form} onSubmit={sendData}>
                <div className={s.close__wrap}>
                    <div className={s.close__image}>
                        <svg className={s.chrest} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17" color="#000000" height="16" viewBox="0 0 50 50" onClick={()=>{
                            setActive()
                        }}><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path></svg>    
                    </div>
                </div>
                <div className={s.content__wrap}>
                    <div className={s.btn__wrap}>
                        <div className={s.btn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 25" fill="none">
                                <path d="M23.4375 10.9375H14.0625V1.5625C14.0625 1.1481 13.8979 0.750672 13.6049 0.457646C13.3118 0.16462 12.9144 0 12.5 0C12.0856 0 11.6882 0.16462 11.3951 0.457646C11.1021 0.750672 10.9375 1.1481 10.9375 1.5625V10.9375H1.5625C1.1481 10.9375 0.750672 11.1021 0.457646 11.3951C0.16462 11.6882 0 12.0856 0 12.5C0 12.9144 0.16462 13.3118 0.457646 13.6049C0.750672 13.8979 1.1481 14.0625 1.5625 14.0625H10.9375V23.4375C10.9375 23.8519 11.1021 24.2493 11.3951 24.5424C11.6882 24.8354 12.0856 25 12.5 25C12.9144 25 13.3118 24.8354 13.6049 24.5424C13.8979 24.2493 14.0625 23.8519 14.0625 23.4375V14.0625H23.4375C23.8519 14.0625 24.2493 13.8979 24.5424 13.6049C24.8354 13.3118 25 12.9144 25 12.5C25 12.0856 24.8354 11.6882 24.5424 11.3951C24.2493 11.1021 23.8519 10.9375 23.4375 10.9375Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className={s.title__wrap}>
                        <p>Додати нового адміна</p>
                    </div>
                    <div className={s.input__wrap}>
                        <p className={s.input__title}>Ім'я:</p>
                        <div className={s.input__in}>
                            <TextField 
                                error={!validateName() && resultRequested}
                                helperText={(!validateName() && resultRequested)&&("Ім'я має бути довше 2 символів")}
                                fullWidth={true}
                                size="large"
                                type="text"
                                required
                                variant="outlined"
                                onChange={(e)=>{setName(e.target.value)}}
                                value={name}
                                sx={{...sxStyles}}
                                inputProps={{...inputPropsStyles}}
                                InputProps={{...InputPropsStyles}}  
                            />
                            <button className={s.input__btn} onClick={sendData}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="56" viewBox="0 0 60 56" fill="none">
                                    <path d="M44.2812 25.6987L20.9683 14.4065C19.2855 13.5914 17.5012 15.3242 18.2708 17.0283L22.6282 26.6768C22.8646 27.2002 22.8646 27.7998 22.6282 28.3232L18.2708 37.9717C17.5012 39.6758 19.2826 41.41 20.9654 40.5949L44.2839 29.3C45.7881 28.5714 45.7854 26.4273 44.2812 25.6987Z" stroke="white" strokeWidth="3"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddAdmin