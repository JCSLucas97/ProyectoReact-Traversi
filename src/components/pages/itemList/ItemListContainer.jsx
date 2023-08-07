import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    let consulta;

    let productsCollection = collection(db, "products");

    if (!categoryId) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", +categoryId)
      );
    }

    getDocs(consulta).then((res) => {
      console.log(res.docs);
      let productsArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(productsArray);
    });
  }, [categoryId]);

  if (items.length === 0) {
    return <CircularProgress color="secondary" />;
  }

  return <ItemList items={items} />;
}
