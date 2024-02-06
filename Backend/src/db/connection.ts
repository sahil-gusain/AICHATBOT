import { error } from "console";
import { connect,disconnect } from "mongoose"

export async function connectToDatabase() {
    await connect(process.env.MONGODB_URL).then(()=>{
        console.log("connected to the database");
    }).catch((error)=>{
        console.log(error);
        throw new Error("could not connect to the database");
    })
}

export async function disconnectToDatabase() {
    await disconnect().then(()=>{
        console.log("disconnected to the database");
    }).catch((error)=>{
        console.log(error);
        throw new Error("could not disconnect to the database");
    })
}

