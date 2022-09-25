import React, {FC, useEffect, useState} from 'react';
import './ChatItem.scss'
import Avatar from '@mui/material/Avatar';
import AvatarMock from "../../../../../../assets/sticke1r.jpg";

interface ChatItemProps {
    name: string,
    lastMessage: string,
    time: string,
}

const ChatItem: FC<ChatItemProps> = ({name, lastMessage, time}) => {
    const [lastMessageHeight, setLastMessageHeight] = useState<number>(0)

    useEffect(() => {
        setLastMessageHeight(document.getElementById('lastMessage')!.offsetHeight)
    }, [])

    return (
        <div className={"chat-item"}>
            <Avatar alt="Remy Sharp" src={AvatarMock} sx={{
                width: '54px',
                height: '54px',
            }}/>
            <div className={"user-caption"}>
                <div className={"dialog-title"}>
                    <span className={"name"}>{name}</span>
                    <span className={"last-message-time"}>{time}</span>
                </div>
                <div className={"dialog-subTitle"}>
                    <span id={"lastMessage"} className={"last-message"}>{lastMessage}</span>
                </div>
                <div style={lastMessageHeight > 20 ? {visibility: "visible"} : {visibility: "hidden"}} className={"threeDots"}>...</div>
            </div>
        </div>
    );
};

export default ChatItem;