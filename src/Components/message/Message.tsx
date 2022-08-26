import React, {FC} from 'react';
import './Message.scss';

export enum alignment {
    fromMe = 1,
    fromOther = 0
}

interface messageProps {
    messageFromMe: alignment;
    text: string;
}

const Message : FC<messageProps> = ({messageFromMe, text}) => {
    return (
        <div className={"chat-message"} style={{
            justifyContent: messageFromMe ? 'flex-end' : 'flex-start'
        }}>
            <div className={ messageFromMe ? "message-exactly sb12" : "message-exactly sb11"} style={{
                background: messageFromMe ? '#766AC8' : '#444444'
            }}>
                {text}
            </div>
        </div>
    );
};

export default Message;