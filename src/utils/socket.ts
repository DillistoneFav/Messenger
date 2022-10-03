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

const setMessageStructure = (messageAction: string, messageId?: number, inputValue?: string)  => {
    if (messageAction === "sending") {
        return {
            "action": "sendMessage",
            "payload": {
                "text": inputValue
            }
        }
    }
    if (messageAction === "editing") {
        return {
            "action": "editMessage",
            "payload": {
                "messageId": messageId,
                "text": inputValue
            }
        }
    }
    if (messageAction === "replying") {
        return {
            "action": "editMessage",
            "payload": {
                "replyMessageId": messageId,
                "text": inputValue
            }
        }
    }
    return {
        "action": "deleteMessage",
        "payload": {
            "messageId": messageId,
        }
    }
}

export const sendSocketMessage = (messageAction: string,  messageId?: number, inputValue?: string) => {
    const structure = setMessageStructure(messageAction, messageId, inputValue)
    currentSocket!.send(JSON.stringify(structure))
}