import React, {useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import Emoji from "../../../../../../../features/emoji/Emoji";
import {sendSocketMessage} from "../../../../../../../utils/socket";


const InputForMessage= () => {
    const [inputValue, setInputValue] = useState<string>("")


    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={"input-message-container"}>
            <Emoji value={inputValue} setInputValue={setInputValue}/>
            <input placeholder="Message" value={inputValue} onChange={handleChangeValue} className={"input-message"}/>
            <SendIcon className={"send-icon"} onClick={() => sendSocketMessage(inputValue)}/>
        </div>
    );
};

export default InputForMessage;