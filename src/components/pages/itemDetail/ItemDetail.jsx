import CounterContainer from "../../common/Counter/CounterContainer";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ItemDetail({
  product,
  agregarAlCarrito,
  cantidadEnCarrito,
}) {
  return (
    <div style={{ margin: "15px" }}>
      <Stack spacing={2} direction="row" className="items-margin">
        <Button variant="contained">
          {product.title}
          <br></br>${product.price}
        </Button>
        <CounterContainer
          cantidadEnCarrito={cantidadEnCarrito}
          agregarAlCarrito={agregarAlCarrito}
          stock={product.stock}
        />
      </Stack>
    </div>
  );
}
