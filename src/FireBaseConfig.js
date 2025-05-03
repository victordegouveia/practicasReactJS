import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const { VITE_API_KEY, VITE_AUTH_DOMAIN, VITE_PROJECT_ID, VITE_STORAGE_BUCKET, VITE_MESSAGING_SENDER_ID, VITE_APP_ID } = import.meta.env;

const firebaseConfig = {
    apiKey: VITE_API_KEY,
    authDomain: VITE_AUTH_DOMAIN,
    projectId: VITE_PROJECT_ID,
    storageBucket: VITE_STORAGE_BUCKET,
    messagingSenderId: VITE_MESSAGING_SENDER_ID,
    appId: VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const actualizarImagenProducto = async (id, nuevaImagen) => {
    try {
        const productoRef = doc(db, "productos", id); 
        await updateDoc(productoRef, {
            imagen: nuevaImagen 
        });
        console.log(`✅ Imagen del producto ${id} actualizada correctamente`);
    } catch (error) {
        console.error("❌ Error al actualizar la imagen:", error);
    }
};

actualizarImagenProducto("3", "/imagenes/tshirt.png");
