import {IUser} from "../../../interfaces/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ChatState {
    isLoading: boolean;
    error: string;
}

const initialState: ChatState = {
    isLoading: false,
    error: '',
}

export const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        chatFetching(state) {
            state.isLoading = true;
        },
        chatFetchingSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = ''
        },
        chatFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default chatSlice.reducer;