import {AppDispatch} from "../store";
import {IUser} from "../../interfaces/IUser";
import {userSlice} from "./UserSlice";
import {$host} from "./AxiosConfig";


export const fetchLogin = (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching)
        const response = await $host.post<IUser>('/login', {
            username: username,
            password: password
        })
        console.log(response.data)
        dispatch(userSlice.actions.userFetchingSuccess(response.data))
    } catch(error) {
        if (error instanceof Error) {
            dispatch(userSlice.actions.userFetchingError(error.message))
        }
    }
}

export const fetchRegister = (login: string, name: string, password: string, phone: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching)
        const response = await $host.post<IUser>(`/register`, {
            login: login,
            name: name,
            password: password,
            phone: phone,
        })
        dispatch(userSlice.actions.userFetchingSuccess(response.data))
    } catch(error) {
        if (error instanceof Error) {
            dispatch(userSlice.actions.userFetchingError(error.message))
        }
    }
}