import { baseUrl } from "../const/const";
export async function getUsuario(id) {
  try {
    const resp = await fetch(`${baseUrl}/usuarios/${id}`, {
      method: "GET",      
    });
    const response = await resp.json();

    return response;
  } catch (error) {
    throw error;
  }
}