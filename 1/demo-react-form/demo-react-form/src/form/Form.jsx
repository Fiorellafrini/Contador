const Form = () => {
  return (
    <form>
      <h1>formulario</h1>

      <label htmlFor="name">Name </label>
      <input type="text" name="name"></input>

      <hr style={{borderStyle: "none"}}></hr>

      <label htmlFor="email">Email </label>
      <input type="email" name="email"></input>

      <hr style={{borderStyle: "none"}}></hr>


      <button>Enviar</button>
    </form>
  );
};

export default Form;
