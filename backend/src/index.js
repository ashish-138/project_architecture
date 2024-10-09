import dotenv from "dotenv"
import DBconnect from "./db/index.js"
import { app } from "./app.js"





dotenv.config()

DBconnect().then(()=>{
    app.listen(8500,()=>{
        console.log("Server and db is connected")
    })
}).catch((err)=>{
    console.log(err)
})