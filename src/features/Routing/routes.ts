import {CHATS_ROUTE, AUTH_ROUTE, REGISTRATION_ROUTE, CHATIDPAGE_ROUTE} from "../../utils/consts";
import AuthPage from "../../Pages/AuthPage/AuthPage";
import ChatsPage from "../../Pages/ChatsPage/ChatsPage";
import React from "react";

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export const publicRoutes: IRoute[] = [
    {
        path: AUTH_ROUTE,
        element: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        element: AuthPage
    },
]

export const authRoutes: IRoute[] = [
    {
        path: CHATS_ROUTE,
        element: ChatsPage
    },
    {
        path: CHATIDPAGE_ROUTE,
        element: ChatsPage
    },
]