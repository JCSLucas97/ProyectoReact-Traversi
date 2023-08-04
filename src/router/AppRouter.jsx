import { Route, Routes } from "react-router-dom";
import CartContextComponent from "../context/CartContext";
import { routes } from "./menuRouter";
import Layout from "../components/layout/layout";

export default function AppRouter() {
  return (
    <CartContextComponent>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
        <Route path="*" element={<h1>404 - Not Found</h1>}></Route>
      </Routes>
    </CartContextComponent>
  );
}
