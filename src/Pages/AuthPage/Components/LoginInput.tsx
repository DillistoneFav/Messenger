import React, {FC} from 'react';
import {InputAdornment, TextField} from "@mui/material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

interface LoginInputProps {
    login: string;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void,
}

const LoginInput: FC<LoginInputProps> = ({login, handleChange}) => {
    return (
        <TextField
            autoComplete="off"
            label="Login"
            id="outlined-start-adornment"
            value={login}
            onChange={handleChange}
            sx={{ width: '100%', mb: '1rem'}}
            InputProps={{
                startAdornment:
                    <InputAdornment position="start">
                        <AlternateEmailOutlinedIcon sx={{fontSize: '24px'}}/>
                    </InputAdornment>,
            }}
        />
    );
};

export default LoginInput;