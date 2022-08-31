import React, {FC} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './SearchInput.scss'


const SearchInput: FC = () => {
    return (
        <Paper
            component="form"
            sx={{
                borderRadius: '22px',
                marginBottom: '8px',
                background: 'var(--main-background-color)',
                border: '1px solid #2f2f2f',
                transition: '0.3s',
                "&:hover": {
                    border: '1px solid #E9E9E9',
                }
            }}
        >
            <InputBase
                placeholder="Search"
                sx={{
                    width: '90%',
                    color: '#E9E9E9',
                    padding: '0 1rem',
                }}
            />
            <IconButton type="button" aria-label="search">
                <SearchIcon sx={{
                    color: '#707070'
                }}
                />
            </IconButton>
        </Paper>
    );
};

export default SearchInput;