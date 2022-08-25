import React, {FC} from 'react';
import './ChatItem.scss'
import Avatar from '@mui/material/Avatar';

const ChatItem: FC = () => {
    return (
        <div className={"chat-item"}>
            <Avatar alt="Remy Sharp" src="/1.jpg" sx={{
                width: '54px',
                height: '54px',
            }}/>
            <div className={"user-caption"}>
                <div className={"dialog-title"}>
                    <span className={"name"}>Босс</span>
                    <span className={"last-message"}>15:00</span>
                </div>
                <div className={"dialog-subTitle"}>
                    <span className={"name"}>last message</span>
                </div>
            </div>
        </div>
    );
};

export default ChatItem;