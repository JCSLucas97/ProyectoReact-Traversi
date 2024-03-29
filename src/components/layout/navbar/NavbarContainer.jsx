import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Navbar from "./navbar";
// import { categories } from "../../../productsMock";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export default function NavbarContainer({ number, setAmount }) {
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    let ref = collection(db, "categories");

    getDocs(ref).then((res) => {
      console.log(res.docs);
      let categoriesArray = res.docs.map((category) => {
        return { ...category.data(), id: category.id };
      });
      setCategoryItems(categoriesArray);
    });
  }, []);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={setAmount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Mensajes</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Navbar
      number={number}
      handleMobileMenuOpen={handleMobileMenuOpen}
      renderMobileMenu={renderMobileMenu}
      mobileMenuId={mobileMenuId}
      categoryItems={categoryItems}
    />
  );
}
