import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swaggerConfig";
import connectBD from "./config/BD";
import dotenv from "dotenv";

import cartRoute from "./routes/cartRoute";
import categoryProductRoute from "./routes/categoryProductRoute";
import productRoute from "./routes/productRoute";
import userRoute from "./routes/userRoute";

const app: Application = express();

connectBD();
dotenv.config()

app.use("/api/cart", cartRoute);
app.use("/api/categories", categoryProductRoute);
app.use("/api/productos", productRoute);
app.use("/api/users", userRoute);


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación se encuentra en http://localhost:${PORT}/api-docs`);
});
