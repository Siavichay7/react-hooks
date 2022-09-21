import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <div>
      <h1>REACT + TS</h1>
      <hr />
      <Counter></Counter>
      <Usuario></Usuario>

      <h2>UseEffect - UseRef</h2>
      <hr />

      <TimerPadre></TimerPadre>

      <h2>UseReducer</h2>
      <hr />
      <ContadorRed></ContadorRed>

      <h2>Formulario</h2>
      <hr />
      <Formulario></Formulario>
      <br />
      <br /><br /><br /><br />
    </div>
  );
}

export default App;
