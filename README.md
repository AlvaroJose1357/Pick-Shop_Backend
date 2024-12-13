# Pick&Shop - Backend del Minimarket  

**Pick&Shop** es un backend diseñado para gestionar las operaciones de un minimarket, construido con **Node.js** y **TypeScript**. Este proyecto sigue una arquitectura modular para garantizar la escalabilidad y mantenimiento del código.

---

## 🚀 Características

- **Gestión de productos**:
  - CRUD completo para los productos.
- **Gestión de categorías de productos**:
  - Organización de productos por categorías.
- **Gestión de carritos de compra**:
  - Creación y manipulación de carritos de compra para usuarios.
- **Gestión de usuarios**:
  - CRUD completo para usuarios.
- **Documentación Swagger**:
  - Documentación interactiva de la API.

---

## 🛠️ Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **TypeScript**: Lenguaje de programación tipado para un desarrollo más robusto.
- **Express**: Framework para crear APIs REST.
- **MongoDB**: Base de datos NoSQL (puede configurarse en `BD.ts`).
- **Swagger**: Documentación interactiva para la API.

---

## 📂 Estructura del proyecto

```
└── 📁Pick-Shop_Backend
    └── 📁src
        └── 📁config
            └── BD.ts
            └── entorno.ts
            └── swaggerConfig.ts
        └── 📁controllers
            └── cartController.ts
            └── categoryProductController.ts
            └── productController.ts
            └── userController.ts
        └── 📁models
            └── cartModel.ts
            └── categoryproductModel.ts
            └── productModel.ts
            └── userModel.ts
        └── 📁routes
            └── cartRoute.ts
            └── categoryProductRoute.ts
            └── productRoute.ts
            └── userRoute.ts
        └── app.ts
    └── .env
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── tsconfig.json

---

## 🌐 Endpoints principales

### **Productos**
- `GET /productos`: Lista todos los productos.
- `GET /productos/:id`: Muestra detalles de un producto específico.
- `POST /productos`: Crea un producto.
- `PUT /productos/:id`: Actualiza un producto.
- `DELETE /productos/:id`: Elimina un producto.

### **Categorías**
- `GET /categorias`: Lista todas las categorías.
- `POST /categorias`: Crea una nueva categoría.
- `PUT /categorias/:id`: Actualiza una categoría.
- `DELETE /categorias/:id`: Elimina una categoría.

### **Carrito de compras**
- `GET /carrito`: Lista los artículos en el carrito.
- `POST /carrito`: Agrega un producto al carrito.
- `DELETE /carrito/:id`: Elimina un producto del carrito.

### **Usuarios**
- `GET /usuarios`: Lista todos los usuarios.
- `POST /usuarios`: Crea un nuevo usuario.
- `PUT /usuarios/:id`: Actualiza un usuario existente.
- `DELETE /usuarios/:id`: Elimina un usuario.

---

## 📜 Instalación

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/AlvaroJose1357/Pick-Shop_Backend.git
   cd Pick-Shop_Backend
---