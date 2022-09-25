export interface IChat {
    id: number,
    lastMessage: ILastMessage,
    name: string,
    users: string[]
}
export interface ILastMessage {
    CreatedAt: string,
    EditedAt: string,
    Text: string,
    User: string,
}