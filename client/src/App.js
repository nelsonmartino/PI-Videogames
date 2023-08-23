import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "./components";
import { Detail, Form, Home, Landing } from "./views";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
