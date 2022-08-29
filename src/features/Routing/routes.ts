import {CHAT_ROUTE, ERROR_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import AuthPage from "../../Pages/AuthPage/AuthPage";
import WholePage from "../../UI kit/WholePage/WholePage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
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
        element: WholePage
    },
    {
        path: ERROR_ROUTE,
        element: ErrorPage
    }
]