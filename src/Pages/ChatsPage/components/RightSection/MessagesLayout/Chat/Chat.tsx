import React from 'react';
import './Chat.scss'
import Messages from "./Sections/Messages";
import InputForMessage from "./Sections/InputForMessage";
import ActionOnMessage from "./Sections/ActionOnMessage";

// const getMessagesStructure = {
//     "action": "getMessages",
//     payload: {
//         "limit": 50,
//         "offset": 20
//     },
// }

const Chat = () => {

    return (
        <div className={"chat-container"}>
            <Messages/>
            <ActionOnMessage/>
            <InputForMessage/>
        </div>
    );
};

export default Chat;