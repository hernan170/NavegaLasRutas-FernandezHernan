import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBtBt8MAVTrpE2XCvCjdIkXgJcZbTLIvA",
  authDomain: "tienda-futbol-86974.firebaseapp.com",
  projectId: "tienda-futbol-86974",
  storageBucket: "tienda-futbol-86974.firebasestorage.app",
  messagingSenderId: "30955774893",
  appId: "1:30955774893:web:7a85c2244bd304417f7724"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

//////////////////////////////////

const misProductos = [
    {id: "1", nombre: "pelota", precio: 7000, img:"../public/img/pelota1.jpg", idCat: "accesorios", stock:10},
    {id: "2", nombre: "camiseta", precio: 12000, img:"../public/img/camiseta.jpg", idCat: "indumentaria",stock:12},
    {id: "3", nombre: "short", precio: 9000, img:"../public/img/short.jpg", idCat: "indumentaria", stock:8},
    {id: "4", nombre: "botines", precio: 18000, img:"../public/img/botines.jpg", idCat: "calzados", stock:15},
]


import{collection, doc, writeBatch} from "firebase/firestore";

const subirProductos = async () => {
    const batch = writeBatch(db);
    const productosRef = collection(db, "productos");

    misProductos.forEach((producto) => {
        const nuevoDoc = doc(productosRef);
        batch.set(nuevoDoc, producto);
    });

    try{
        await batch.commit();
        console.log("productos subidos exitosamente");
    } catch (error) {
        console.error("Error al subir los productos", error);

    }
};
/*subirProductos();*/