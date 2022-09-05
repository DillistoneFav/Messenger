import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../interfaces/IUser";
import {userSlice} from "./UserSlice";


export const fetchLogin = (username: string, password: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching)
        const response = await axios.post<IUser>('http://192.168.1.110:8080/login', {
            username: username,
            password: password
        })
        dispatch(userSlice.actions.userFetchingSuccess(response.data))
    } catch(error) {
        if (error instanceof Error) {
            dispatch(userSlice.actions.userFetchingError(error.message))
        }
    }
}

export const fetchRegister = ()