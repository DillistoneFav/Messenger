import React, {useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import Emoji from "../../../../../Components/emoji/Emoji";

const InputMessage = () => {
    const [inputValue, setInputValue] = useState<string>('')

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={"input-message-container"}>
            <Emoji value={inputValue} setInputValue={setInputValue}/>
            <input placeholder="Message" value={inputValue} onChange={handleChangeValue} className={"input-message"}/>
            <SendIcon className={"send-icon"}/>
        </div>
    );
};

export default InputMessage;