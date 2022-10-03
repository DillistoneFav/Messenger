import React, {useEffect} from 'react';
import Message, {alignment} from "./MessageInChat/Message";
import {scrollBottom} from "../../../../../functions";
import {useAppSelector} from "../../../../../../../Store/hooks/hooks";
import {useParams} from "react-router-dom";


const Messages = () => {

    const {selectedChat, chats} = useAppSelector(state => state.chatReducer)
    const {user} = useAppSelector(state => state.userReducer)
    const params = useParams()

    useEffect(() => {
       scrollBottom()
    }, [chats, params.id])

    return (
        <div id={"toScroll"} className={"messages-container"}>
            {selectedChat && chats[selectedChat!.id].messages.map(item => {
                return <Message
                    key={Math.random()}
                    id={item.Id}
                    createTime={item.CreatedAt}
                    messageFromMe={item.UserId === user.nickname ? alignment.fromMe : alignment.fromOther}
                    text={item.Text}
                />
            })}
        </div>
    );
};

export default Messages;