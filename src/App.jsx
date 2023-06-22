import { ThemeProvider } from "@emotion/react";
// import Home from "./components/pages/home/Home";
import { customPalette } from "./ColorPalette";
import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(1);

  const addProduct = () => {
    setNumber(number + 1);
  };
  return (
    <ThemeProvider theme={customPalette}>
      <div>
        <NavbarContainer number={number} />
        <ItemListContainer addProduct={addProduct} />
        {/* <Home /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
