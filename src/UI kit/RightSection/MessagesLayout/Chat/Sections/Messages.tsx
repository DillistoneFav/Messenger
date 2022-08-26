import React from 'react';
import Message, {alignment} from "../../../../../Components/message/Message";


const Messages = () => {
    return (
        <div className={"messages-container"}>
            <Message messageFromMe={alignment.fromMe} text={'Здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
        </div>
    );
};

export default Messages;