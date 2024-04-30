import {useState} from "react";

export default function App() {
  const [lampOn, setLampOn] = useState(false);

  const toggleLamp = () => {
    setLampOn(prevState => !prevState);
  };

  return (
    <div className="main">
      <div id="lampu">
        <img id="lmp" src={`./public/img/${lampOn ? "on.gif" : "off.gif"}`} alt={lampOn ? "lampu on" : "lampu off"} width="150px" />
      </div>
      <div id="tombol" onClick={toggleLamp}>
        <div id="ctk" style={{left: lampOn ? "4rem" : "1rem"}}></div>
      </div>
    </div>
  );
}
