import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChat} from "../../../interfaces/IChat";
import {IMessage} from "../../../interfaces/IMessage";

interface ChatState {
    selectedChat: IChat | null;
    chats: IChat[];
    otherChatUsers: string[];
}

const initialState: ChatState = {
    chats: [],
    selectedChat: null,
    otherChatUsers: [],
}

export const ChatsSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChats(state, action: PayloadAction<IChat[]>) {
            state.chats = action.payload
        },
        createChat(state, action: PayloadAction<IChat>) {
            state.chats = [...state.chats, action.payload]
        },
        setSelectedChat(state, action: PayloadAction<IChat>) {
            state.selectedChat = action.payload
        },
        setOtherUsers(state, action: PayloadAction<string[]>) {
            state.otherChatUsers = action.payload
        },
        addChatMessage(state, action: PayloadAction<IMessage[]>) {
            state.chats[state.selectedChat!.id].messages = [...state.chats[state.selectedChat!.id].messages, ...action.payload]
        },
        resetChats(state) {
            state.chats = [];
            state.selectedChat = null;
            state.otherChatUsers = [];
        }
    }
})

export default ChatsSlice.reducer;