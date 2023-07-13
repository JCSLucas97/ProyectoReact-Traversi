import { ThemeProvider } from "@emotion/react";
// // import Home from "./components/pages/home/Home";
import { customPalette } from "./ColorPalette";
import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={customPalette}>
      <BrowserRouter>
        <Routes>
          <Route element={<NavbarContainer />}>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            ></Route>
            <Route
              path="/item-detail/:id"
              element={<ItemDetailContainer />}
            ></Route>
          </Route>
          <Route path="*" element={<h1>404 - Not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

    //
    //   <div>
    //

    //     <ItemListContainer />
    //   </div>
    //
  );
}

export default App;
