import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import './Modal.scss'
import Avatar from "@mui/material/Avatar";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DataItem from "./components/data-item";

export default function ModalComp() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Avatar alt="Remy Sharp" srcSet="/1.jpg" sx={{
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
            >
                <Fade in={open}>
                    <div className={"modal-style"}>
                        <Avatar alt="Remy Sharp" srcSet="/1.jpg" sx={{
                            width: '100px',
                            height: '100px',
                        }}
                        />
                        <div className={"modal-userName"}>UserName</div>
                        <div className={"modal-onlineStatus"}>online</div>
                        <DataItem
                            icon={<CallOutlinedIcon sx={{fontSize: '30px'}}/>}
                            phone={'+7 911 508 4241'}
                            title={'Phone'}
                        />
                        <DataItem
                            icon={<AlternateEmailOutlinedIcon sx={{fontSize: '30px'}}/>}
                            phone={'howareyadoin'}
                            title={'Username'}
                        />
                        <DataItem
                            icon={<InfoOutlinedIcon sx={{fontSize: '30px'}}/>}
                            phone={"tf he`s talking about?"}
                            title={'Bio'}
                        />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}