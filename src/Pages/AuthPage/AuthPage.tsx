import React, {useState} from 'react';
import './AuthPage.scss'
import {AUTH_ROUTE} from "../../utils/consts";
import {useLocation, useNavigate} from "react-router-dom";
import SignInComps from "./components/SignInComps";
import SignUpComps from "./components/SignUpComps";
import {useAppDispatch, useAppSelector} from "../../Store/hooks/hooks";
import {fetchLogin, fetchRegister} from "../../Store/reducers/User/UserActionCreators";

interface State {
    name: string;
    phone: string;
    login: string;
    password: string;
}

const AuthPage = () => {
    const {isAuth} = useAppSelector(state => state.userReducer)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
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

    const Login = () => {
        dispatch(fetchLogin(values.login, values.password)).then(() => {
            isAuth && navigate('/chats')
        })
    }

    const Register = () => {
        values.phone = values.phone.replace(/[()_\s]/g,"");
        dispatch(fetchRegister(values.login, values.name, values.password, values.phone)).then(() => {
            dispatch(fetchLogin(values.login, values.password)).then(() => {
                navigate('/chats')
            })
        })
    }

    const handleAuth = (event: React.MouseEvent<HTMLButtonElement>) => {
        hasAccount ? Login() : Register()
    }

    return hasAccount ? (
            <SignInComps
                values={values}
                handleChangeLogin={handleChange('login')}
                handleChangePassword={handleChange('password')}
                handleAuth={handleAuth}/>
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