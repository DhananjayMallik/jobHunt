import mongoose from "mongoose";


export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName : "MERN_STACK_SEEKING"
    }).then(()=>{
        console.log("connected to data base");
    }).catch((err)=>{
        console.log(`some error occur while connecting data base ${err}`);
        
    });
}