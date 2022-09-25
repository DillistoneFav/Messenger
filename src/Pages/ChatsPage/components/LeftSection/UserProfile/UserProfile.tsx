import React, {FC} from 'react';
import './UserProfile.scss'
import ModalComp from "./UserProfileEditModal/ModalComp";
import {useAppSelector} from "../../../../../Store/hooks/hooks";

const UserProfile: FC = () => {
    const {user} = useAppSelector(state => state.userReducer)
    return (
        <div className={"profile-container"}>
            <ModalComp/>
            <div className={"user-name"}>
                @{user.name}
            </div>
        </div>
    );
};

export default UserProfile;