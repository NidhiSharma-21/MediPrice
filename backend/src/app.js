import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
 
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
    methods : ['GET', 'POST']
}))

app.use(express.json({
    limit: "16kb",

}))

app.use(express.urlencoded({
    extended: true,
    limit: "10mb",

}))

app.use(express.static("public"))

// by the help of this we can apply the crud operation on browser these cookies were stored in secured manner
app.use(cookieParser())

// routes import
import userRouter from "./routes/user.routes.js"

// routes declaration
app.use("/api/v1/users", userRouter)
app.get('/', (req, res) => {
    res.send("GET Request Called")
})
export {app}