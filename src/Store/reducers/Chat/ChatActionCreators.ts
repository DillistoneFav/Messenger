import {$host} from "../AxiosConfig";
import {AppDispatch} from "../../store";
import {userSlice} from "../User/UserSlice";
import {IChat} from "../../../interfaces/IChat";
import {ChatsSlice} from "./ChatSlice";


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

export const setSelectedChat = (myUsername: string, id: number, chats: IChat[]) => (dispatch: AppDispatch) => {
    let selectedChat = chats.find(item => {
        return item.id === id;
    })
    dispatch(ChatsSlice.actions.setSelectedChat(selectedChat!))

    let otherUsers = selectedChat!.users.filter(item => {
        return item !== myUsername
    })
    dispatch(ChatsSlice.actions.setOtherUsers(otherUsers))
}