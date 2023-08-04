import { useState } from "react";
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";

export default function CheckoutContainer() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  console.log(userData);

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();

    console.log(userData);

    navigate("/");
  };

  const funcionDelInput = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <Checkout
      funcionDelFormulario={funcionDelFormulario}
      funcionDelInput={funcionDelInput}
    />
  );
}
