import { ReactNode, createContext,useContext,useEffect,useState } from "react";
import { User,UserAuth } from "../utils/types";


const AuthContext = createContext<UserAuth|null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) =>{
    const [user,setUser] =useState<User|null>(null);
    const [isLoggedIn,serisLoggedIn] =useState(true);

    useEffect(()=>{},[]);
    const login = async (email:string,password:string)=> {};
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