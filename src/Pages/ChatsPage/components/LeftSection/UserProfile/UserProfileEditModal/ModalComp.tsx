import React from 'react';

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Avatar from "@mui/material/Avatar";

import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditIcon from '@mui/icons-material/Edit';

import LogOutButton from "./components/LogOutButton";
import DataItem from "./components/data-item";

import './Modal.scss'
import AvatarMock from '../../../../../../assets/sticke1r.jpg'
import {useAppSelector} from "../../../../../../Store/hooks/hooks";


export default function ModalComp() {
    const {user} = useAppSelector(state => state.userReducer)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Avatar alt="Remy Sharp" src={AvatarMock} sx={{
                width: '54px',
                height: '54px',
                cursor: 'pointer',
            }}
            onClick={handleOpen}
            />
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
                        <div className={"modal-userName"}>{user.nickname}</div>
                        <div className={"modal-onlineStatus"}>online</div>
                        <DataItem
                            icon={<CallOutlinedIcon sx={{fontSize: '30px'}}/>}
                            description={user.phone}
                            title={'Phone'}
                        />
                        <DataItem
                            icon={<AlternateEmailOutlinedIcon sx={{fontSize: '30px'}}/>}
                            description={user.name}
                            title={'Username'}
                        />
                        <DataItem
                            icon={<InfoOutlinedIcon sx={{fontSize: '30px'}}/>}
                            description={user.bio}
                            title={'Bio'}
                        />
                        <div className={"modal-ButtonContainer"}>
                            <button className={"modal-LogOutButton"}>
                                <EditIcon sx={{fontSize: '24px', marginRight: "5px"}}/>
                                Edit Profile
                            </button>
                            <LogOutButton/>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}