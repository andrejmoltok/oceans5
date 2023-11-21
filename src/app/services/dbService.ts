import { User } from "../classes/User";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { readUserById, readUserByToken } from "@/convex/users";

export const fetchUser = (user: any): User => {
    const aUser = new User(user.id, user.username);
    const userData = useQuery(api.users.readUserByToken);
    console.log(userData);
    
    return aUser;
}
