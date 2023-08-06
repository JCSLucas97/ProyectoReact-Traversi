import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Counter({
  counter,
  setCounter,
  agregarAlCarrito,
  stock,
}) {
  return (
    <div>
      <h1>Contador</h1>
      <Stack spacing={2} direction="row" className="items-margin">
        <Button
          onClick={() => setCounter(counter - 1)}
          variant="outlined"
          disabled={counter > 1 ? false : true}
        >
          -
        </Button>
        <h2>{counter}</h2>
        <Button
          onClick={() => setCounter(counter + 1)}
          variant="outlined"
          disabled={counter < stock ? false : true}
        >
          +
        </Button>
        <Button
          onClick={() => agregarAlCarrito(counter)}
          variant="contained"
          color="secondary"
        >
          Agregar al carrito
        </Button>
      </Stack>
    </div>
  );
}
