import app from "./utils/app.js";
import { connectToDatabase,disconnectToDatabase } from "./db/connection.js";

app.get('/hello',(req,res,next)=>{
    return res.send("welcome to the world ");
})
// app.listen(8000,()=>{console.log('server is open ')});
connectToDatabase().then(()=>{
    app.listen(8000,()=>console.log("\nserver is open"))
    disconnectToDatabase();
}).catch((err)=>{console.log(err)});


