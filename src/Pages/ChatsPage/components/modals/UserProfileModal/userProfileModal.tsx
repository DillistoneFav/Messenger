import React, {FC, useEffect, useState} from 'react';
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Avatar from "@mui/material/Avatar";
import AvatarMock from "../../../../../assets/sticke1r.jpg";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditIcon from "@mui/icons-material/Edit";

import Modal from "@mui/material/Modal";
import {useAppSelector} from "../../../../../Store/hooks/hooks";
import './Modal.scss'
import DataItem from "./components/data-item";
import LogOutButton from "./components/LogOutButton";

export interface shownUser {
    nickname: string,
    name: string,
    phone: string,
    bio: string
}

export interface ModalProps {
    open: boolean,
    setOpen(arg0: boolean): void,
    nickname?: string,
}

const UserProfileModal: FC<ModalProps> = ({open, setOpen, nickname}) => {
    const {user} = useAppSelector(state => state.userReducer)
    const handleClose = () => setOpen(false);
    const [shownUser, setShownUser] = useState<shownUser>({
        nickname: "",
        name: "",
        phone: "",
        bio: ""
    })
    useEffect(() => {
        !nickname && setShownUser(user)
    }, [])

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            disableAutoFocus={true}
        >
            <Fade in={open}>
                <div className={"modal-style"}>
                    <Avatar alt="Remy Sharp" src={AvatarMock} sx={{
                        width: '100px',
                        height: '100px',
                    }}
                    />
                    <div className={"modal-userName"}>{shownUser.nickname}</div>
                    <div className={"modal-onlineStatus"}>online</div>
                    <DataItem
                        icon={<CallOutlinedIcon sx={{fontSize: '30px'}}/>}
                        description={shownUser.phone}
                        title={'Phone'}
                    />
                    <DataItem
                        icon={<AlternateEmailOutlinedIcon sx={{fontSize: '30px'}}/>}
                        description={shownUser.name}
                        title={'Username'}
                    />
                    <DataItem
                        icon={<InfoOutlinedIcon sx={{fontSize: '30px'}}/>}
                        description={shownUser.bio}
                        title={'Bio'}
                    />
                    <div className={"modal-ButtonContainer"}>
                        {!nickname &&
                            <button className={"modal-LogOutButton"}>
                                <EditIcon sx={{fontSize: '24px', marginRight: "5px"}}/>
                                Edit Profile
                            </button>
                        }
                        <LogOutButton/>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};

export default UserProfileModal;