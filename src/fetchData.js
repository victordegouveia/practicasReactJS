import { productos } from "./productos";

export const fetchData = (simulateError = false) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (simulateError) {
                reject("Error al obtener los datos");
            } else {
                resolve(productos);
            }
        }, 1500);
    });
