import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/User/UserSlice'
import chatReducer from './reducers/Chat/ChatSlice'

const rootReducer = combineReducers({
    userReducer,
    chatReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']