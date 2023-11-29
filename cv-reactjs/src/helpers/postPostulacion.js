import { baseUrl } from "../const/const";

export async function postPostulacion(trabajo, postulante) {
    try {
        const resp = await fetch(`${baseUrl}/postulaciones`, {
            method: "POST",
            /* headers: {
              "Content-Type": "application/json",
            }, */
            body: JSON.stringify({
                trabajo,
                postulante,
            }),
        });
        const response = await resp.json();
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
}