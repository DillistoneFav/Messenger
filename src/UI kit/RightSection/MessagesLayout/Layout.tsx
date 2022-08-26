import React from 'react';
import ProfileSection from "./CompanionProfile/ProfileSection";
import './Layout.scss'
import Chat from "./Chat/Chat";

const Layout = () => {
    return (
        <div className={"chat-layout"}>
            <ProfileSection/>
            <Chat/>
        </div>
    );
};

export default Layout;