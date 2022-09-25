import React, {FC} from 'react';
import ChatItem from "./ChatItem/ChatItem";
import './ChatsList.scss'
import {useAppSelector} from "../../../../../Store/hooks/hooks";
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';

const ChatsList: FC = () => {

    const {user} = useAppSelector(state => state.userReducer)

    return (
        <div className={"chats-list"}>
            {user.chats
                ? user.chats.map(item => {
                    return (
                        <ChatItem key={item.id} name={item.name} lastMessage={item.lastMessage.Text}
                                  time={item.lastMessage.CreatedAt}/>
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