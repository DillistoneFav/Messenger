import {ChatsSlice} from "../Store/reducers/Chat/ChatSlice";
import {AppDispatch} from "../Store/store";
let currentSocket: WebSocket

export const connectToSocket = (url: string, dispatch: AppDispatch) => {
    if (currentSocket) {
        currentSocket.close()
    }
    const socket = new WebSocket(url)
    currentSocket = socket

    socket.onmessage = (event) => {
        const message = JSON.parse(event.data)
        dispatch(ChatsSlice.actions.addChatMessage(message))
    }
    socket.onerror = () => {
        console.log("socket error")
    }
}

export const sendSocketMessage = (inputValue: string) => {
    const sendMessageStructure = {
        "action": "sendMessage",
        "payload": {
            "text": inputValue
        }
    }
    currentSocket!.send(JSON.stringify(sendMessageStructure))
}