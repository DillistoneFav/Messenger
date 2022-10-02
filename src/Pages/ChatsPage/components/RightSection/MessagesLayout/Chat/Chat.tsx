import React from 'react';
import './Chat.scss'
import Messages from "./Sections/Messages";
import InputForMessage from "./Sections/InputForMessage";



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
            <InputForMessage/>
        </div>
    );
};

export default Chat;