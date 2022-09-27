import React, {useEffect, useState} from 'react';
import UserProfile from "./UserProfile/UserProfile";
import SearchInput from "./SearchInput/SearchInput";
import './LeftSection.scss'
import ChatsList from "./ChatsFolder/ChatsList";
import CreateChatComp from "./CreateChatComponent/CreateChatComp";

const LeftSection = () => {
    const [bounce, setBounce] = useState<boolean | null>(null)

    useEffect(() => {

    }, [])

    return (
        <div
            onMouseEnter={() => setBounce(true)}
            onMouseLeave={() => setBounce(false)}
            className={"left-section"}
        >
            <UserProfile/>
            <SearchInput/>
            <ChatsList/>
            <CreateChatComp bounce={bounce}/>
        </div>
    );
};

export default LeftSection;