import React from 'react';
import './Chat.scss'
import Messages from "./Sections/Messages";
import InputForMessage from "./Sections/InputForMessage";
import {useAppSelector} from "../../../../../../Store/hooks/hooks";

// const getMessagesStructure = {
//     "action": "getMessages",
//     payload: {
//         "limit": 50,
//         "offset": 20
//     },
// }


const Chat = () => {
    const { websocket} = useAppSelector(state => state.chatReducer)



    const sendMessage = (inputValue: string) => {
        const sendMessageStructure = {
            "action": "sendMessage",
            "payload": {
                "text": inputValue
            }
        }
        websocket!.send(JSON.stringify(sendMessageStructure))
    }


    return (
        <div className={"chat-container"}>
            <Messages/>
            <InputForMessage sendMessage={sendMessage}/>
        </div>
    );
};

export default Chat;