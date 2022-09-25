import {userSlice} from "../Store/reducers/User/UserSlice";


export const checkAuth = (dispatch: any) => {
    if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user')!)
        dispatch(userSlice.actions.userFetchingSuccess(user))
    }
}