import {$host} from "../AxiosConfig";
import {AppDispatch} from "../../store";
import {userSlice} from "../User/UserSlice";
import {IChat} from "../../../interfaces/IChat";
import {ChatsSlice} from "./ChatSlice";

export const getChats = () => async (dispatch: AppDispatch) =>{
    try {
        await $host.get('/chats').then(response => {
            dispatch(ChatsSlice.actions.setChats(response.data))
        })
    } catch (error) {
        if (error instanceof Error) {
            dispatch(userSlice.actions.userFetchingError(error.message))
        }
    }
}

export const createChat = (myNickname: string, companionUsername: string) => async (dispatch: AppDispatch) => {
    try {
        await $host.post('/chat', {
            users: [myNickname, companionUsername]
        }).then(response => {
            dispatch(ChatsSlice.actions.createChat(response.data))
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