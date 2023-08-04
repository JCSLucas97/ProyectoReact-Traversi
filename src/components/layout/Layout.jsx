import NavbarContainer from "./navbar/NavbarContainer";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavbarContainer />
      <Outlet />
      <Footer />
    </>
  );
}
