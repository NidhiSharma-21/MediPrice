import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const connectDB = async () =>{
    try {
        const dbString = `${process.env.MONGODB_URI}/${DB_NAME}`;
        console.log(dbString)
        const connectionInstance = await mongoose.connect(dbString)
        console.log(`MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error ", error)
        process.exit(1)
    }
}

export default connectDB;