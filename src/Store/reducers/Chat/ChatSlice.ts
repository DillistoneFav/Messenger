import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChat} from "../../../interfaces/IChat";
import {IMessage} from "../../../interfaces/IMessage";


interface ChatState {
    chat: IChat;
    otherChatUsers: string[];
    messages: IMessage[];
}

const initialState: ChatState = {
    chat: {} as IChat,
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
        },
        addChatMessage(state, action: PayloadAction<IMessage[]>) {
            action.payload.forEach(item => {
                state.messages = [...state.messages, item]
            })
        },
    }
})

export default ChatsSlice.reducer;