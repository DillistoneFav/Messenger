import React from 'react';
import './Chat.scss'
import Messages from "./Sections/Messages";
import InputMessage from "./Sections/InputMessage";

const Chat = () => {
    return (
        <div className={"chat-container"}>
            <Messages/>
            <InputMessage/>
        </div>
    );
};

export default Chat;