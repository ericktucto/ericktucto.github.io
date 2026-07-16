interface ContactPayload {
  vendor: string;
  default_subject: string;
  data: {
    nombre: string;
    email: string;
    empresa: string;
    tipo_consulta: string;
    mensaje: string;
  };
}

const API_URL = "https://send.stixcode.icu/api/send";
const VENDOR = "ericktucto";

// Mapea el value del <select> a la etiqueta legible que espera el correo
const TIPO_LABELS: Record<string, string> = {
  proyecto: "Proyecto freelance",
  empleo: "Oportunidad laboral",
  consultoria: "Consultoría técnica",
  otro: "Otro",
};

function buildPayload(form: HTMLFormElement): ContactPayload {
  const fd = new FormData(form);

  const nombre = (fd.get("nombre") as string)?.trim() ?? "";
  const email = (fd.get("email") as string)?.trim() ?? "";
  const empresa = (fd.get("empresa") as string)?.trim() ?? "";
  const tipo = (fd.get("tipo") as string) ?? "otro";
  const asunto = (fd.get("_subject") as string)?.trim() ?? "";
  const mensaje = (fd.get("mensaje") as string)?.trim() ?? "";

  return {
    vendor: VENDOR,
    default_subject: asunto || `Nuevo mensaje de contacto de ${nombre}`,
    data: {
      nombre,
      email,
      empresa,
      tipo_consulta: TIPO_LABELS[tipo] ?? tipo,
      mensaje,
    },
  };
}

async function sendContact(payload: ContactPayload): Promise<void> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${await res.text()}`);
  }
}

export function loadForm() {
  const form = document.querySelector<HTMLFormElement>("#contacto form");

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const label = button?.querySelector("span");
    const originalText = label?.textContent ?? "Enviar mensaje";

    if (button) button.disabled = true;
    if (label) label.textContent = "Enviando…";

    try {
      await sendContact(buildPayload(form));
      if (label) label.textContent = "¡Mensaje enviado!";
      form.reset();
    } catch (err) {
      console.error(err);
      if (label) label.textContent = "Error al enviar";
    } finally {
      setTimeout(() => {
        if (button) button.disabled = false;
        if (label) label.textContent = originalText;
      }, 3000);
    }
  });
}
