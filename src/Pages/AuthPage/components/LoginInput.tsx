import React, {FC} from 'react';
import {InputAdornment, TextField} from "@mui/material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

interface LoginInputProps {
    iconColor?: string;
    label: string;
    login?: string;
    handleChange?(event: React.ChangeEvent<HTMLInputElement>): void,
}

const LoginInput: FC<LoginInputProps> = ({login, handleChange, label, iconColor}) => {
    return (
        <TextField
            autoComplete="off"
            label={label}
            id="outlined-start-adornment"
            value={login}
            onChange={handleChange}
            sx={{ width: '100%', mb: '1rem'}}
            InputProps={{
                startAdornment:
                    <InputAdornment position="start">
                        <AlternateEmailOutlinedIcon sx={{fontSize: '24px', color: iconColor}}/>
                    </InputAdornment>,
            }}
        />
    );
};

export default LoginInput;