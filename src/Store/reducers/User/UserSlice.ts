import {IUser} from "../../../interfaces/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChat} from "../../../interfaces/IChat";


interface UserState {
    user: IUser;
    isLoading: boolean;
    error: string;
    isAuth: boolean;
}

const initialState: UserState = {
    user: {} as IUser,
    isLoading: false,
    error: '',
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetching(state) {
            state.isLoading = true;
        },
        userFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.isAuth = true
            state.isLoading = false;
            state.error = ''
            state.user = action.payload
        },
        userFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        resetUser(state) {
            state.user = {} as IUser;
            state.isAuth = false;
        },

        addChat(state, action: PayloadAction<IChat>) {
            state.user.chats = [...state.user.chats, action.payload]
            state.error = ''
            state.isLoading = false
        }
    }
})

export default userSlice.reducer;