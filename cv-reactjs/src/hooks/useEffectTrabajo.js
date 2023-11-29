import { useEffect, useState } from "react";
import { getTrabajo } from "../helpers/getTrabajo";

export const useEffectTrabajo = (id) => {
    const [state, setState] = useState({});
    useEffect( () => {
        getTrabajo(id).then(data =>{
            setState(data);
            console.log(data);
            //return data;
        })
    },[id])    
    return state;
}