import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
function App() {
  const [display, setDisplay] = useState("flex");
  useEffect(() => {
    setTimeout(() => {
      setDisplay("none");
    }, 2000);
  }, []);
  return (
    <div className="App">
      <div className="loading" style={{ display: display }}>
        <div>
          <div class="rhombus2">
            <div class="circle21"></div>
            <div class="circle22"></div>
          </div>
          <p>LOADING ...</p>
        </div>
      </div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
