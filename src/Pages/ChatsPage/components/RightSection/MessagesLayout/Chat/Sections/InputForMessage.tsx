import React, {FC, useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import Emoji from "../../../../../../../features/emoji/Emoji";

interface InputForMessageProps {
    sendMessage(arg0: string): void
}

const InputForMessage: FC<InputForMessageProps> = ({sendMessage}) => {
    const [inputValue, setInputValue] = useState<string>("")

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={"input-message-container"}>
            <Emoji value={inputValue} setInputValue={setInputValue}/>
            <input placeholder="Message" value={inputValue} onChange={handleChangeValue} className={"input-message"}/>
            <SendIcon className={"send-icon"} onClick={() => sendMessage(inputValue)}/>
        </div>
    );
};

export default InputForMessage;