import { baseUrl } from "../const/const";
export async function getTrabajo(id) {
  try {
    const resp = await fetch(`${baseUrl}/trabajos/${id}`, {
      method: "GET",      
    });
    const response = await resp.json();

    return response;
  } catch (error) {
    throw error;
  }
}