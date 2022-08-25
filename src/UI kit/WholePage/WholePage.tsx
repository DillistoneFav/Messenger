import React, {FC} from 'react';
import './WholePage.scss'
import ChatsFolder from "../LeftSection/ChatsFolder/ChatsFolder";

const WholePage: FC = () => {
    return (
        <div className={"whole-page"}>
            <ChatsFolder/>
        </div>
    );
};

export default WholePage;