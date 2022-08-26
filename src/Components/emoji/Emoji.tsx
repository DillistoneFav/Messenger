import React, {FC, useState} from 'react';
import Popover from '@mui/material/Popover';
import {IEmojiData} from "emoji-picker-react";
import Picker from 'emoji-picker-react';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import './Emoji.scss'

interface emojiProps {
    setInputValue(value: string): void;
    value: string;
}


const Emoji: FC<emojiProps> = ({setInputValue, value}) => {
    const onEmojiClick = (event: React.MouseEvent<Element, MouseEvent>, emojiObject: IEmojiData) => {
        setInputValue(value + emojiObject.emoji);
    };


    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>

            <button aria-describedby={id} onClick={handleClick} className={"smiley-button"}>
                <EmojiEmotionsOutlinedIcon sx={{
                    fontSize: '30px'
                }}/>
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Picker onEmojiClick={onEmojiClick} />
            </Popover>
        </div>
    );
};

export default Emoji;