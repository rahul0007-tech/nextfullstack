import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document{  //interface design maatra gareko type script ko lagi
    content: string,
    cratedAt:Date
}

const messageSchema: Schema<Message>=new Schema({  //Message interface ko Schema design gareko Message type deko
    content:{
        type:String,
        required:true
    },
    cratedAt:{
        type: Date,
        required:true,
        default:Date.now
    }
})

export interface User extends Document{  //User ko interface design gareko Type script ko lagi 
    username:String,
    email:String,
    password:String,
    verifyCode:string,
    verifyCodeExpiry:Date,
    isVerified:boolean
    isAcceptingMessage:boolean,
    message:Message[]
}

const userSchema: Schema<User>=new Schema({  //User insterface ko Schema design gareko User interface type deko
    username:{
        type:String,
        required:[true, "user name is required"],
        trim:true, //space allow na garna lai
        unique:true
    },
    email:{
        type: String,
        required:[true,"email is required"],
        unique:true,
        match:[/.+\@.+\..+/,"please use a valid email"]  //regex value baata validation gareko
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    verifyCode:{
        type:String,
        required:[true,"verifyCode is required"]
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"verifyCodeExpiry is required"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true
    },
    message:[messageSchema]  //User Schema maa haamlai purai message ko schema chaiyera load gareko
})

const UserModel=(mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema)

export default UserModel;