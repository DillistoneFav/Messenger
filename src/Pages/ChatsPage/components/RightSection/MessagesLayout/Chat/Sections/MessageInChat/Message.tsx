import React, {FC} from 'react';
import './Message.scss';

export enum alignment {
    fromMe = 1,
    fromOther = 0
}

interface messageProps {
    messageFromMe: alignment;
    text: string;
    createTime: string;
}

const Message : FC<messageProps> = ({messageFromMe, text, createTime}) => {
    return (
        <div className={"chat-message"} style={{
            justifyContent: messageFromMe ? 'flex-end' : 'flex-start'
        }}>
            <div className={ messageFromMe ? "message-exactly sb12" : "message-exactly sb11"} style={{
                background: messageFromMe ? 'var(--violet-color)' : 'var(--secondary-background-color)'
            }}>
                {text}
                <span className={"message-time"}>{createTime}</span>
            </div>
        </div>
    );
};

export default Message;