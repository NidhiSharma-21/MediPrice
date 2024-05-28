import {User} from "../models/user.model.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {ApiError} from "../utils/ApiError.js"
import jwt from "jsonwebtoken"

const cookieOptions = {
    httpOnly : true,
    secure : true
}
const generateAccessAndRefreshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating acess and refresh token");
    }
}

const registerUser = asyncHandler( async (req, res) => {
    
    const {firstName, lastName, email,  password, confirmPassword, accountType} = req.body;
    console.log("Req body : ", req.body)
    console.log("First Name : ", firstName)
    console.log("Last Name : ", lastName)
    if(
        [firstName, lastName, email, password, confirmPassword].some((field)=> field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }
    if(password !== confirmPassword){
        throw new ApiError(404, "Passwords not match");
    }
    if(accountType === undefined){
        accountType = "User"
    }
    const existedUser = await User.findOne({ email })

    if(existedUser){
        throw new ApiError(409, "User with email or username already exist")
    }
    // we use api to generate avatar
    const avatar = `https://ui-avatars.com/api/?name=${firstName}+${lastName}`;
    console.log("Avatar : ", avatar)
    // hashing the password
    // const hashedPassword = bcrypt.hash(password, 10);

    const user = await User.create({
        firstName,
        lastName,
        email,
        avatar,
        password,
        accountType
    })

    const createdUser = await User.findById(user._id);
    
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(200).json(
        new ApiResponse(
            200, // status code
            {
                user : createdUser
            }, // data
            "User registered successfully" //message
        )
    )

})

const loginUser = asyncHandler(async (req, res) => {

    // steps to login user
    // get user details from frontend
    // validation - not empty
    // find the user
    // password check
    // access and refresh token update
    // send cookie

    // console.log("request : ", req)
    const {email, password} = req.body;
    
    if(email === "" || password === ""){
       throw new ApiError(404, "All fields required")
    }
    // console.log("email : ", email)
    // console.log("password : ", password)
    const user = await User.findOne({
        email
    })
    // console.log(user)
    if(!user){
        throw new ApiError(404, "User doesn't exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid password")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
        new ApiResponse(
            200,
            {
                user : loggedInUser, accessToken, refreshToken
            },
            "User logged in successfully"
        )
    )
})

const logoutUser = asyncHandler(async(req, res) => {
    // delete the cookies
    // remove the accessToken, refreshToken

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set : {
                refreshToken : undefined
            }
        },
        {
            new : true
        }
    );

    return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(
        new ApiResponse(
            200,
            {},
            "User logged out successfully"
        )
    )

})

const refreshAccessToken = asyncHandler(async(req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken, 
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if(!user){
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if(incomingRefreshToken !== user.refreshToken){
            throw new ApiError(401, "Refresh token is expired or used")
        }
    
        const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)
    
        return res
        .status(200)
        .cookie("acessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json(
            new ApiResponse(
                200,
                {accessToken, refreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})

export {
    registerUser,
    loginUser, 
    logoutUser,
    refreshAccessToken
}