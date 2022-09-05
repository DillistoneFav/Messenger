export interface IUser {
    id: number;
    name: string;
    nickname: string;
    bio: string;
    lastOnline?: string;
    phone: string;
    image?: string;
    chats?: [];
}