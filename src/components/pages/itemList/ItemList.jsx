import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./ItemList.css";

export default function ItemList() {
  return (
    <Stack spacing={2} direction="row" className="items-margin">
      <Button variant="contained">Pisos</Button>
      <Button variant="contained">Ropa</Button>
      <Button variant="contained">Madera</Button>
      <Button variant="contained">Vidrios</Button>
    </Stack>
  );
}
