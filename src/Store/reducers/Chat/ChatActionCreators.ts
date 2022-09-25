import {$host} from "../AxiosConfig";
import {AppDispatch} from "../../store";
import {userSlice} from "../User/UserSlice";


export const createChat = (myNickname: string, companionUsername: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching)
        await $host.post('/chat', {
            users: [myNickname, companionUsername]
        }).then(response => {
            dispatch(userSlice.actions.addChat(response.data))
        })
    } catch (error) {
        if (error instanceof Error) {
            dispatch(userSlice.actions.userFetchingError(error.message))
        }
    }
}