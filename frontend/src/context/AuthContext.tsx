import { ReactNode, createContext,useContext,useEffect,useState } from "react";
import { User,UserAuth } from "../utils/types";
import { loginUser,checkAuthStatus } from "../helpers/api-communicator";


const AuthContext = createContext<UserAuth|null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) =>{
    const [user,setUser] =useState<User|null>(null);
    const [isLoggedIn,setisLoggedIn] =useState(false);

    useEffect(()=>{
        async function checkStatus() {
            const data = await checkAuthStatus();
            console.log(data);
                if(data){
                    setUser({email:data.email,name:data.name});
                    setisLoggedIn(true);
                }
        }
        checkStatus();
    },[]);
    const login = async (email:string,password:string)=> {
        const data =  await loginUser(email,password);
        if(data){
            setUser({email:data.email,name:data.name});
            setisLoggedIn(true);
        }
    };
    const signup = async (name:string,email:string,password:string)=>{};
    const logout = async()=>{};

    const value={
        user,
        isLoggedIn,
        login,
        logout,
        signup,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = ()=>useContext(AuthContext)