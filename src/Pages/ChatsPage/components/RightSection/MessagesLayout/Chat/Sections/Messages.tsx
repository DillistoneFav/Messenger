import React, {useEffect} from 'react';
import Message, {alignment} from "./MessageInChat/Message";
import {scrollBottom} from "../../../../../functions";
import {useAppSelector} from "../../../../../../../Store/hooks/hooks";


const Messages = () => {

    const {selectedChat} = useAppSelector(state => state.chatReducer)
    const {user} = useAppSelector(state => state.userReducer)

    useEffect(() => {
       scrollBottom()
    }, [])

    return (
        <div id={"toScroll"} className={"messages-container"}>
            {selectedChat && selectedChat.messages.map(item => {
                return <Message key={Math.random()} createTime={item.CreatedAt} messageFromMe={item.UserId === user.nickname ? alignment.fromMe : alignment.fromOther} text={item.Text}/>
            })}
        </div>
    );
};

export default Messages;