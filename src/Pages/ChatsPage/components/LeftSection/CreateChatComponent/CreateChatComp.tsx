import React, {FC, useEffect, useState} from 'react';
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import './CreateChatComp.scss'
import {Button, createTheme, Input, InputAdornment, ThemeProvider} from "@mui/material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import {createChat} from "../../../../../Store/reducers/Chat/ChatActionCreators";
import {useAppDispatch, useAppSelector} from "../../../../../Store/hooks/hooks";
import {chatSlice} from "../../../../../Store/reducers/Chat/ChatSlice";

interface CreateChatProps {
    bounce: boolean | null
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff'
        },
        text: {
            primary: '#fff'
        },
        common: {
            black: '#fff'
        }
    },
});

const CreateChatComp: FC<CreateChatProps> = ({bounce}) => {
    const {error} = useAppSelector(state => state.chatReducer)
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState<boolean>(false)
    const [usernameValue, setUsernameValue] = useState<string>("")
    const handleOpen = () => {
        dispatch(chatSlice.actions.chatFetchingError(""))
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameValue(event.target.value)
    }

    const handleCreateChat = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (usernameValue.length) {
            dispatch(createChat(usernameValue))
        } else {
            dispatch(chatSlice.actions.chatFetchingError("Fill input value!"))
        }
    }

    return (
        <>
            <button
                className={`create-icon${bounce ? " bounceClass" : ""}${bounce === false ? " unbounceClass" : ""}`}
                onClick={handleOpen}
            >
                <BorderColorIcon sx={{fontSize: "32px"}}/>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={"modalCreateChat"}>
                        <ThemeProvider theme={theme}>
                            <h2>Enter Username you wanna chat with!</h2>
                            <Input
                                value={usernameValue}
                                onChange={handleChangeValue}
                                startAdornment={<InputAdornment position="start"><AlternateEmailOutlinedIcon sx={{color: `#fff`}}/></InputAdornment>}
                                sx={{mb: "0.3rem"}}
                            />
                            {error ? <div className={"errorMessage"}>{error}</div> : <></>}
                            <div className={"createButtonContainer"}>
                                <Button onClick={handleCreateChat} className={"createButton"}>Create!</Button>
                            </div>
                        </ThemeProvider>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};

export default CreateChatComp;