import {$host} from "../AxiosConfig";
import {useAppSelector} from "../../hooks/hooks";
import {AppDispatch} from "../../store";
import {chatSlice} from "./ChatSlice";

export const createChat = (companionUsername: string) => async (dispatch: AppDispatch) => {
    const {user} = useAppSelector(state => state.userReducer)
    try {
        dispatch(chatSlice.actions.chatFetching)
        await $host.post('/chat', {
            users: [user.nickname, companionUsername]
        }).then(response => {
            user.chats.push(response.data)
            dispatch(chatSlice.actions.chatFetchingSuccess)
        })
    } catch (error) {
        if (error instanceof Error) {
            dispatch(chatSlice.actions.chatFetchingError(error.message))
        }
    }
}