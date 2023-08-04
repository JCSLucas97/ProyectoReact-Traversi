export default function Checkout({ funcionDelFormulario, funcionDelInput }) {
  return (
    <div>
      <div>
        <h1>Checkout</h1>
        <form onSubmit={funcionDelFormulario}>
          <input
            type="text"
            placeholder="ingrese su nombre"
            name="name"
            onChange={funcionDelInput}
          />
          <input
            type="text"
            placeholder="ingrese su apellido"
            name="lastName"
            onChange={funcionDelInput}
          />
          <button type="submit">Enviar</button>
          <button type="button">Cancelar</button>
        </form>
      </div>
    </div>
  );
}
