import "./App.css";
import { Content } from "./Content";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [flashMessage, setFlashMessage] = useState("");

  useEffect(() => {
    if (localStorage.flashMessage) {
      setFlashMessage(localStorage.flashMessage);
      localStorage.removeItem("flashMessage");
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>{flashMessage}</div>
        <div onClick={() => setFlashMessage(null)}>{flashMessage}</div>
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
