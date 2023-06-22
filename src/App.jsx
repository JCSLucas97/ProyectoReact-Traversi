import { ThemeProvider } from "@emotion/react";
// import Home from "./components/pages/home/Home";
import { customPalette } from "./ColorPalette";
import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
    <ThemeProvider theme={customPalette}>
      <div>
        <NavbarContainer />
        <ItemListContainer />
        {/* <Home /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
