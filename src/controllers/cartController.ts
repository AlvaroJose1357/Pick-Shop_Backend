import { Request, Response } from "express";
import Cart from "../models/cartModel";


export const obtenerCarritoPorUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const carrito = await Cart.findOne({ userId: req.params.userId }).populate("products.product");
    if (!carrito) {
      res.status(404).json({ error: "Carrito no encontrado" });
      return;
    }
    res.status(200).json(carrito);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el carrito", details: error });
  }
};


export const agregarProductoAlCarrito = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;

  try {
    let carrito = await Cart.findOne({ userId });
    if (!carrito) {
      carrito = new Cart({ userId, products: [] });
    }
    const productoExistente = carrito.products.find((p) => p.product.toString() === productId);
    if (productoExistente) {
      productoExistente.quantity += quantity;
    } else {
      carrito.products.push({ product: productId, quantity });
    }
    await carrito.save();
    res.status(200).json(carrito);
    return;
  } catch (error) {
    res.status(500).json({ error: "Error al agregar producto al carrito", details: error });
  }
};


export const actualizarCantidadProducto = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;

  try {
    const carrito = await Cart.findOne({ userId });
    if (!carrito) {
      res.status(404).json({ error: "Carrito no encontrado" });
      return;
    }
    const producto = carrito.products.find((p) => p.product.toString() === productId);
    if (!producto) {
      res.status(404).json({ error: "Producto no encontrado en el carrito" });
      return;
    }
    producto.quantity = quantity;
    await carrito.save();
    res.status(200).json(carrito);
    return;
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la cantidad del producto", details: error });
  }
};


export const vaciarCarrito = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;

  try {
    const carrito = await Cart.findOne({ userId });
    if (!carrito) {
      res.status(404).json({ error: "Carrito no encontrado" });
      return;
    }

    carrito.products = [];
    await carrito.save();

    res.status(200).json({ mensaje: "Carrito vaciado correctamente" });
    return;
  } catch (error) {
    res.status(500).json({ error: "Error al vaciar el carrito", details: error });
  }
};
