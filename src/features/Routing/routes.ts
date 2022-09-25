import {CHAT_ROUTE, ERROR_ROUTE, AUTH_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import AuthPage from "../../Pages/AuthPage/AuthPage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import ChatsPage from "../../Pages/ChatsPage/ChatsPage";

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        element: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        element: AuthPage
    },
    {
        path: ERROR_ROUTE,
        element: ErrorPage
    }
]

export const authRoutes = [
    {
        path: CHAT_ROUTE,
        element: ChatsPage
    },
    {
        path: ERROR_ROUTE,
        element: ErrorPage
    }
]