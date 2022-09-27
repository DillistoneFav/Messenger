import React, {FC} from 'react';
import Avatar from "@mui/material/Avatar";
import '../ProfileSection.scss';
import {useAppSelector} from "../../../../../../../Store/hooks/hooks";

const LeftProfileSection = () => {

    const {otherChatUsers} = useAppSelector(state => state.chatReducer)

    return otherChatUsers.length === 1 ? (
        <div className={"left-sect"}>
            <Avatar alt="Remy Sharp" src="/1.jpg" sx={{
                width: '40px',
                height: '40px',
            }}/>
            <div className={"user-profile-caption"}>
                <h3>{otherChatUsers[0]}</h3>
                <div className={"last-seen"}>Last seen at 12:00</div>
            </div>
        </div>
    ) : (
        <div>MULTIPLE USERS CHAT!</div>
    );
};

export default LeftProfileSection;