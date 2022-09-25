import {IChat} from "./IChat";

export interface IUser {
    name: string;
    nickname: string;
    bio: string;
    lastOnline?: string;
    createdAt?: number;
    phone: string;
    image?: string;
    chats: IChat[];
}