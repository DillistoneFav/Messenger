import React, {FC, useEffect, useRef, useState} from 'react';
import './Chat.scss'
import Messages from "./Sections/Messages";
import InputForMessage from "./Sections/InputForMessage";
import {useAppDispatch, useAppSelector} from "../../../../../../Store/hooks/hooks";
import {useParams} from "react-router-dom";
import {setSelectedChat} from "../../../../../../Store/reducers/Chat/ChatActionCreators";
import {ChatsSlice} from "../../../../../../Store/reducers/Chat/ChatSlice";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const getMessagesStructure = {
    "action": "getMessages",
    payload: {
        "limit": 50,
        "offset": 0
    },
}


const Chat = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const params = useParams()
    let ws: WebSocket = Object as unknown as WebSocket;

    useEffect(() => {
        dispatch(setSelectedChat(user.nickname, Number(params.id), user.chats))
        ws = new WebSocket(`ws://192.168.1.44:8080/chat/${params.id}?token=${cookies.get("user")}`)
    }, [params.id])

    ws.onopen = () => {
        ws.send(JSON.stringify(getMessagesStructure))
    }
    ws.onmessage = (event) => {
        const messages = JSON.parse(event.data)
        dispatch(ChatsSlice.actions.addChatMessage(messages))
    }
    ws.onclose = () => {
        console.log("socket close")
    }
    ws.onerror = () => {
        console.log("socket error")
    }

    const sendMessage = (inputValue: string) => {
        const sendMessageStructure = {
            "action": "sendMessage",
            "payload": {
                "text": inputValue
            }
        }
        ws.send(JSON.stringify(sendMessageStructure))
    }


    return (
        <div className={"chat-container"}>
            <Messages/>
            <InputForMessage sendMessage={sendMessage}/>
        </div>
    );
};

export default Chat;