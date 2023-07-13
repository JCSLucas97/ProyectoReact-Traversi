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
        gap: "9px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
}
{
  /* <Stack spacing={2} direction="row" className="items-margin">
        <Button variant="contained">Pisos</Button>
        <Button variant="contained">Ropa</Button>
        <Button variant="contained">Madera</Button>
        <Button variant="contained">Vidrios</Button>
      </Stack> */
}
