import { baseUrl } from "../const/const";
export async function getWorks() {
  try {
    const resp = await fetch(`${baseUrl}/trabajos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    });
    const response = await resp.json();

    return response;
  } catch (error) {
    throw error;
  }
}

export async function registerWork(cargo, descripcion, responsabilidades, requisitos, lugar, fechaFin,) {
  try {
    const personal = "655e7296921f35cfe18ea2e5";
    const resp = await fetch(`${baseUrl}/trabajos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cargo,
        descripcion,
        responsabilidades,
        requisitos,
        lugar,
        fechaFin,
        personal,
      }),
    });
    const response = await resp.json();
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}

