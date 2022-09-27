import React, {useEffect, useRef} from 'react';
import ProfileSection from "./CompanionProfile/ProfileSection";
import './RightSection.scss'
import Chat from "./Chat/Chat";
import {useParams} from "react-router-dom";
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import {setSelectedChat} from "../../../../../Store/reducers/Chat/ChatActionCreators";
import {useAppDispatch, useAppSelector} from "../../../../../Store/hooks/hooks";

const RightSection = () => {
    const {user} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const params = useParams()
    const socket = useRef<WebSocket>()

    useEffect(() => {
        if (params.id) {
            dispatch(setSelectedChat(user.nickname, Number(params.id), user.chats))
            socket.current = new WebSocket(`ws://192.168.1.44:8080/chat/${params.id}`)

            socket.current!.onopen = () => {
                console.log("socket open")
            }
            socket.current!.onmessage = () => {
                console.log("socket message")
            }
            socket.current!.onclose = () => {
                console.log("socket close")
            }
            socket.current!.onerror = () => {
                console.log("socket error")
            }
        }
    }, [params.id])

    return params.id ? (
        <div className={"chat-layout"}>
            <ProfileSection/>
            <Chat/>
        </div>
    ) : (
        <div className={"out-of-chats"}>
            Select one in chats list!
            <HighlightAltIcon sx={{fontSize: '50px'}}/>
        </div>
    );
};

export default RightSection;