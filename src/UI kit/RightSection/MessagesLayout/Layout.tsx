import React from 'react';
import ProfileSection from "./CompanionProfile/ProfileSection";
import './Layout.scss'

const Layout = () => {
    return (
        <div className={"chat-layout"}>
            <ProfileSection/>
        </div>
    );
};

export default Layout;