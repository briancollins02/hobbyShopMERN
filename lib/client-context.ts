import type { Dispatch } from "react";
import type { UserDetails } from "@/types";
import { createContext } from "react";
interface UserContext{
    user: UserDetails | null;
    setUser: Dispatch<any>;
}
export const UserContext = createContext<UserContext>({user:null, setUser:()=>{null}});
export const UserProvider = UserContext.Provider;