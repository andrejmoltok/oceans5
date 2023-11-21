import { User } from "../classes/User"

export const fetchPlayer = (user: any): User => {
    const aUser = new User(user.id, user.username, user.xp, user.level, user.rank);
    aUser.online = true;
    aUser.status = "Avaliable";
    return aUser;
} 