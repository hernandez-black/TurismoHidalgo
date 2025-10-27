// Importar dependencias (versión compatible con require)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Crear la app
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

//1.-
const contactoRoutes = require("./routes/contactos");
app.use("/api/contactos", contactoRoutes);

// Conectar con MongoDB
mongoose
  .connect("mongodb://localhost:27017/contactosDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error al conectar con MongoDB:", err));

// Ruta simple de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
});

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
