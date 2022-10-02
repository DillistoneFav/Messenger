import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChat} from "../../../interfaces/IChat";
import {IMessage} from "../../../interfaces/IMessage";

interface ChatState {
    selectedChat: IChat | null;
    chats: IChat[];
    otherChatUsers: string[];
    websocket: WebSocket | null;
}

const initialState: ChatState = {
    chats: [],
    selectedChat: null,
    otherChatUsers: [],
    websocket: null
}

export const ChatsSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        getChats(state, action: PayloadAction<IChat[]>) {
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
        setWebSocket(state, action: PayloadAction<WebSocket>) {
            state.websocket = action.payload
        },
        addChatMessage(state, action: PayloadAction<IMessage[]>) {
            state.selectedChat!.messages = [...state.selectedChat!.messages, ...action.payload]
        }
    }
})

export default ChatsSlice.reducer;