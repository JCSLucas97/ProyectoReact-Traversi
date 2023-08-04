import "./ItemList.css";
import ProductCard from "../../common/ProductCard/ProductCard";

export default function ItemList({ items }) {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        padding: "50px",
        gap: "27px 9px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
}
