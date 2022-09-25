import React, {FC, useEffect} from 'react';
import './ChatsPage.scss'
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../Store/hooks/hooks";
import LeftSection from "./components/LeftSection/LeftSection";
import RightSection from "./components/RightSection/MessagesLayout/RightSection";

const ChatsPage: FC = () => {
    const navigate = useNavigate()
    const {isAuth} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        isAuth ? navigate('/chats') : navigate('/auth')
    }, [])

    return (
        <div className={"whole-page"}>
            <LeftSection/>
            <RightSection/>
        </div>
    );
};

export default ChatsPage;