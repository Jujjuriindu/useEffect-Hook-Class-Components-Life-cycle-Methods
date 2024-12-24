import logo from "./logo.svg";
import "./App.css";
import FunctionalCom from "./components/FunctionalCom";
import { useState } from "react";
import ComClass from "./components/ComClass";

function App() {
  let [load, setLoad] = useState(true);
  return (
    <div className="App">
      <FunctionalCom></FunctionalCom>
      <ComClass></ComClass>
      <button
        className="loadButton"
        onClick={() => {
          setLoad(!load);
        }}>Load/Unload Components
      </button>
      {load == true ? <FunctionalCom></FunctionalCom> : null}
      {load == true ? <ComClass></ComClass> : null}
    </div>
  );
}

export default App;
