import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    let filteredProducts = products.filter(
      (elemento) => elemento.category === +categoryId
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(categoryId ? filteredProducts : products);
        },
        categoryId ? 0 : 3000
      );
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [categoryId]);

  if (items.length === 0) {
    return <CircularProgress color="secondary" />;
  }

  return <ItemList items={items} />;
}
