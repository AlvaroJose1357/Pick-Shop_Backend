import { Schema, Document, model, Types } from "mongoose";
export interface IUser extends Document{
    name: string; 
    lastname: string;
    phone_number: string;
    email: string;
    address: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
});

export default model<IUser>("User", UserSchema);