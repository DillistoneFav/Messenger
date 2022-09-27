import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from "./routes";
import {useAppSelector} from "../../Store/hooks/hooks";
import {AUTH_ROUTE, CHATS_ROUTE} from "../../utils/consts";

const AppRouter = () => {
    const {isAuth} = useAppSelector(state => state.userReducer)
    return (
        isAuth ?
        <Routes>
            {authRoutes.map(item => {
                return <Route path={item.path} element={<item.element/>} key={item.path}/>
            })}
            <Route path="*" element={<Navigate to={CHATS_ROUTE} replace />}/>
        </Routes>
        :
        <Routes>
            {publicRoutes.map(item => {
                return <Route path={item.path} element={<item.element/>} key={item.path}/>
            })}
            <Route path="*" element={<Navigate to={AUTH_ROUTE} replace />}/>
        </Routes>
    )
};

export default AppRouter;