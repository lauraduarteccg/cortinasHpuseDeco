import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Nosotros from "./components/Nosotros";

import Enrollable from "./components/Products/Enrollable";
import Sheer from "./components/Products/Sheer";
import Japones from "./components/Products/Japones";
import Persianas from "./components/Products/Persianas";
import Solar from "./components/Products/Solar";
import Toldos from "./components/Products/Toldos";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Cortina-Enrollable-Blackout" element={<Enrollable />}></Route>
          <Route path="/Cortina-Sheer-Elegante" element={<Sheer />}></Route>
          <Route path="/Panel-Japones" element={<Japones />}></Route>
          <Route path="/Persianas-en-Madera-y-Aluminio" element={<Persianas />}></Route>
          <Route path="/Peliculas-de-Control-Solar" element={<Solar />}></Route>
          <Route path="/Toldos" element={<Toldos />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;