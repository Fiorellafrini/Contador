import React from "react";

//COMPONENTE DE CLASE, MANEJO DE ESTADOS

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      saludo: "Bienvenidos",
    };
  }

  click = () => {
    this.setState({counter: this.state.counter +1, saludo: "Ya sume!"}, ()=>{
        // console.log(this.state.counter);
         //hago la callback para que el consollog coincida con lo renderizado. poruqe si no el console muestra el valor anterior.

    }) //con el setstate ejecuto el estado
  };

  componentDidMount(){
    console.log("me acabo de mostrar")
  }

  componentDidUpdate(){
    console.log(`me actualice, ahora mi estado es : ${this.state.counter}`)
  }

  render() {
    return (
      <div>
        <h1>CLASS COMPONENT</h1>
        <h3>{this.state.saludo}</h3>
        <p>{this.state.counter}</p>

        <button onClick={this.click}>Aumentar</button>
      </div>
    );
  }
}
export default Contador;
