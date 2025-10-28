const form = document.getElementById("contact");
const resultado = document.createElement("div"); // Contenedor de mensajes
form.appendChild(resultado);

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evitar recarga

  // Obtener los valores
  const nombre = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("message").value.trim();

  // Expresiones regulares
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ✅ Validaciones
  if (!nameRegex.test(nombre)) {
    mostrarMensaje("❌ El nombre solo debe contener letras y espacios (mínimo 3 caracteres).", "red");
    return;
  }

  if (!emailRegex.test(email)) {
    mostrarMensaje("❌ Ingresa un correo electrónico válido.", "red");
    return;
  }

  if (mensaje.length < 5) {
    mostrarMensaje("❌ El mensaje debe tener al menos 5 caracteres.", "red");
    return;
  }

  // Crear objeto con los datos
  const datos = { nombre, email, mensaje, telefono: "" };

  try {
    const res = await fetch("http://localhost:5000/api/contactos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const data = await res.json();

    if (res.ok) {
      mostrarMensaje("✅ " + data.message, "green");
      form.reset(); // Limpiar formulario
    } else {
      mostrarMensaje("❌ " + (data.error || "Error al enviar el mensaje."), "red");
    }
  } catch (error) {
    console.error("❌ Error al enviar:", error);
    mostrarMensaje("⚠️ No se pudo conectar con el servidor.", "red");
  }
});

// 🧩 Función para mostrar mensajes de estado
function mostrarMensaje(texto, color) {
  resultado.textContent = texto;
  resultado.style.color = color;
  resultado.style.marginTop = "10px";
  resultado.style.fontWeight = "bold";
}
