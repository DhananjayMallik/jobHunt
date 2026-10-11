
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import {sendToken} from '../utils/jwtToken.js';
// register a new user
export const register = catchAsyncError(async(req,res,next)=>{
    const {name, email, phone, role, password} = req.body;
    
    if(!name || !email || !phone || !role || !password){
        return next(new ErrorHandler("Please fill full details of registration form!"));
    }
    
    // Email already exist or not
    const isEmail = await User.findOne({ email });
    if (isEmail) {
        return next(new ErrorHandler("Email already exists!"));
    }
    
    // user creation
    const user = await User.create({
        name,
        email,
        phone,
        password,
        role,
    });
    
    sendToken(user, 200 , res , "User Registered Successfully!");
});

// now login functionality add -->
export const login = catchAsyncError(async(req,res,next)=>{
    const {email , password , role} = req.body;
    if(!email || !password || !role){
        return next
        (new ErrorHandler("Please provide email password and role", 400)
      );
    }

    const user = await User.findOne({email}).select("+password");
    if(!user){
         new ErrorHandler("Invalid email and password", 400);
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
       return  next (new ErrorHandler("Invalid email and password", 400));
    }
    if(user.role !== role){
        return next(new ErrorHandler("user with this role not found!", 400));
    }
    sendToken(user , 200 , res, "User Loggedin Successfully");
});

// Now the logout functionality -->
export const logout = catchAsyncError(async(req,res,next)=>{
    // empty my token or cookies
    res.status(201).cookie("token" , "",{
        httpOnly : true,
        expires : new Date(Date.now()),
    }).json({
        success : true,
        message : "User logged Out Successfully Done!",
    });
});

// to get user who currently logged in
export const getUser = catchAsyncError((req,res,next)=>{
    const user = req.user;
    res.status(200).json({
        success : true,
        user,
    });
})