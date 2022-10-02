import React, {FC} from 'react';
import './ChatsPage.scss'
import LeftSection from "./components/LeftSection/LeftSection";
import RightSection from "./components/RightSection/MessagesLayout/RightSection";

const ChatsPage: FC = () => {

    return (
        <div className={"whole-page"}>
            <LeftSection/>
            <RightSection/>
        </div>
    );
};

export default ChatsPage;