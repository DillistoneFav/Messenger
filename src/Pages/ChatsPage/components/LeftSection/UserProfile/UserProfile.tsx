import React, {FC} from 'react';
import './UserProfile.scss'
import {useAppSelector} from "../../../../../Store/hooks/hooks";
import Avatar from "@mui/material/Avatar";
import AvatarMock from "../../../../../assets/sticke1r.jpg";
import UserProfileModal from "../../modals/UserProfileModal/userProfileModal";

const UserProfile: FC = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <div className={"profile-container"}>
            <Avatar alt="Remy Sharp" src={AvatarMock} sx={{
                width: '54px',
                height: '54px',
                cursor: 'pointer',
            }}
                    onClick={handleOpen}
            />
            <div className={"user-name"}>
                @{user.name}
            </div>
            <UserProfileModal open={open} setOpen={setOpen}/>
        </div>
    );
};

export default UserProfile;