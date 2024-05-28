import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrpt from "bcrypt"

const userSchema = new Schema(
    {
        firstName : {
            type : String,
            required : true,
        },
        lastName : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : [true, 'Email is required'],
            unique : true,
            lowercase : true,
            trim : true,
        },
        accountType :{
            type: String,
			enum: ["User", "Pharma"],
			required: true,
        },
        avatar : {
            type : String, 
        },

        password : {
            type : String,
            required : [true, "Password is required"]
        },
        refreshToken : {
            type : String,
        }
    },
    {
        timestamps:true
    }
)


userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();

    this.password = await bcrpt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrpt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            email : this.email,
            username : this.username,
            firstName : this.firstName,
            lastName : this.lastName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)