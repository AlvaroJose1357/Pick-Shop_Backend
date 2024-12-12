import { Schema, Document, model } from "mongoose";
export interface ICategoryproducts extends Document{
    name: string;
    description: string;
}

const CategoryProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
});

export default model<ICategoryproducts>("CategoryProduct", CategoryProductSchema);