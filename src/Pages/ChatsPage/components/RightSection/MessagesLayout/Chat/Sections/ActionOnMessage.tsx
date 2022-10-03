import React from 'react';
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from '@mui/icons-material/Close';
import ReplyIcon from '@mui/icons-material/Reply';
import {useAppDispatch, useAppSelector} from "../../../../../../../Store/hooks/hooks";
import {ChatsSlice, messageActionEnum} from "../../../../../../../Store/reducers/Chat/ChatSlice";

const ActionOnMessage = () => {
    const dispatch = useAppDispatch()
    const {messageAction, messageActionOn} = useAppSelector(state => state.chatReducer)

    const handleCancelModify = () => {
        dispatch(ChatsSlice.actions.resetMessageAction(messageActionEnum.sending))
    }

    return messageAction !== "sending" ? (
        <div className={"action-container"}>
            <div className={"actionIcon"}>{messageAction === "editing" ? <EditIcon/> : <ReplyIcon/>}</div>
            <div className={"messageActionContainer"}>
                <div className={"messageAction"}>{messageAction === "editing" ? "Edit message" : messageActionOn.UserId}</div>
                <div className={"messageActionOn"}>{messageActionOn.Text}</div>
            </div>
            <div className={"closeIcon"} onClick={handleCancelModify}><CloseIcon/></div>
        </div>
    ) : (
        <></>
    );
};

export default ActionOnMessage;