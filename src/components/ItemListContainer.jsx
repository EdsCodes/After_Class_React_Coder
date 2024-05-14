import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    // Acceso a Productos vía JSON
    /* useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
            }, 2000)
        });
        
        promesa.then(respuesta => {
            setItems(respuesta);
        })
    }, [id]) */

    // Acceso a un Producto por ID en Firestore
    // .id => Accedo al ID del Documento
    // .data() => Accedo a todos los campos del Documento
    /* useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", "wYi9ZibpHkIWri9S8UdI");
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItems({id:snapShot.id, ...snapShot.data()});
            }
        });
    }, []); */

    // Acceder a una Collection en Firestore
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            }
        });
    }, []); */

    // Acceder a una Collection en Firestore mediante una Query
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        //const queryCollection = query(itemsCollection, where("precio", ">", 200000));
        //const queryCollection = query(itemsCollection, where("precio", "<", 200000));
        //const queryCollection = query(itemsCollection, where("nombre", "==", "Nike Air Force 1 Shadow"));
        //const queryCollection = query(itemsCollection, where("nombre", "!=", "Nike Air Force 1 Shadow"));
        const queryCollection = query(itemsCollection, (where("precio", ">", 100000), where("categoria", "==", "zapatillas")));
        getDocs(queryCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            }
        });
    }, []);



    return (
        <>
            {id ? "" : <Carousel />}
            <div className="container">
                <div className="row my-5">
                    <ItemList items={items} />
                    {/* <p>{items.nombre}</p>
                    <p><img src={items.imagen} alt={items.imagen} /></p>
                    <p>${items.precio}</p> */}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;