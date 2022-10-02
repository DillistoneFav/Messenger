import React, {FC, useEffect, useState} from 'react';
import './ChatItem.scss'
import Avatar from '@mui/material/Avatar';
import AvatarMock from "../../../../../../assets/sticke1r.jpg";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../../../Store/hooks/hooks";
import Cookies from 'universal-cookie';
import {setSelectedChat} from "../../../../../../Store/reducers/Chat/ChatActionCreators";
import {ChatsSlice} from "../../../../../../Store/reducers/Chat/ChatSlice";
const cookies = new Cookies();

export enum selected {
    selected = 1,
    notSelected = 0
}

interface ChatItemProps {
    id: number,
    name: string,
    lastMessage: string,
    time: string,
    selected: selected,
}

const ChatItem: FC<ChatItemProps> = ({name, lastMessage, time, id, selected}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [lastMessageHeight, setLastMessageHeight] = useState<number>(0)
    const {user} = useAppSelector(state => state.userReducer)
    const {chats} = useAppSelector(state => state.chatReducer)

    useEffect(() => {
        setLastMessageHeight(document.getElementById('lastMessage')!.offsetHeight)
    }, [])

    const handleOpenChat = () => {
        const websocket = new WebSocket(`ws://192.168.1.44:8080/chat/${id}?token=${cookies.get("user")}`)
        websocket.onopen = (event) => {
            if (websocket.readyState === 1) dispatch(ChatsSlice.actions.setWebSocket(websocket))
        }
        websocket.onmessage = (event) => {
            const message = JSON.parse(event.data)
            console.log(message)
            dispatch(ChatsSlice.actions.addChatMessage(message))
        }
        websocket.onclose = () => {
            console.log("socket close")
        }
        websocket.onerror = () => {
            console.log("socket error")
        }

        dispatch(setSelectedChat(user.nickname, id, chats))
        localStorage.setItem("openedChatId", String(id))
        navigate(`/chats/${id}`)
    }

    return (
        <div className={"chat-item"} style={selected ? {background: 'var(--violet-color)'} : {}} onClick={handleOpenChat}>
            <Avatar alt="Remy Sharp" src={AvatarMock} sx={{
                width: '54px',
                height: '54px',
            }}/>
            <div className={"user-caption"}>
                <div className={"dialog-title"}>
                    <span className={"name"}>{name ? name : chats[id].users[1]}</span>
                    <span className={"last-message-time"} style={selected ? {color: "#000"} : {}}>{time}</span>
                </div>
                <div className={"dialog-subTitle"}>
                    <span id={"lastMessage"} style={selected ? {color: "#000"} : {}} className={"last-message"}>{lastMessage}</span>
                </div>
                <div style={lastMessageHeight > 20 ? {visibility: "visible"} : {visibility: "hidden"}} className={"threeDots"}>...</div>
            </div>
        </div>
    );
};

export default ChatItem;