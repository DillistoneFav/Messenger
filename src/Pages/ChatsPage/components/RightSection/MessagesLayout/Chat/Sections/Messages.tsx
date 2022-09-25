import React, {useEffect} from 'react';
import Message, {alignment} from "./MessageInChat/Message";
import {scrollBottom} from "../../../../../functions";


const Messages = () => {

    useEffect(() => {
       scrollBottom()
    }, [])

    return (
        <div id={"toScroll"} className={"messages-container"}>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'Здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'Здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здароваASDasdAGSDajh AS DGaljsd ALJSD agljs dALSD GLasgdlsdhA SDAlshd aljsLJS adsa DGAsdl haSD Agsdlj A JLSLSLSjad ha'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'Здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'Здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'Здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'Здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'Здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'Здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
            <Message messageFromMe={alignment.fromMe} text={'Здарова'}/>
            <Message messageFromMe={alignment.fromOther} text={'ну здарова'}/>
        </div>
    );
};

export default Messages;