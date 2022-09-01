import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from "./routes";

const AppRouter = () => {
    const user = true;
    return  user ? (
        <Routes>
            {authRoutes.map(item => {
                return <Route path={item.path} element={<item.element/>} key={item.path}/>
            })}
            {publicRoutes.map(item => {
                return <Route path={item.path} element={<item.element/>} key={item.path}/>
            })}
            <Route path="*" element={<Navigate to="/error" replace />}/>
        </Routes>
    )
    :
    (
        <Routes>
            {publicRoutes.map(item => {
                return <Route path={item.path} element={<item.element/>} key={item.path}/>
            })}
            <Route path="*" element={<Navigate to="/error" replace />}/>
        </Routes>
    )
};

export default AppRouter;