export type User ={
    name:string;
    email:string;
};
export type UserAuth ={
    isLoggedIn:boolean;
    user:User|null;
    login: (email:string,password:string)=>Promise<void>;
    signup:(name:string,email:string,password:string)=>Promise<void>;
    logout:()=>Promise<void>;
};
export type navprop = {
    to:string;
    bg:string;
    text:string;
    textColor:string;
    onClick?:() => Promise<void>;
};