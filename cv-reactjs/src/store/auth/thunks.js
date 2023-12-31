import { loginNodeJs,registerNodeJs } from "../../helpers/authHelper";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = (nombre, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startCreatingUserNodeJs = ({nombre,correo,pdf,celular, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const user = await registerNodeJs(nombre,correo,pdf,celular, password);
        if (!user.nombre) {
            return dispatch(logout());
        }
        localStorage.setItem(
            "user",
            JSON.stringify({ id: user.id, nombre: user.nombre, correo: user.correo, rol: user.rol })
        );
        return dispatch(login({ id: user.id, nombre: user.nombre, correo: user.correo , rol: user.rol}));
    };
};

export const startLoginNodeJs = ({ correo, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const user = await loginNodeJs(correo, password);
        if (!user.id) {
            return dispatch(logout());
        }
        localStorage.setItem(
            "user",
            JSON.stringify({ id: user.id, nombre: user.nombre, correo: user.correo , rol: user.rol})
        );
        return dispatch(login({ id: user.id, nombre: user.nombre, correo: user.correo , rol: user.rol}));
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        localStorage.removeItem("user");
        dispatch(logout());
    };
};
