const express = require("express");
const router = express.Router();
const Contacto = require("../model/Contacto");

router.post("/", async (req, res) => {
  try {
    const nuevoContacto = new Contacto({
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono,
      mensaje: req.body.mensaje,
    });

    await nuevoContacto.save();
    res.status(201).json({ message: "✅ Contacto guardado exitosamente" });
  } catch (error) {
    console.error("❌ Error al guardar contacto:", error);
    res.status(500).json({ error: "Error al guardar el contacto" });
  }
});

module.exports = router;
