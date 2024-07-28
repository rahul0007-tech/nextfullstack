import mongoose from "mongoose";
import { number } from "zod";

type ConnectionObject={  //interface typescript ko design gareko
    isConnected?:number  // ? vaneko yo data aauna ni sakxa na aauna ni sakxa
}

const connection:ConnectionObject={}  //euta maatra value xa isConnected tyo ni aauna ni sakxa na aauna ni sakxa so kei pani narakheko{}vitra

async function dbConnect() {
    if (connection.isConnected){
        console.log("Already connected to data base")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI||'',{})  //{} vitra aru data base ko conditions pani din milxa
        connection.isConnected=db.connections[0].readyState  //db.connections ko first value[0] lera connection.isconnected maa rakheko
        console.log(db)
        console.log(db.connections)
        console.log("DB Connected Successfully") 
    } catch (error) {
        console.log("Database Connection failed",error);
        process.exit(1) //if connected vayena vane exit hune so that aru kei na chalos
        
    }
    
}