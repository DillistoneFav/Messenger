import {IMessage} from "./IMessage";

export interface IChat {
    id: number,
    lastMessage: ILastMessage,
    name: string,
    users: string[],
    messages: IMessage[]
}
export interface ILastMessage {
    CreatedAt: string,
    EditedAt: string,
    Text: string,
    User: string,
}