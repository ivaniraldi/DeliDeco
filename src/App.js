import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogo" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
