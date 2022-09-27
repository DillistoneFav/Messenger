import {userSlice} from "../Store/reducers/User/UserSlice";
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
import {IUser} from "../interfaces/IUser";

const cookies = new Cookies();


export const checkAuth = (dispatch: any) => {
    if (cookies.get("user") && localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user')!)
        dispatch(userSlice.actions.userFetchingSuccess(user))
    }
}