import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreIcon from "@mui/icons-material/MoreVert";
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";
import HamburguerMenu from "../../common/menu/HamburguerMenu";
// import SearchElementContainer from "../../common/search/SearchElementContainer";

export default function Navbar(mobileMenuId, handleMobileMenuOpen) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <HamburguerMenu />
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            CleanyKick
          </Typography>
          {/* <SearchElementContainer /> */}
          <Box sx={{ flexGrow: 1 }} />
          <CartWidgetContainer />
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
