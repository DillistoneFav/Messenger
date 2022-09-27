import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChat, ILastMessage} from "../../../interfaces/IChat";
import {IMessage} from "../../../interfaces/IMessage";


interface ChatState {
    chat: IChat;
    otherChatUsers: string[];
    messages: IMessage[];
}

const initialState: ChatState = {
    chat: {
        id: -1,
        lastMessage: {} as ILastMessage,
        name: "",
        users: [],
        messages: []
    },
    otherChatUsers: [],
    messages: [],
}

export const ChatsSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setSelectedChat(state, action: PayloadAction<IChat>) {
            state.chat = action.payload
        },
        setOtherUsers(state, action: PayloadAction<string[]>) {
            state.otherChatUsers = action.payload
        }
    }
})

export default ChatsSlice.reducer;