import { Request, Response } from "express";
import User from "../models/userModel";


export const obtenerUsuarios = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarios = await User.find();
    res.status(200).json(usuarios);
    return;
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};


export const crearUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const nuevoUsuario = new User(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
    return;
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};


export const obtenerUsuarioPorId = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuario = await User.findById(req.params.id);
    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};


export const actualizarUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarioActualizado = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuarioActualizado) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};


export const eliminarUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarioEliminado = await User.findByIdAndDelete(req.params.id);
    if (!usuarioEliminado) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};
