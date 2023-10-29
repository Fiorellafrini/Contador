import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });


  const validate = (input) =>{
    let errors = {};

    if(!/^[A-Z][a-z ]+$/.test(input.name)) {
        errors.name = "DEBE TENER SOLO LETRAS"
    }

    if(!/\S+@S+\.\S+/.test(input.email)) {
        errors.email = "EMAIL INVALIDO"
    }

    return errors
    }


  //Validacion
  const [errors, setErrors] = useState({});


  const handleChange = (event) => {
    console.log(event.target.name);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

setErrors(validate(input))

    // console.log("name", input.name);
  };


  const onSubmit = (event) => {
    event.preventDefult();
    setInput({
        name: "",
        email: ""
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Formulario</h1>

      <label htmlFor="name">Name </label>
      <input
        type="text"
        name="name"
        value={input.name}
        onChange={handleChange}
      ></input>
      {errors.name !== "" && <p style={{color:"red"}}> {errors.name}</p>}

      <hr style={{ borderStyle: "none" }}></hr>

      <label htmlFor="email">Email </label>
      <input
        type="email"
        name="email"
        value={input.email}
        onChange={handleChange}
      ></input>

      <hr style={{ borderStyle: "none" }}></hr>

      <button 
      type="submit"
      disabled={!input.name || !input.email || errors.name || errors.email}
      >Enviar</button>
    </form>
  );
};

export default Form;
