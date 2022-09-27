import React, {useEffect} from 'react';
import Message, {alignment} from "./MessageInChat/Message";
import {scrollBottom} from "../../../../../functions";
import {useAppSelector} from "../../../../../../../Store/hooks/hooks";


const Messages = () => {

    const {chat} = useAppSelector(state => state.chatReducer)

    useEffect(() => {
       scrollBottom()
    }, [])

    return (
        <div id={"toScroll"} className={"messages-container"}>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'ну здарова'}/><Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'ну здарова'}/><Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'ну здарова'}/><Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'ну здарова'}/><Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'ну здарова'}/><Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'ну здарова'}/><Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'ну здарова'}/>
        </div>
    );
};

export default Messages;