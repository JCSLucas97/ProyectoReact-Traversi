// import { useState } from "react";
import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { CircularProgress } from "@mui/material";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  const agregarAlCarrito = (amount) => {
    let data = {
      ...product,
      quantity: amount,
    };
    addToCart(data);
    Swal.fire("Productos agregados con éxito!", "", "success");
    // console.log(data);
  };

  return (
    <ItemDetail
      agregarAlCarrito={agregarAlCarrito}
      product={product}
      cantidadEnCarrito={cantidadEnCarrito}
    />
  );
}
