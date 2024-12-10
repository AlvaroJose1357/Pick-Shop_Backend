import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mini Market Pick&Shop",
      version: "1.0.0",
      description: "Endpoints para carrito, categoria de productos, productos y usuario para el minimarket.",
      contact: {
        name: "Equipo técnico de Pick&Shop",
        email: "minimarket@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Despliegue del servidor",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
