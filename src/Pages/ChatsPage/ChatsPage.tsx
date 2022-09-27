import React, {FC, useEffect} from 'react';
import './ChatsPage.scss'
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Store/hooks/hooks";
import LeftSection from "./components/LeftSection/LeftSection";
import RightSection from "./components/RightSection/MessagesLayout/RightSection";
import {setSelectedChat} from "../../Store/reducers/Chat/ChatActionCreators";

const ChatsPage: FC = () => {
    const navigate = useNavigate()
    const {isAuth} = useAppSelector(state => state.userReducer)
    const {user} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isAuth && localStorage.getItem("openedChatId")) {
            const openedChat = Number(localStorage.getItem("openedChatId"))
            dispatch(setSelectedChat(user.nickname, openedChat!, user.chats))
            navigate(`/chats/${openedChat}`)
        } else if (isAuth) {
            navigate('/chats')
        } else {
            navigate('/auth')
        }
    }, [])

    return (
        <div className={"whole-page"}>
            <LeftSection/>
            <RightSection/>
        </div>
    );
};

export default ChatsPage;