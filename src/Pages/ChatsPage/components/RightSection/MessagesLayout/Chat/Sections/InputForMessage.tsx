import React, {useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import Emoji from "../../../../../../../features/emoji/Emoji";
import {sendSocketMessage} from "../../../../../../../utils/socket";
import {useAppSelector} from "../../../../../../../Store/hooks/hooks";


const InputForMessage = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const {messageAction, messageActionOn} = useAppSelector(state => state.chatReducer)


    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={"input-message-container"}>
            <Emoji value={inputValue} setInputValue={setInputValue}/>
            <input placeholder="Message" value={inputValue} onChange={handleChangeValue} className={"input-message"}/>
            <SendIcon className={"send-icon"} onClick={() => sendSocketMessage(messageAction, messageActionOn.Id, inputValue )}/>
        </div>
    );
};

export default InputForMessage;