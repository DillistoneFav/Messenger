import React, {FC} from 'react';
import ChatItem from "./ChatItem/ChatItem";
import './ChatsFolder.scss'
import SearchInput from "../SearchInput/SearchInput";
import UserProfile from "../UserProfile/UserProfile";

const ChatsFolder: FC = () => {
    return (
        <div className={"chats-folder"}>
            <UserProfile/>
            <SearchInput/>
            <div>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
            </div>

        </div>
    );
};

export default ChatsFolder;