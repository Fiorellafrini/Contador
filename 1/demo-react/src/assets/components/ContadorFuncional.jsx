//COMPONENTE FUNCIONAL
import { useState, useEffect } from "react";

const ContadorFuncional = () => {
  let [count, setCount] = useState(0); //primer parametro es el estado, el segundo la fn que permite modificar el estado.

  // console.log("count:", count);

  const handleClick = () => {
    setCount(count + 1);
  };

  //ciclo de vida con useeffect
  useEffect(() => {
    console.log("se monto el componente funcional"); //montaje

    return console.log("bye, bye") //desmontaje
  }, [count]); //actualizacion

  return (
    <div>
      <h1>COMPONENTE FUNCIONAL</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Aumentar</button>
    </div>
  );
};

export default ContadorFuncional;
