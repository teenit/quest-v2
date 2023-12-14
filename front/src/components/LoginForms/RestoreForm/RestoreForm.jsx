import { React, useState} from "react";
import s from "./RestoreForm.module.css"
import { TextField } from "@mui/material";

const RestoreForm = () =>{
    // const [state, setState] = useState({
    //     email:{
    //         text:'',
    //         disabled:false,
    //         show:true
    //     },
    //     pass:{
            
    //     },
    //     passTo:{
    //         text:'',
    //         disabled: false,
    //         show:false
    //     },
    //     code:{
    //         text:'',
    //         disabled: false,
    //         show:false
    //     }
    // })

    const [email, setEmail] = useState({
        text:'',
        disabled:false,
        show:true
    })

    const [pass, setPass] = useState({
        text:'',
        disabled:false,
        show:false
    })
    
    const [passTo, setPassTo] = useState({
        text:'',
        disabled:false,
        show:false
    })
    
    const [code, setCode] = useState({
        text:'',
        disabled:false,
        show:false
    })

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

    const [status,setStatus] = useState({
        text:'email',
        btn:'Відновити доступ'
    })

    const getCode = ()=>{
        setStatus({
            text:'code',
            btn:'Введіть код'
        })
        // setState({...state,
        //     code:{...state.code,show:true},
        //     email:{...state.email,disabled:true},
        // }) 
        setEmail({...email, disabled: true})
        setCode({...code, show: true})
    }

    const insertCode = ()=>{
        setStatus({
            text:'pass',
            btn:'Відновити пароль'
        })
        // setState({...state,
        //     code:{...state.code,show:true,disabled:true},
        //     email:{...state.email,disabled:true},
        //     pass:{...state.pass,show:true},
        //     passTo:{...state.passTo,show:true},
        // }) 
        setEmail({...email, disabled: true})
        setCode({...code, show: true, disabled: true})
        setPass({...pass,show: true})
        setPassTo({...passTo, show: true})
    }

    const sendData = (event)=>{
        console.log(
            {
                email: email.text,
                code: code.text,
                pass: pass.text,
                passTo: passTo.text
            }
        )
    }

    function sendForm(event){
        event.preventDefault()
        switch (status.text){
            case 'email':
                getCode()
                break;
            case 'code':
                insertCode();
                break;
            case 'pass':
                sendData();
                break;
        }
    }

    return(
        <div className={s.wrap}>
            <form onSubmit={sendForm} className={s.form__wrap}>
                <h1 className={s.form__title}>Відновити пароль</h1>
                <div className={s.form__in}>
                    <div className={s.form__row}>
                        <TextField 
                            fullWidth={true}
                            placeholder="Email"
                            size="small"
                            type="email"
                            required
                            variant="outlined"
                            value={email.text}
                            onChange={(e)=>setEmail({...email, text: e.target.value})}
                            sx={{...sxStyles}}
                            inputProps={{...inputPropsStyles}}
                            InputProps={{...InputPropsStyles}} 
                        />
                    </div>
                    
                        {
                            code.show &&( 
                                <div className={s.form__row}>
                                    <TextField 
                                        fullWidth={true}
                                        placeholder="Secret code"
                                        size="small"
                                        type="text"
                                        required
                                        variant="outlined"
                                        onChange={(e)=>setCode({...code, text: e.target.value})} 
                                        value={code.text} 
                                        sx={{...sxStyles}}
                                        inputProps={{...inputPropsStyles}}
                                        InputProps={{...InputPropsStyles}}>
                                </TextField>
                                </div>
                            )
                        }
                    
                        {
                            pass.show &&( 
                                <>
                                    <div className={s.form__row}>
                                        <TextField
                                            fullWidth={true}
                                            placeholder="New Password"
                                            size="small"
                                            type="text"
                                            required
                                            variant="outlined" 
                                            onChange={(e)=>setPass({...pass, text: e.target.value})} 
                                            value={pass.text} 
                                            sx={{...sxStyles}}
                                            inputProps={{...inputPropsStyles}}
                                            InputProps={{...InputPropsStyles}}>        
                                        </TextField>
                                    </div>
                                    <div className={s.form__row}>
                                        <TextField 
                                            fullWidth={true}
                                            placeholder="Repeat New Password"
                                            helperText={(pass.text !== passTo.text)&&("Паролі не співпадають")}
                                            size="small"
                                            type="text"
                                            required
                                            variant="outlined" 
                                            onChange={(e)=>setPassTo({...passTo, text: e.target.value})} 
                                            value={passTo.text}  
                                            sx={{...sxStyles}}
                                            inputProps={{...inputPropsStyles}}
                                            InputProps={{...InputPropsStyles}}>
                                        </TextField>
                                        {  
                                        }
                                    </div>
                                </>
                            )
                        }
                    
                </div>
                <div className={s.btn__wrap}>
                    <button className={s.btn} onClick={sendForm}>{status.btn}</button>
                </div>
            </form>
        </div>
    )
}
export default RestoreForm