import React from 'react';
import ProfileSection from "./CompanionProfile/ProfileSection";
import './RightSection.scss'
import Chat from "./Chat/Chat";

const RightSection = () => {
    return (
        <div className={"chat-layout"}>
            <ProfileSection/>
            <Chat/>
        </div>
    );
};

export default RightSection;