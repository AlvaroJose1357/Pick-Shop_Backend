import { Schema, Document, model, Types } from "mongoose";
// Interfaz para representar un producto en el carrito
interface ICartProduct {
    product: Types.ObjectId; // Referencia al modelo Product
    quantity: number; // Cantidad de este producto en el carrito
}

// Interfaz principal para el carrito
export interface ICart extends Document {
    user: Types.ObjectId; // Referencia al modelo User
    products: ICartProduct[]; // Lista de productos en el carrito
    date_create: Date;
}

const CartSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [{ 
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true}, 
        quantity: { type: Number, require: true, min: [1, "La cantidad debe ser al menos 1"]}, // Validación adicional
    }],
    date_create: { type: Date, default: Date.now}
});

export default model<ICart>("Cart", CartSchema);

