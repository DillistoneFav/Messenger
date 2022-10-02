import React, {FC} from 'react';
import ChatItem, {selected} from "./ChatItem/ChatItem";
import './ChatsList.scss'
import {useAppSelector} from "../../../../../Store/hooks/hooks";
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';

const ChatsList: FC = () => {
    const {selectedChat, chats} = useAppSelector(state => state.chatReducer)

    const getChatLastMessage = (chatId: number) => {
        let findChat = chats.find((item) => {
            return item.id === chatId
        })
        let findChatMessages = findChat!.messages

        if (findChatMessages.length && findChatMessages.length > 1) {
            return findChatMessages[findChatMessages.length - 1].Text
        }
        if (findChatMessages.length === 1) {
            return findChatMessages[0].Text
        }
        return ""
    }
    const getChatLastMessageTime = (chatId: number) => {
        let findChat = chats.find((item) => {
            return item.id === chatId
        })
        let findChatMessages = findChat!.messages

        if (findChatMessages.length && findChatMessages.length > 1) {
            return findChatMessages[findChatMessages.length - 1].CreatedAt
        }
        if (findChatMessages.length === 1) {
            return findChatMessages[0].CreatedAt
        }
        return ""
    }

    return (
        <div className={"chats-list"}>
            {chats ?
                chats.map(item => {
                    return (
                        <ChatItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            lastMessage={getChatLastMessage(item.id)}
                            time={getChatLastMessageTime(item.id)}
                            selected={selectedChat && selectedChat.id === item.id ? selected.selected : selected.notSelected}
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