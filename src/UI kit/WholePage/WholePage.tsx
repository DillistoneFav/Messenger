import React, {FC} from 'react';
import './WholePage.scss'
import ChatsFolder from "../LeftSection/ChatsFolder/ChatsFolder";
import Layout from "../RightSection/MessagesLayout/Layout";

const WholePage: FC = () => {
    return (
        <div className={"whole-page"}>
            <ChatsFolder/>
            <Layout/>
        </div>
    );
};

export default WholePage;