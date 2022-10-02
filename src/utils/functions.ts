import {userSlice} from "../Store/reducers/User/UserSlice";
import Cookies from 'universal-cookie';
import {AppDispatch} from "../Store/store";

const cookies = new Cookies();

export const checkAuth = (dispatch: AppDispatch) => {
    if (cookies.get("user") && localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user')!)
        dispatch(userSlice.actions.userFetchingSuccess(user))
    }
}