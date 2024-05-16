import { useEffect, useState } from "react";
//import arrayProductos from "./json/productos.json";
import { addDoc, collection, doc, getDocs, getFirestore, updateDoc, writeBatch } from "firebase/firestore";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

    // Cargo los productos vía JSON
    /* useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.filter(item => item.precio < 40000));
            }, 2000)
        });
        
        promesa.then(respuesta => {
            setCart(respuesta);
        })
    }, []); */

    // Cargo los productos vía FireStore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setCart(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            }
        });
    }, []);


    const calcularTotal = () => {
        return cart.reduce((acumulador, item) => acumulador += item.precio, 0);
    }

    const generarOrden = () => {
        const buyer = {nombre:nombre, email:email, telephone:telephone};
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const order = {buyer:buyer, items:items, total:calcularTotal()};
        //console.log(order);
        
        // Agrego un nuevo Documento al Firestore
        /* const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        }); */

        // Para agregar todos los productos mi array JSON a mi BD Firestore
        /* const db = getFirestore();
        const itemsCollection = collection(db, "items");
        arrayProductos.forEach(item => {
            addDoc(itemsCollection, item);
        })
        console.log("Proceso de carga productos completo!"); */

        // Modificar un Documento por ID en Firestore
        /* const db = getFirestore();
        const orderDoc = doc(db, "items", "8zsqSha4k6kT8MFPv6XM");
        updateDoc(orderDoc, {precio:55000, nombre:"Taza Cafetera Porteña", precioPromocional:45000}).then(data => {
            console.log("El Producto se actualizó correctamente!");
        }) */


        // Modificar más de un Document con Batch en Firestore
        /* const db = getFirestore();
        const doc1 = doc(db, "items", "8zsqSha4k6kT8MFPv6XM");
        const doc2 = doc(db, "items", "AmZ5MMrY503MKofHkODR");
        const doc3 = doc(db, "items", "OFRHGr6uqon87Qzvznwz");
        const batch = writeBatch(db);
        batch.update(doc1, {stock:2});
        batch.update(doc2, {stock:20});
        batch.set(doc3, {stock:2});
        batch.commit();
        console.log("Productos actualizados!"); */
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telephone</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelephone(e.target.value)}} />
                        </div>
                        
                        <button type="button" className="btn text-white bg-black" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td className="text-end">${item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}><b>Total</b></td>
                                <td className="text-end"><b>${calcularTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-light" role="alert">Felicitaciones! Tu ID de Compra es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;