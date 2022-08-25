import React, {FC} from 'react';
import './UserProfile.scss'
import ModalComp from "./UserProfileEditModal/ModalComp";

const UserProfile: FC = () => {
    return (
        <div className={"profile-container"}>
            <ModalComp/>
            <div className={"user-name"}>
                UserName
            </div>
        </div>
    );
};

export default UserProfile;