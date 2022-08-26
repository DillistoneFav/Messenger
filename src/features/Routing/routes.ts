import {CHAT_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import AuthPage from "../../Pages/AuthPage/AuthPage";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: AuthPage
    }
]

export const authRoutes = [
    {
        path: CHAT_ROUTE,
        element: AuthPage
    }
]