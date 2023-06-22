import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./ItemList.css";

export default function ItemList({ addProduct }) {
  return (
    <Stack spacing={2} direction="row" className="items-margin">
      <Button onClick={addProduct} variant="contained">
        Pisos
      </Button>
      <Button onClick={addProduct} variant="contained">
        Ropa
      </Button>
      <Button onClick={addProduct} variant="contained">
        Madera
      </Button>
      <Button onClick={addProduct} variant="contained">
        Vidrios
      </Button>
    </Stack>
  );
}
