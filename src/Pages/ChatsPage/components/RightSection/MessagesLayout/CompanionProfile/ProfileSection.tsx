import React from 'react';
import './ProfileSection.scss'
import LeftProfileSection from "./sections/LeftProfileSection";
import RightProfileSection from "./sections/RightProfileSection";

const ProfileSection = () => {
    return (
        <div className={"prof-sect"}>
            <LeftProfileSection/>
            <RightProfileSection/>
        </div>
    );
};

export default ProfileSection;