import { baseUrl } from "../const/const";

export const loginNodeJs = async (correo, password) => {
  const resp = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      correo,
      password,
    }),
  });
  const response = await resp.json();
  console.log(response);
  return response;
};

/*export const registerNodeJs = async (nombre, correo, cv, celular, password) => {
  const resp = await fetch(`${baseUrl}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre, correo, cv, celular, password
    }),
  });
  const response = await resp.json();
  console.log(response);
  return response;
};*/

export const registerNodeJs = async (nombre, correo, pdf, celular, password) => {
  const formData = new FormData();
  pdf.forEach((file) => {
    formData.append('file', file);
  });
  formData.append("nombre", nombre);
  formData.append("correo", correo);  
  formData.append("celular", celular);
  formData.append("password", password);
  console.log(formData);
  const resp = await fetch(`${baseUrl}/usuarios`, {
    method: "POST",
    /* headers: {
      "Content-Type": "application/json",
    }, */
    body: formData
  });
  const response = await resp.json();
  console.log(response);
  return response;
}