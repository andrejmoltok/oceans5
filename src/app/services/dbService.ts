import { User } from "../classes/User"

export const fetchPlayer = (user: any): User => {
    const aUser = new User(user.id, user.username);
    aUser.online = true;
    aUser.status = "Avaliable";
    return aUser;
} 