import express, { Application } from "express";
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swaggerConfig";
import connectBD from "./config/BD";
import { PORT } from "./config/entorno";

import cartRoute from "./routes/cartRoute";
import categoryProductRoute from "./routes/categoryProductRoute";
import productRoute from "./routes/productRoute";
import userRoute from "./routes/userRoute";

const app: Application = express();

connectBD();

app.use(cors());

app.use("/api/cart", cartRoute);
app.use("/api/categories", categoryProductRoute);
app.use("/api/productos", productRoute);
app.use("/api/users", userRoute);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PUERTO = PORT || 3000;
app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(
    `Documentación se encuentra en http://localhost:${PORT}/api-docs`
  );
});
