import { Request, Response } from "express";
import Product from "../models/productModel";

// Obtener todos los productos
export const obtenerProductos = async (req: Request, res: Response): Promise<void> => {
  try {
    const productos = await Product.find().populate("category");
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos", details: error });
  }
};

// Obtener un producto por ID
export const obtenerProductoPorId = async (req: Request, res: Response): Promise<void> => {
  try {
    const producto = await Product.findById(req.params.id).populate("category");
    if (!producto) {
      res.status(404).json({ error: "Producto no encontrado" });
      return;
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto", details: error });
  }
};

// Crear un nuevo producto
export const crearProducto = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, description, stock, imageURL, category } = req.body;
    const nuevoProducto = new Product({ name, price, description, stock, imageURL, category });
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto", details: error });
  }
};

// Actualizar un producto
export const actualizarProducto = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;
    const productoActualizado = await Product.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (!productoActualizado) {
      res.status(404).json({ error: "Producto no encontrado" });
      return;
    }
    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto", details: error });
  }
};

// Eliminar un producto
export const eliminarProducto = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const productoEliminado = await Product.findByIdAndDelete(id);
    if (!productoEliminado) {
      res.status(404).json({ error: "Producto no encontrado" });
      return;
    }
    res.status(200).json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto", details: error });
  }
};
