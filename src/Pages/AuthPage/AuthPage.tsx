import React, {useState} from 'react';
import './AuthPage.scss'
import SendIcon from "@mui/icons-material/Send";
import LoginInput from "./Components/LoginInput";
import PasswordInput from "./Components/PasswordInput";
import {Button} from "@mui/material";

interface State {
    login: string;
    password: string;
}

const AuthPage = () => {
    const [values, setValues] = useState<State>({
        login: '',
        password: '',
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className={"auth-container"}>
            <SendIcon className={"tg-icon"}/>
            <h4 className={"sign-in-message"}>Sign in to MyMessenger</h4>
            <div className={"enter-message"}>
                Please enter your Login and Password to continue!
            </div>
            <div className={"inputs-wrapper"}>
                <LoginInput login={values.login} handleChange={handleChange('login')}/>
                <PasswordInput password={values.password} handleChange={handleChange('password')}/>
                <Button variant="contained">Log in</Button>
            </div>
        </div>
    );
};

export default AuthPage;