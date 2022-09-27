import React, {FC, useEffect, useState} from 'react';
import './ChatItem.scss'
import Avatar from '@mui/material/Avatar';
import AvatarMock from "../../../../../../assets/sticke1r.jpg";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../../../../Store/hooks/hooks";

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
    const [lastMessageHeight, setLastMessageHeight] = useState<number>(0)
    const {user} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        setLastMessageHeight(document.getElementById('lastMessage')!.offsetHeight)
    }, [])

    const handleOpenChat = () => {
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
                    <span className={"name"}>{name ? name : user.chats[id].users[1]}</span>
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