import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreIcon from "@mui/icons-material/MoreVert";
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Navbar({
  mobileMenuId,
  handleMobileMenuOpen,
  number,
  categoryItems,
}) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <HamburguerMenu /> */}
            <Typography
              variant="h3"
              noWrap
              component="a"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              CleanyKick
            </Typography>
            {/* <SearchElementContainer /> */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-evenly",
                color: "secondary",
              }}
            >
              <Link to={"/"}>
                <Button variant="contained" color="secondary" size="large">
                  TODAS
                </Button>
              </Link>
              {categoryItems.map((category) => {
                return (
                  <Link to={`/category/${category.id}`} key={category.id}>
                    <Button variant="contained" color="secondary" size="large">
                      {category.name}
                    </Button>
                  </Link>
                );
              })}
            </Box>
            <CartWidgetContainer number={number} />
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="color1"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
