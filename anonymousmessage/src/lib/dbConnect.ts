import mongoose from "mongoose";

type connectionObject = {
    isConnected? :number;
}

const connectin: connectionObject = {}

async function dbConnect(params:Promise<void>) {
    if(connectin.isConnected){
        console.log("Already connected to database")
        return 
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '')
        connectin.isConnected = db.connections[0].readyState
        console.log("DB connected successfully")
    } catch (error) {
        console.log("DB connection faild!! ", error)
        process.exit(1)
    }
}

export default dbConnect;