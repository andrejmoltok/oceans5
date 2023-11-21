import { User } from "../classes/User";
import {  } from 'convex';

export const fetchUser = (user: any): User => {
    const aUser = new User(user.id, user.username);
    const userData = readUserByToken();
    console.log(userData);
    
    return aUser;
}
