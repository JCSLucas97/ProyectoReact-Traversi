import { ThemeProvider } from "@emotion/react";
import { customPalette } from "./ColorPalette";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <ThemeProvider theme={customPalette}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
