import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    let filteredProducts = products.filter(
      (elemento) => elemento.category === +categoryId
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryId ? filteredProducts : products);
    });
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [categoryId]);

  return <ItemList items={items} />;
}
