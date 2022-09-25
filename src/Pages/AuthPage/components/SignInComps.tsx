import React, {FC} from 'react';
import SendIcon from "@mui/icons-material/Send";
import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import {REGISTRATION_ROUTE} from "../../../utils/consts";
import {useAppSelector} from "../../../Store/hooks/hooks";

interface SignInCompsProps {
    values: {
        login: string,
        password: string,
    };
    handleChangeLogin(event: React.ChangeEvent<HTMLInputElement>): void,
    handleChangePassword(event: React.ChangeEvent<HTMLInputElement>): void,
    handleAuth(event: React.MouseEvent<HTMLButtonElement>): void,
}

const SignInComps: FC<SignInCompsProps> = ({values, handleChangeLogin, handleChangePassword, handleAuth}) => {
    const {error} = useAppSelector(state => state.userReducer)
    return (
        <div className={"auth-container"}>
            <SendIcon className={"tg-icon"}/>
            <h4 className={"sign-in-message"}>Sign in to MyMessenger</h4>
            <div className={"enter-message"}>
                Please enter your Login and Password to continue!
            </div>
            <div className={"inputs-wrapper"}>
                <LoginInput label="login" login={values.login} handleChange={handleChangeLogin}/>
                <PasswordInput password={values.password} handleChange={handleChangePassword}/>
                {error && <div className={"auth-error"}>{error}</div>}
                <Button className={"auth-button"} variant="contained" onClick={handleAuth}>Sign in</Button>
                <div className={"account-existence"}>Have not account yet? <NavLink className={"sign-route-link"} to={REGISTRATION_ROUTE}>Sign up</NavLink></div>
            </div>
        </div>
    );
};

export default SignInComps;