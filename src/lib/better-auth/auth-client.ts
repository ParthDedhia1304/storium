import { createAuthClient } from "better-auth/react" ;
import { BASE_URL } from "../env";

 
export const authClient =  createAuthClient({
    //you can pass client configuration here
    baseURL:BASE_URL,
});

export const {useSession,signOut}=authClient;