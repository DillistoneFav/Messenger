import React, {useEffect, useState} from 'react';
import ProfileSection from "./CompanionProfile/ProfileSection";
import './RightSection.scss'
import Chat from "./Chat/Chat";
import {useParams} from "react-router-dom";
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';

const RightSection = () => {
    const params = useParams()

    return params.id ? (
        <div className={"chat-layout"}>
            <ProfileSection/>
            <Chat/>
        </div>
    ) : (
        <div className={"out-of-chats"}>
            Select one in chats list!
            <HighlightAltIcon sx={{fontSize: '50px'}}/>
        </div>
    );
};

export default RightSection;