import React from 'react';
import Avatar from "@mui/material/Avatar";
import '../ProfileSection.scss';

const LeftProfileSection = () => {
    return (
        <div className={"left-sect"}>
            <Avatar alt="Remy Sharp" src="/1.jpg" sx={{
                width: '40px',
                height: '40px',
            }}/>
            <div className={"user-profile-caption"}>
                <h3>UserName</h3>
                <div className={"last-seen"}>Last seen at 12:00</div>
            </div>
        </div>
    );
};

export default LeftProfileSection;