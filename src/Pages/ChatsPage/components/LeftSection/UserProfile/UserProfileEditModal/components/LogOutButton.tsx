import React from 'react';
import LogoutIcon from "@mui/icons-material/Logout";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../../../../Store/hooks/hooks";
import {fetchLogOut} from "../../../../../../../Store/reducers/User/UserActionCreators";

const LogOutButton = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const logout = (event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(fetchLogOut())
        navigate("/auth")
    }

    return (
        <button className={"modal-LogOutButton"} onClick={logout}>
            <LogoutIcon sx={{fontSize: '24px', marginRight: "5px"}}/>
            Log Out
        </button>
    );
};

export default LogOutButton;