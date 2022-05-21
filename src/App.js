import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Services from "./components/Services";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  const [display, setDisplay] = useState("flex");
  useEffect(() => {
    setTimeout(() => {
      setDisplay("none");
    }, 2000);
  }, []);
  return (
    <div className="App">
      <div className="loading " style={{ display: display }}>
        <div>
          <img
            src="https://thumbs.gfycat.com/DearestWeakBantamrooster-max-1mb.gif"
            alt=""
          />

          <p>LOADING ...</p>
        </div>
      </div>
      <Header />
      <Home />
      <Services />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
