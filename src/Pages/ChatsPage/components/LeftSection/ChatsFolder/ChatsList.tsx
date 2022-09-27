import React, {FC, useEffect} from 'react';
import ChatItem, {selected} from "./ChatItem/ChatItem";
import './ChatsList.scss'
import {useAppSelector} from "../../../../../Store/hooks/hooks";
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';

const ChatsList: FC = () => {

    const {user} = useAppSelector(state => state.userReducer)
    const {chat} = useAppSelector(state => state.chatReducer)

    return (
        <div className={"chats-list"}>
            {user.chats ?
                user.chats.map(item => {
                    return (
                        <ChatItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            lastMessage={item.lastMessage.Text}
                            time={item.lastMessage.CreatedAt}
                            selected={chat.id === item.id ? selected.selected : selected.notSelected}
                        />
                    )
                })
                :
                <div className={"outOfChats"}>
                    <div className={"content"}>
                        <SpeakerNotesOffIcon sx={{fontSize: "60px"}}/>
                        <div>No chats there...</div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ChatsList;