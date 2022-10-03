import React, {FC} from 'react';
import './Message.scss';
import {Popover} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteIcon from '@mui/icons-material/Delete';
import {useAppDispatch, useAppSelector} from "../../../../../../../../Store/hooks/hooks";
import {ChatsSlice, messageActionEnum} from "../../../../../../../../Store/reducers/Chat/ChatSlice";
import {setActionMessage} from "../../../../../../../../Store/reducers/Chat/ChatActionCreators";
import {sendSocketMessage} from "../../../../../../../../utils/socket";

export enum alignment {
    fromMe = 1,
    fromOther = 0
}

interface messageProps {
    messageFromMe: alignment;
    text: string;
    createTime: string;
    id: number
}

const Message : FC<messageProps> = ({messageFromMe, text, createTime, id}) => {
    const dispatch = useAppDispatch()
    const {selectedChat} = useAppSelector(state => state.chatReducer)
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    const handleOpenContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        setAnchorEl(event.currentTarget);
    }

    const handleModifyMessage = (action: messageActionEnum) => (event: React.MouseEvent<HTMLDivElement>) => {
        dispatch(ChatsSlice.actions.setActionType(action))
        dispatch(setActionMessage(selectedChat!, id))
    }

    const handleDeleteMessage = () => {
        sendSocketMessage("deleteMessage", id)
    }

    return (
        <>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                className={"popover-class"}
            >
                <div className={"popover-content"}>
                    <div className={"popover-action"} onClick={handleModifyMessage(messageActionEnum.replying)}>
                        <ReplyIcon/>
                        <div className={"actionName"}>Reply</div>
                    </div>
                    <div className={"popover-action"} onClick={handleModifyMessage(messageActionEnum.editing)}>
                        <EditIcon/>
                        <div className={"actionName"}>Edit</div>
                    </div>
                    <div className={"popover-action"} onClick={handleDeleteMessage}>
                        <DeleteIcon/>
                        <div className={"actionName"}>Delete</div>
                    </div>
                </div>
            </Popover>
            <div
                className={"chat-message"}
                style={{justifyContent: messageFromMe ? 'flex-end' : 'flex-start'}}
                onContextMenu={handleOpenContextMenu}
            >
                <div className={ messageFromMe ? "message-exactly sb12" : "message-exactly sb11"} style={{
                    background: messageFromMe ? 'var(--violet-color)' : 'var(--secondary-background-color)'
                }}>
                    {text}
                    <span className={"message-time"}>{createTime}</span>
                </div>
            </div>
        </>

    );
};

export default Message;