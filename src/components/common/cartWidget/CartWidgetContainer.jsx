import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidgetContainer() {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to={"/cart"}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton size="large" aria-label="show 4 new mails" color="info">
          <Badge badgeContent={total} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>
    </Link>
  );
}
