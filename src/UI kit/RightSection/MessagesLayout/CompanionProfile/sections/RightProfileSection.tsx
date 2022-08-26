import React from 'react';
import {Popover} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import '../ProfileSection.scss';

const RightProfileSection = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClickOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className={"right-sect"}>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                className={"popover-class"}
            >
                <div className={"popover-content"}>
                    <div className={"popover-action"}>action</div>
                    <div className={"popover-action"}>action</div>
                    <div className={"popover-action"}>action</div>
                </div>
            </Popover>
            <button onClick={handleClickOpenPopover} className={"functional-button"}>
                <MoreVertOutlinedIcon
                    sx={{
                        color: '#8a8a8a',
                        fontSize: '30px',
                        cursor: 'pointer'
                    }}/>
            </button>

        </div>
    );
};

export default RightProfileSection;