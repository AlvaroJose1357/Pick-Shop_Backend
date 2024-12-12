import { Router } from "express";
import {
  obtenerCarritoPorUsuario,
  agregarProductoAlCarrito,
  actualizarCantidadProducto,
  vaciarCarrito,
} from "../controllers/cartController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Gestión del carrito de compras
 */

/**
 * @swagger
 * /cart/{userId}:
 *   get:
 *     summary: Obtener el carrito de un usuario
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Carrito del usuario obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Carrito no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:userId", obtenerCarritoPorUsuario);

/**
 * @swagger
 * /cart/{userId}:
 *   post:
 *     summary: Agregar un producto al carrito
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 description: ID del producto
 *               quantity:
 *                 type: number
 *                 description: Cantidad del producto
 *     responses:
 *       200:
 *         description: Producto agregado al carrito
 *       500:
 *         description: Error interno del servidor
 */
router.post("/:userId", agregarProductoAlCarrito);

/**
 * @swagger
 * /cart/{userId}:
 *   put:
 *     summary: Actualizar la cantidad de un producto en el carrito
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 description: ID del producto
 *               quantity:
 *                 type: number
 *                 description: Nueva cantidad
 *     responses:
 *       200:
 *         description: Cantidad del producto actualizada
 *       404:
 *         description: Producto no encontrado en el carrito
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:userId", actualizarCantidadProducto);

/**
 * @swagger
 * /cart/{userId}:
 *   delete:
 *     summary: Vaciar el carrito de un usuario
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Carrito vaciado correctamente
 *       404:
 *         description: Carrito no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:userId", vaciarCarrito);

export default router;
