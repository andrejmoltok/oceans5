import { User } from "../classes/User";


export const fetchUser = (user: any): User => {
    const aUser = new User(user.id, user.username);
    return aUser;
}
