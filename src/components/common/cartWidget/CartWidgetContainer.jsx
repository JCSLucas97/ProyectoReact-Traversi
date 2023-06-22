import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export default function CartWidgetContainer({ number }) {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={number} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
}
