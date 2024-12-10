import { Schema, Document, model, Types } from "mongoose";
export interface IProducts extends Document{
    name: string; 
    price: number;
    description: string;
    stock: number;
    imageURL: string;
    category: Types.ObjectId;
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    stock: { type: Number, default: 0 },
    imageURL: { type: String },
    category: {
        type: Schema.Types.ObjectId,
        ref: "CategoryProduct",
        required: true,
    },
});

export default model<IProducts>("Product", ProductSchema);