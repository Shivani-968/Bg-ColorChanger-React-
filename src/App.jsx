import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
        <div className="main">
          <div>
            <button onClick={() => setColor("red")} className="red">
              Red
            </button>
          </div>
          <div>
            <button onClick={() => setColor("green")} className="green">
              Green
            </button>
          </div>
          <div>
            <button onClick={() => setColor("blue")} className="blue">
              Blue
            </button>
          </div>
          <div>
            <button onClick={() => setColor("gray")} className="gray">
              Gray
            </button>
          </div>
          <div>
            <button onClick={() => setColor("yellow")} className="yellow">
              Yellow
            </button>
          </div>
          <div>
            <button onClick={() => setColor("pink")} className="pink">
              Pink
            </button>
          </div>
          <div>
            <button onClick={() => setColor("purple")} className="purple">
              Purple
            </button>
          </div>
          <div>
            <button
              onClick={() => setColor("rgb(230,230,250)")}
              className="lavendar"
            >
              Lavendar
            </button>
          </div>
          <div>
            <button onClick={() => setColor("white")} className="white">
              White
            </button>
          </div>
          <div>
            <button onClick={() => setColor("black")} className="black">
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
