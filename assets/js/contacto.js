const form = document.getElementById("contact");
const resultado = document.createElement("div"); // contenedor para mensajes
form.appendChild(resultado);

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evitar recargar la página

  // Crear objeto con los datos del formulario
  
  const datos = {
    nombre: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mensaje: document.getElementById("message").value,
    telefono: "", 
  };

  try {
    const res = await fetch("http://localhost:5000/api/contactos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const data = await res.json();

    if (res.ok) {
      resultado.textContent = data.message;
      resultado.style.color = "green";
      form.reset(); // Limpiar formulario
    } else {
      resultado.textContent = data.error || "Error al enviar el mensaje";
      resultado.style.color = "red";
    }
  } catch (error) {
    console.error("❌ Error al enviar:", error);
    resultado.textContent = "Error al enviar el mensaje";
    resultado.style.color = "red";
  }
});
