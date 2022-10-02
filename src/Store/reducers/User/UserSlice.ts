import {IUser} from "../../../interfaces/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        }
    }
})

export default userSlice.reducer;