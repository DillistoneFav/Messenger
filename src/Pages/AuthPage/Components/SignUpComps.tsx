import React, {FC} from 'react';
import SendIcon from "@mui/icons-material/Send";
import {Button, TextField} from "@mui/material";
import InputMask from "react-input-mask";
import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput";
import {NavLink} from "react-router-dom";
import {AUTH_ROUTE} from "../../../utils/consts";

interface SignUpCompsProps {
    values: {
        name: string;
        phone: string;
        login: string;
        password: string;
    };
    handleChangeName(event: React.ChangeEvent<HTMLInputElement>): void,
    handleChangePhone(event: React.ChangeEvent<HTMLInputElement>): void,
    handleChangeLogin(event: React.ChangeEvent<HTMLInputElement>): void,
    handleChangePassword(event: React.ChangeEvent<HTMLInputElement>): void,
    handleAuth(event: React.MouseEvent<HTMLButtonElement>): void,
}

const SignUpComps: FC<SignUpCompsProps> = ({values, handleChangeName, handleChangePhone, handleChangeLogin, handleChangePassword, handleAuth}) => {
    return (
        <div className={"auth-container"}>
            <SendIcon className={"tg-icon"}/>
            <h4 className={"sign-in-message"}>Sign up to MyMessenger</h4>
            <div className={"enter-message"}>
                Please enter your Name, Login, Phone and Password to continue!
            </div>
            <div className={"inputs-wrapper"}>
                <TextField id="outlined-basic" value={values.name} onChange={handleChangeName} label="Name" variant="outlined" sx={{mb: '1rem'}}/>
                <InputMask mask="+7(999) 999 99 99" value={values.phone} onChange={handleChangePhone} className={"phone-input"} placeholder={"Phone number"}/>
                <LoginInput login={values.login} handleChange={handleChangeLogin}/>
                <PasswordInput password={values.password} handleChange={handleChangePassword}/>
                <Button variant="contained" onClick={handleAuth}>Sign up</Button>
                <div className={"account-existence"}>Already have an account? <NavLink className={"sign-route-link"} to={AUTH_ROUTE}>Sign in</NavLink></div>
            </div>
        </div>
    );
};

export default SignUpComps;