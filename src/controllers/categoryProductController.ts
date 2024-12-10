import { Request, Response } from "express";
import CategoryProduct from "../models/categoryproductModel";


export const obtenerCategorias = async (req: Request, res: Response): Promise<void> => {
  try {
    const categorias = await CategoryProduct.find();
    res.status(200).json(categorias);
    return;
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las categorías" });
  }
};


export const crearCategoria = async (req: Request, res: Response): Promise<void> => {
  try {
    const nuevaCategoria = new CategoryProduct(req.body);
    await nuevaCategoria.save();
    res.status(201).json(nuevaCategoria);
    return;
  } catch (error) {
    res.status(500).json({ error: "Error al crear la categoría" });
  }
};


export const obtenerCategoriaPorId = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoria = await CategoryProduct.findById(req.params.id);
    if (!categoria) {
      res.status(404).json({ error: "Categoría no encontrada" });
      return;
    }
    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la categoría" });
  }
};


export const actualizarCategoria = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoriaActualizada = await CategoryProduct.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!categoriaActualizada) {
      res.status(404).json({ error: "Categoría no encontrada" });
      return;
    }
    res.status(200).json(categoriaActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la categoría" });
  }
};


export const eliminarCategoria = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoriaEliminada = await CategoryProduct.findByIdAndDelete(req.params.id);
    if (!categoriaEliminada) {
      res.status(404).json({ error: "Categoría no encontrada" });
      return;
    }
    res.status(200).json({ mensaje: "Categoría eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la categoría" });
  }
};
