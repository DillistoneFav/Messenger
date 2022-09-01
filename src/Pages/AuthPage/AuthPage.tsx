import React, {useState} from 'react';
import './AuthPage.scss'
import {AUTH_ROUTE} from "../../utils/consts";
import {useLocation} from "react-router-dom";
import SignInComps from "./Components/SignInComps";
import SignUpComps from "./Components/SignUpComps";

interface State {
    name: string;
    phone: string;
    login: string;
    password: string;
}

const AuthPage = () => {
    const location = useLocation();
    const hasAccount = location.pathname === AUTH_ROUTE;
    const [values, setValues] = useState<State>({
        name: '',
        phone: '+7',
        login: '',
        password: '',
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
    };

    const handleAuth = () => {
        values.phone = values.phone.replace(/[()_\s]/g,"");
        console.log(values)
    }

    return hasAccount ? (
            <SignInComps values={values} handleChangeLogin={handleChange('login')} handleChangePassword={handleChange('password')}/>
        )
        :
        (
            <SignUpComps
                values={values}
                handleChangeName={handleChange('name')}
                handleChangePhone={handleChange('phone')}
                handleChangeLogin={handleChange('login')}
                handleChangePassword={handleChange('password')}
                handleAuth={handleAuth}
            />
        )
};

export default AuthPage;