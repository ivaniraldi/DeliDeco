import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
