import mongoose,{Schema,Document} from "mongoose";
export interface Iuser extends Document {
    name:string;
    password:string|number,
}
const UserSchema = new Schema<Iuser> (
    {
        name : { type: String, required:true },
        password : {type: String, required: true}
    },
    {timestamps:true}
)
export default mongoose.model<Iuser>("User", UserSchema);