interface Notification {
    id: number;
    message: string;
}
interface User {
    id: number;
    name: string;
    notifications: Notification[];
}
declare const users: User[];
export default users;
