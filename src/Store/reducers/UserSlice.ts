import {IUser} from "../../interfaces/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface UserState {
    user: IUser;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: {} as IUser,
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetching(state) {
            state.isLoading = true;
        },
        userFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.error = ''
            state.user = action.payload
        },
        userFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default userSlice.reducer;