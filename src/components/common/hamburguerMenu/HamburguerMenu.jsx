import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function HamburguerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {/* <IconButton
          size="large"
          edge="start"
          color="secondary"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        > */}
        <MenuIcon
          size="large"
          edge="start"
          color="color2"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        />
        {/* </IconButton> */}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Productos para piso</MenuItem>
        <MenuItem onClick={handleClose}>Productos para ropa</MenuItem>
        <MenuItem onClick={handleClose}>Productos para madera</MenuItem>
      </Menu>
    </div>
  );
}
